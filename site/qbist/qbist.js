/* Qbist - based on:
 * Dr. J"orn Loviscach: Ausgew"urfelt.
 * Moderne Kunst algorithmisch erzeugen.
 * c't 1995, volume 10, pages 326-329.
 *
 * Recast in JavaScript in 2018 by UJR
 *
 * Usage:
 * var q = Qbist.createRandom(name=null);
 * var r = Qbist.createVariation(q, coarseness);
 *   coarseness: 1=fine, 2=medium, 3=coarse
 * Qbist.render(q, imageData, antialias=undefined);
 *   antialias: overrides q.antialias
 *
 * Representation:
 *  q = {name:String, supersample:Int, antialias:Bool, parms:Array[144]}
 * where supersample defaults to 2 if antialias is truthy and 1 if not,
 * and parms is [op1, src1, ctl1, dst1, op2, src2, ctl2, dst2, etc].
 * Alternatives for the parameters:
 *  (a)  {op:int, src:int, ctl:int, dst:int}[36]    array of object
 *  (b)  {op:[36], src:[36], ctl:[36], dst:[36]}    parallel arrays
 *  (c)  parms[4*36]   op[i]=parms[4*i], src[i]=parms[4*i+1], etc.
 * Realised below is (c) for economy.
 *
 * The algorithm applies a sequence of 36 operations, chosen at random
 * from a set O of 9 operations (project, shift, shift back, rotate,
 * rotate back, multiply, sine, conditional, complement), to registers
 * chosen at random from a set R of 6 registers numbered 0..5.
 * Each register holds three floating point numeric values between 0 and 1.
 * After the operations have been applied, the three values of register 0
 * are interpreted as the pixel's RGB value. In pseudo code:
 *
 *  color[x,y] = begin
 *    for k in 0..5:
 *      set R[k] = (x/w,y/h,k/6)
 *    for i in 0..35:
 *      let op=op(q,i), src=src(q,i), ctl=ctl(q,i), dst=dst(q,i)
 *      set R[dst] = O[op](R[src], R[ctl])
 *    return R[0] as RGB color
 *  end
 *
 * where q is the parameter set for a Qbist rendering, op(q,i) in 1..9
 * the operation, and src(q,i), ctl(q,i), dst(q,i) in 0..5 the registers.
 */

var Qbist = (function(){
  "use strict"; // opt in to strict mode for this function/module

  function opNone(reg, src, ctl, dst){
  }

  function opProject(reg, src, ctl, dst){
    src*=3; ctl*=3; dst*=3;
    var dotprod = reg[src+0] * reg[ctl+0] + // src.x*ctl.x
                  reg[src+1] * reg[ctl+1] + // src.y*ctl.y
                  reg[src+2] * reg[ctl+2];  // src.z*ctl.z
    reg[dst+0] = dotprod * reg[src+0]; // x
    reg[dst+1] = dotprod * reg[src+1]; // y
    reg[dst+2] = dotprod * reg[src+2]; // z
  }

  function opShift(reg, src, ctl, dst){
    src*=3; ctl*=3; dst*=3;
    reg[dst+0] = reg[src+0] + reg[ctl+0]; // x
    if(reg[dst+0] >= 1.0){reg[dst+0] -= 1.0;}
    reg[dst+1] = reg[src+1] + reg[ctl+1]; // y
    if(reg[dst+1] >= 1.0){reg[dst+1] -= 1.0;}
    reg[dst+2] = reg[src+2] + reg[ctl+2]; // z
    if(reg[dst+2] >= 1.0){reg[dst+2] -= 1.0;}
  }

  function opShiftBack(reg, src, ctl, dst){
    src*=3; ctl*=3; dst*=3;
    reg[dst+0] = reg[src+0] - reg[ctl+0]; // x
    if(reg[dst+0] <= 0.0){reg[dst+0] += 1.0;}
    reg[dst+1] = reg[src+1] - reg[ctl+1]; // y
    if(reg[dst+1] <= 0.0){reg[dst+1] += 1.0;}
    reg[dst+2] = reg[src+2] - reg[ctl+2]; // z
    if(reg[dst+2] <= 0.0){reg[dst+2] += 1.0;}
  }

  function opRotate(reg, src, ctl, dst){
    src*=3; dst*=3;
    reg[dst+0] = reg[src+1]; // dst.x = src.y
    reg[dst+1] = reg[src+2]; // dst.y = src.z
    reg[dst+2] = reg[src+0]; // dst.z = src.x
  }

  function opRotateBack(reg, src, ctl, dst){
    src*=3; dst*=3;
    reg[dst+0] = reg[src+2]; // dst.x = src.z
    reg[dst+1] = reg[src+0]; // dst.y = src.x
    reg[dst+2] = reg[src+1]; // dst.z = src.y
  }

  function opMultiply(reg, src, ctl, dst){
    src*=3; ctl*=3; dst*=3;
    reg[dst+0] = reg[src+0] * reg[ctl+0]; // x
    reg[dst+1] = reg[src+1] * reg[ctl+1]; // y
    reg[dst+2] = reg[src+2] * reg[ctl+2]; // z
  }

  function opSine(reg, src, ctl, dst){
    src*=3; ctl*=3; dst*=3;
    reg[dst+0] = 0.5 + 0.5 * Math.sin(20.0 * reg[src+0] * reg[ctl+0]); // x
    reg[dst+1] = 0.5 + 0.5 * Math.sin(20.0 * reg[src+1] * reg[ctl+1]); // y
    reg[dst+2] = 0.5 + 0.5 * Math.sin(20.0 * reg[src+2] * reg[ctl+2]); // z
  }

  function opConditional(reg, src, ctl, dst){
    src*=3; ctl*=3; dst*=3;
    if(reg[ctl+0] + reg[ctl+1] + reg[ctl+2] > 0.5){
      reg[dst+0] = reg[src+0]; // x
      reg[dst+1] = reg[src+1]; // y
      reg[dst+2] = reg[src+2]; // z
    }else{
      reg[dst+0] = reg[ctl+0]; // x
      reg[dst+1] = reg[ctl+1]; // y
      reg[dst+2] = reg[ctl+2]; // z
    }
  }

  function opComplement(reg, src, ctl, dst){
    src*=3; dst*=3;
    reg[dst+0] = 1.0 - reg[src+0]; // x
    reg[dst+1] = 1.0 - reg[src+1]; // y
    reg[dst+2] = 1.0 - reg[src+2]; // z
  }

  var ops = [
    opNone,
    opProject,
    opShift,
    opShiftBack,
    opRotate,
    opRotateBack,
    opMultiply,
    opSine,
    opConditional,
    opComplement
  ];

  var NUM_REGS = 6;
  var NUM_STEPS = 36;
  var NUM_OPS = ops.length; // 10

  /** Return random integer in 0..max-1 */
  function rand(max){
    return Math.floor(Math.floor(max) * Math.random());
  }

  /** Append or increment "#N" to the given name */
  function incrementName(name){
    name = name || "";
    if(name.length < 1){
      return name;
    }
    var index = name.search(/#\d+$/);
    if(index < 0){
      name = name + "#1";
    }else{
      var pre = name.slice(0,index);
      var post = name.slice(index+1);
      var num = parseInt(post) + 1;
      name = pre + "#" + num;
    }
    return name;
  }

  /** Create a new qbist object with all zero parameters */
  function create(name){
    var len = 4*NUM_STEPS; // each step: op, src, ctl, dst
    var parms = new Array(len);
    //parms.fill(0); missing on IE
    for(var i=0; i<len; i++){parms[i]=0;}
    return { name: name || "", parms: parms };
  }

  /** Create a deep copy of the given qbist object */
  function clone(q){
    var len = 4*NUM_STEPS;
    var qq = create(q.name);
    for(var i=0; i<len; i++){
      qq.parms[i] = q.parms[i] || 0;
    }
    if(typeof q.antialias == "boolean"){
      qq.antialias = q.antialias;
    }
    if(typeof q.supersample == "number"){
      qq.supersample = q.supersample;
    }
    return qq;
  }

  /** Check if min <= num < max; throw a RangeError if not */
  function validateRange(ary, idx, min, max){
    var num=ary[idx];
    if(typeof num === "number" && min <= num && num < max){
      return;
    }
    throw new RangeError(
      "Invalid Qbist: parameter value '" + num + "' at index " + idx +
      " is out of expected range " + min + " <= value < " + max);
  }

  /** Return the given Qbist object if valid, otherwise throw an error */
  function validate(q){
    if(!(q && q.parms && q.parms.length == 4*NUM_STEPS)){
      throw new Error("Invalid Qbist: not an object with " +
        "a 'parms' array of length " + (4*NUM_STEPS));
    }
    for(var i=0; i<NUM_STEPS; i++){
      validateRange(q.parms, 4*i+0, 0, NUM_OPS);//op
      validateRange(q.parms, 4*i+1, 0, NUM_REGS);//src
      validateRange(q.parms, 4*i+2, 0, NUM_REGS);//ctl
      validateRange(q.parms, 4*i+3, 0, NUM_REGS);//dst
    }
    return q;
  }

  /** Randomize the qbist parameters in-place */
  function randomize(q){
    for(var i=0; i<NUM_STEPS; i++){
      q.parms[4*i+0] = 1+rand(NUM_OPS-1);  // op_i in 1..NUM_OPS
      q.parms[4*i+1] = rand(NUM_REGS); // src_i in 0..NUM_REGS-1
      q.parms[4*i+2] = rand(NUM_REGS); // ctl_i
      q.parms[4*i+3] = rand(NUM_REGS); // dst_i
    }
  }

  /** Variegate the qbist params in-place;
      coarseness: 1=fine, 2=medium, 3=coarse */
  function variegate(parms, coarseness){
    switch(coarseness || 2){
    case 3: // coarse
      parms[4*rand(NUM_STEPS)+0] = 1+rand(NUM_OPS-1); // op
      parms[4*rand(NUM_STEPS)+1] = rand(NUM_REGS); // src
      parms[4*rand(NUM_STEPS)+2] = rand(NUM_REGS); // ctl
      parms[4*rand(NUM_STEPS)+3] = rand(NUM_REGS); // dst
      // FALLTHRU
    case 2: // medium
      parms[4*rand(NUM_STEPS)+0] = 1+rand(NUM_OPS-1); // op
      parms[4*rand(NUM_STEPS)+1] = rand(NUM_REGS); // src
      parms[4*rand(NUM_STEPS)+2] = rand(NUM_REGS); // ctl
      parms[4*rand(NUM_STEPS)+3] = rand(NUM_REGS); // dst
      break;
    case 1: // fine
      switch(rand(4)){
      case 0: parms[4*rand(NUM_STEPS)+0] = 1+rand(NUM_OPS-1); break; // op
      case 1: parms[4*rand(NUM_STEPS)+1] = rand(NUM_REGS); break; // src
      case 2: parms[4*rand(NUM_STEPS)+2] = rand(NUM_REGS); break; // ctl
      case 3: parms[4*rand(NUM_STEPS)+3] = rand(NUM_REGS); break; // dst
      }
      break;
    default:
      throw new RangeError("coarseness must be 1 or 2 or 3");
    }
  }

  /** Optimize qbist parameters: set steps to no-op (code 0)
      that do not contribute to the final result in register zero.
      This optimization has no effect on the rendered image, but
      it may affect variations of this qbist: optimize a copy! */
  function optimize(parms){
    var i;
    var pending=new Array(NUM_REGS); // 0..NUM_REGS-1
    // Initialize array of pending registers:
    for(i=1; i<NUM_REGS; i++){pending[i]=false;}
    pending[0]=true; // we're waiting for a result in reg zero
    // Now walk backwards through all transformation steps:
    for(i=NUM_STEPS-1; i>=0; i--){
      let dst=parms[4*i+3];
      if(pending[dst]){
        let src=parms[4*i+1];
        let ctl=parms[4*i+2];
        pending[dst]=false; // no longer pending
        pending[src]=true; // but we're now waiting...
        pending[ctl]=true; // ...for these two inputs
      }else{
        parms[4*i+0]=0; // set to no-op (drop this step)
      }
    }
  }

  function render(qbist, imageData, antialias){
    validate(qbist);

    var w = imageData.width;
    var h = imageData.height;
    var data = imageData.data; // Uint8ClampedArray

    if(typeof antialias!=="boolean"){
      antialias=qbist.antialias;
    }
    var ss = qbist.supersample || (antialias ? 2 : 1);
    var ww = w*ss, hh = h*ss; // supersampled width and height

    var reg = new Float32Array(3*NUM_REGS); // the (x,y,z) registers
    var acc = new Float32Array(3); // the supersampling accumulator
    var parms = new Int8Array(qbist.parms);
    optimize(parms); // drop steps that don't contribute to final result

    for(var x=0; x<w; x++){
      for(var y=0; y<h; y++){

        acc[0] = acc[1] = acc[2] = 0.0;

        for(var xx=0; xx<ss; xx++){
          for(var yy=0; yy<ss; yy++){

            // Initialize the registers:
            for(var k=0; k<NUM_REGS; k++){
              reg[3*k+0] = (x*ss + xx) / ww; // x/w
              reg[3*k+1] = (y*ss + yy) / hh; // y/h
              reg[3*k+2] = k / NUM_REGS;
            }

            // Apply transformation steps:
            for(var i=0; i<NUM_STEPS; i++){
              var op = parms[4*i+0];
              if (op <= 0) continue; // this op was optimized away
              var fun = ops[op]; // the trafo function in step i
              var src = parms[4*i+1];
              var ctl = parms[4*i+2];
              var dst = parms[4*i+3];
              fun(reg, src, ctl, dst);
            }

            // Add color from reg 0:
            acc[0] += reg[0];
            acc[1] += reg[1];
            acc[2] += reg[2];
          }
        }

        // Set pixel (treat acc x,y,z as r,g,b):
        var offset = y*w*4 + x*4, scale = 1/(ss*ss);
        data[offset+0] = Math.floor(256*acc[0]*scale); // red
        data[offset+1] = Math.floor(256*acc[1]*scale); // green
        data[offset+2] = Math.floor(256*acc[2]*scale); // blue
        data[offset+3] = 255; // opaque
      }
    }
  }

  function createRandom(name){
    var q = create(name);
    randomize(q);
    return q;
  }

  function createVariation(qbist, coarseness){
    var q = clone(validate(qbist));
    q.name = incrementName(qbist.name);
    variegate(q.parms, coarseness);
    return q;
  }

  return {
    createRandom: createRandom,
    createVariation: createVariation,
    render: render,
    validate: validate
  };

}());


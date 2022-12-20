/*Encoding an ArrayBuffer to Base 64*/

var Base64=(function(){
  "use strict"; // opt in to strict mode for this function/module
  var chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  // 3 bytes encode to 4 chars: |aaaaaabb|bbbbcccc|ccdddddd|rest...
  // assume trailing zero bytes to make a multiple of 3
  // encode trailing zero sextets as '=' (not 'A')
  var encode=function(arrayBuffer){
    var result="";
    var bytes=new Uint8Array(arrayBuffer);
    var numBytes=bytes.byteLength;
    var length=3*Math.floor(numBytes/3);
    var rest=numBytes%3;
    var a, b, c, d;
    for(var i=0; i<length; i+=3){
      a = (bytes[i+0]&252) >> 2;
      b = (bytes[i+0]&  3) << 4 | (bytes[i+1]&240) >> 4;
      c = (bytes[i+1]& 15) << 2 | (bytes[i+2]&192) >> 6;
      d = (bytes[i+2]& 63);
      result += chars[a]+chars[b]+chars[c]+chars[d];
    }
    if(rest===2){ // ...|aaaaaabb|bbbbcccc|00000000|
      a = (bytes[length+0]&252) >> 2;
      b = (bytes[length+0]&  3) << 4 | (bytes[length+1]&240) >> 4;
      c = (bytes[length+1]& 15) << 2;
      result += chars[a]+chars[b]+chars[c]+"=";
    }
    else if(rest===1){ // ...|aaaaaabb|00000000|00000000|
      a = (bytes[length]&252) >> 2;
      b = (bytes[length]&  3) << 4;
      result += chars[a]+chars[b]+"==";
    }
    //else rest is 0
    return result;
  }
  var decode=function(text){
    throw Error("Not implemented");
  }
  return {
    encode: encode,
    decode: decode
  };
}());

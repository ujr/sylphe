/* The Qbist web app JavaScript code
 * requires qbist.js and presets.js to be loaded
 * requires jQuery to be loaded (tested with v3.2.1)
 * Naming: view->model: updateFoo(), model->view: refreshFoo()
 */

"use strict";

var currentQbist = Qbist.createRandom();
var savedQbists = []; // those Qbists from local storage
var qbistTemplate; // template from HTML file for use by addQbist()
var historyElements = []; // the canvas elements in the history div

/*Show wait cursor while doing fun(args)*/
function waiting(fun){
  if(typeof fun !== "function"){
    throw Error("First argument is not a function");
  }
  var args=Array.prototype.slice.call(arguments);
  args.shift();//remove fun, keep args to fun
  $(document.body).addClass("waiting");
  var worker=function(){
    try{
      fun.apply(null,args);
    }finally{
      $(document.body).removeClass("waiting");
    }
  }
  setTimeout(worker,10);//work after a very small delay
}

function render(qbist,canvas,antialias){
  if(typeof canvas === "string"){
    canvas=document.getElementById(canvas);
  }
  if(canvas instanceof HTMLCanvasElement){
    var ctx=canvas.getContext("2d");
    var w=canvas.width, h=canvas.height;
    var imageData=ctx.getImageData(0,0,w,h);
    Qbist.render(qbist,imageData,antialias);
    ctx.putImageData(imageData,0,0);
  }
  else{
    throw Error("Oops, canvas is not HTMLCanvasElement");
  }
}

function refreshControls(qbist){
  var qbist = qbist || currentQbist;

  $("#name").val(qbist.name||"");

  var checked=$("#antialias").prop("checked");
  var antialias=qbist.antialias?true:false;//to bool
  if(checked!=antialias){
    $("#antialias").prop("checked", antialias);
  }
  
  var isSaved=isSavedQbist(currentQbist);
  if(isSaved){
    $("#btnSave").addClass("w3-disabled");
    $("#btnDelete").removeClass("w3-disabled");
  }
  else{
    $("#btnSave").removeClass("w3-disabled");
    $("#btnDelete").addClass("w3-disabled");
  }
}

function refreshQbist(){
  var qbist = currentQbist;
  refreshControls(qbist);
  waiting(render,qbist,"qbist");
}

function randomizeQbist(){
  makeHistory(currentQbist);
  currentQbist = Qbist.createRandom();
  refreshQbist();
}

function variegateQbist(coarseness){
  makeHistory(currentQbist);
  currentQbist = Qbist.createVariation(currentQbist,coarseness);
  refreshQbist();
}

function makeHistory(qbist){
  if(historyElements.length<1){return;}//no history
  var qbist=qbist||currentQbist;
  var topElem=historyElements[0];
  var topQbist=$(topElem).data("qbist");
  if(qbist===topQbist){return;}//avoid duplicate top entries
  //Scroll history down:
  for(var i=historyElements.length-2; i>=0; i--){
    var fromCanvas=historyElements[i];
    var fromData=$(fromCanvas).data("qbist");
    if(fromData){//slot already in use
      var toCanvas=historyElements[i+1];
      $(toCanvas).data("qbist",fromData);
      var w=fromCanvas.width, h=fromCanvas.height;
      var imageData=fromCanvas.getContext("2d").getImageData(0,0,w,h);
      toCanvas.getContext("2d").putImageData(imageData,0,0);
    }
  }
  //Insert new history:
  $(topElem).data("qbist", qbist);
  render(qbist,topElem);
}

function removeAllChildren(element){
  while(element.lastChild){
    element.removeChild(element.lastChild);
  }
}

function addQbist(listElem, qbist){
  var helper = function(q){
    return function(e){
      e.preventDefault();
      makeHistory(currentQbist);
      currentQbist=q||Qbist.createRandom();
      refreshQbist();
    };
  };

  var elem = qbistTemplate.cloneNode(true);
  elem.addEventListener("click", helper(qbist));
  elem.innerText = qbist.name || ("qbist"+listElem.childElementCount);
  
  listElem.appendChild(elem);
}

function updateList(listElem, qbists){
  removeAllChildren(listElem);
  for(var i=0; i<qbists.length; i++){
    var qbist = qbists[i];
    addQbist(listElem, qbist);
  }
}

function refreshPresetQbists(){
  var listElem = document.getElementById("presets");
  updateList(listElem, presets);
}

function refreshSavedQbists(){
  var listElem = document.getElementById("saved");
  updateList(listElem, savedQbists);
}

function saveCurrent(){
  if(!currentQbist.name){
    currentQbist.name = "qbist" + (savedQbists.length + 1);
  }
  if(!isSavedQbist(currentQbist)){
    savedQbists.push(currentQbist);
  }
  storeSavedQbists();
  refreshSavedQbists();
  refreshControls();
}

function deleteCurrent(){
  var index = savedQbists.indexOf(currentQbist);
  if(index < 0){return;} // not a saved qbist
  savedQbists.splice(index, 1);
  storeSavedQbists();
  refreshSavedQbists();
  refreshControls();
}

function renameCurrent(name){
  currentQbist.name = name;
  if(isSavedQbist(currentQbist)){
    storeSavedQbists();
    refreshSavedQbists();
    refreshControls();
  }
}

function updateAntialias(antialias){
  currentQbist.antialias = antialias;
  refreshQbist();
}

function isSavedQbist(qbist){
  return savedQbists && savedQbists.indexOf(qbist || currentQbist) >= 0;
}
function loadSavedQbists(){
  var text = localStorage.getItem("savedQbists");
  return savedQbists = JSON.parse(text) || [];
}
function storeSavedQbists(){
  var text = JSON.stringify(savedQbists || []);
  localStorage.setItem("savedQbists", text);
}

function openExport(){
  $("#exportText").val("");
  $("#modalExport").show(400);
}
function closeExport(){
  $("#modalExport").hide(400);
}
function openImport(){
  $("#importMessage").text("Ready").hide();
  $("#modalImport").show(400);
}
function closeImport(){
  $("#modalImport").hide(400);
}
function closeAllModals(){
  $(".w3-modal").filter(":visible").each(function(index,elem){
    $(elem).hide(400);
  });
}

function downloadUrl(url,name){
  var link=document.createElement("a");
  if(typeof link.download==="string"){
    link.href=url;
    link.setAttribute("download",name||"Qbist");
    document.body.appendChild(link);
    try{link.click();}//simulate the click
    finally{document.body.removeChild(link);}
  }else{
    window.open(url);
  }
}

function exportImage(width,height,type,ext){
  // Three options:
  // #1 render to canvas and .toDataURL() -- huge data url fails
  // #2 render to canvas and .toBlob() -- not widely supported
  // #3 render directly to PNG -- need library or lots of work

  // Render to a large temporary canvas:
  var canvas = document.createElement("canvas");
  canvas.width=width||512;
  canvas.height=height||512;
  //document.body.appendChild(canvas); TODO required?
  render(currentQbist,canvas,true);

  // Approach #1: toDataURL(), likely to fail with large canvases
  try{
    var url = canvas.toDataURL(type||"image/png");
    downloadUrl(url,(currentQbist.name||"Qbist")+(ext||".png"));
  }catch(e){
    alert("Export to PNG failed: " + e.message||e.name||"sorry");
  }finally{
    //document.body.removeChild(canvas);
  }

  // Approach #2: Canvas.toBlob(), has less Browser support
//canvas.toBlob(function(blob){
//  var url = URL.createObjectURL(blob);
//  console.log(url);
//  window.location.assign(url);
//  URL.revokeObjectURL(url);
//  document.body.removeChild(canvas);
//},"image/png");
}

function exportPNG(){
  var wd=Math.max(1,parseInt($("#exportWidth").val(),10)||512);
  var ht=Math.max(1,parseInt($("#exportHeight").val(),10)||512);
  waiting(exportImage,wd,ht,"image/png",".png");
}

function exportJPEG(){
  var wd=Math.max(1,parseInt($("#exportWidth").val(),10)||512);
  var ht=Math.max(1,parseInt($("#exportHeight").val(),10)||512);
  waiting(exportImage,wd,ht,"image/jpeg",".jpg");
}

function exportGimp(){
//See here for how the GIMP's Qbist plugin encodes its save files:
//https://gitlab.gnome.org/GNOME/gimp/blob/gimp-2-8/plug-ins/common/qbist.c#L660
  const parms=currentQbist.parms;
  const steps=parms.length/4;
  const buf=new ArrayBuffer(288);
  const bytes=new Uint8Array(buf);
  for(var i=0; i<steps; i++){
    var op=parms[4*i+0]-1;
    var src=parms[4*i+1];
    var ctl=parms[4*i+2];
    var dst=parms[4*i+3];
    bytes[  0+2*i+0]=0;
    bytes[  0+2*i+1]=op&255;
    bytes[ 72+2*i+0]=0;
    bytes[ 72+2*i+1]=src&255;
    bytes[144+2*i+0]=0;
    bytes[144+2*i+1]=ctl&255;
    bytes[216+2*i+0]=0;
    bytes[216+2*i+1]=dst&255;
  }
  const mimeType="application/octet-stream";
  const encoded=Base64.encode(buf);
  const dataUrl = "data:" + mimeType + ";base64," + encoded;
  try{
    downloadUrl(dataUrl,(currentQbist.name||"Qbist")+".gimp.qbe");
  }catch(e){
    alert("Export to GIMP failed: " + e.message||e.name||"sorry");
  }
}

function importQbists(text,replace=false){
  try{
    var json = JSON.parse(text);
    if(!Array.isArray(json)){json=[json];}
    $.each(json, function(i,q){
      Qbist.validate(q);
    });
    if(replace){savedQbists.length=0;}
    $.each(json, function(i,q){
      if(!q.name){q.name="import"+(i+1);}
      savedQbists.push(q);
    });
    storeSavedQbists();
    refreshSavedQbists();
    refreshQbist();
    closeImport();
  }catch(e){
    var msg = e.message || e.name;
    $("#importMessage").text(msg).show();
  }
}

function initHistory(){
  historyElements = $("#history").children("canvas").toArray();
  $(historyElements).click(function(e){
    e.preventDefault();
    var qbist=$(this).data("qbist");
    if(qbist){
      currentQbist=qbist;
      refreshQbist();
    }
  });
}

function clipboardCopy(text, elem){
  var elem = $(elem);
  elem.val(text).focus().select();
  document.execCommand("copy");
  elem.blur();
}

function polyfill(){
  if(!Array.isArray){
    Array.isArray=function(arg){
      return (arg instanceof Array);//good enough
    };
  }
}

function initialize(){
  qbistTemplate = $("#saved").children().get(0);
  initHistory();
  loadSavedQbists(); // from localStorage
  refreshSavedQbists();
  refreshPresetQbists();
  refreshQbist();
}

function wireEvents(){
  $("#btnFine").click(function(){
    variegateQbist(1);
  });
  $("#btnMedium").click(function(){
    variegateQbist(2);
  });
  $("#btnCoarse").click(function(){
    variegateQbist(3);
  });
  $("#btnRandom").click(function(){
    randomizeQbist();
  });
  $("#name").change(function(){
    renameCurrent($("#name").val());
  });
  $("#antialias").change(function(){
    updateAntialias($("#antialias").prop("checked"));
  });
  $("#btnSave").click(function(){
    saveCurrent();
  });
  $("#btnDelete").click(function(){
    deleteCurrent();
  });
  $("#btnOpenExport").click(function(){
    openExport();
  });
  $("#btnCloseExport").click(function(){
    closeExport();
  });
  $("#btnExportPNG").click(function(){
    exportPNG();
    closeExport();
  });
  $("#btnExportJPEG").click(function(){
    exportJPEG();
    closeExport();
  });
  $("#btnExportGIMP").click(function(){
    exportGimp();
    closeExport();
  });
  $("#btnCopyQbist").click(function(){
    var text = JSON.stringify(currentQbist || {});
    clipboardCopy(text, $("#exportText"));
  });
  $("#btnCopyQbists").click(function(){
    var text = JSON.stringify(savedQbists || []);
    clipboardCopy(text, $("#exportText"));
  });
  $("#btnOpenImport").click(function(){
    openImport();
    $("#importText").focus().val("");
  });
  $("#btnCloseImport").click(function(){
    closeImport();
  });
  $("#btnImportAdd").click(function(){
    importQbists($("#importText").val(), false);
  });
  $("#btnImportReplace").click(function(){
    importQbists($("#importText").val(), true);
  });
  $(document).keyup(function(e){
    if(e.which===27){
      closeAllModals();
    }
  });
}

$(document).ready(function(){
  polyfill();
  initialize();
  wireEvents();
});

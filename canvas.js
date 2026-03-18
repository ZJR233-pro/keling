const canvas=document.getElementById('canvas');
const ctx=canvas.getContext('2d');
let scale=1;
canvas.width=canvas.parentElement.clientWidth;
canvas.height=canvas.parentElement.clientHeight;

function draw(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.save();
  ctx.scale(scale,scale);
  ctx.fillStyle="#eee";
  ctx.fillRect(100,100,400,400);
  ctx.restore();
}
draw();
document.getElementById('zoomIn').onclick=()=>{scale*=1.2;draw()}
document.getElementById('zoomOut').onclick=()=>{scale/=1.2;draw()}
document.getElementById('reset').onclick=()=>{scale=1;draw()}

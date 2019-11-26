const splitter= document.cookie.split("; ");
function such(forc){
var x=0;
var y=false;
var sln;
while(x!=splitter.length){
const hh=splitter[x].split("=");
if(hh[0]==forc){
sln=hh[1];
y=true;
break;
}else{
x++;
}
}
if(!y){
console.alert("Not found " + forc);
}else{
return sln;
}
}
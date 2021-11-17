
for(let i=1;i<=12;i++){
    var ele=document.querySelector(`.line${i}`);
    let rend=Math.random();
    let a= parseInt(rend*100);
    a+=60;
    const s=a.toString()+"px";
    ele.style.width=s;        
}
   
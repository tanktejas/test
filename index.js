var flag=0;
const fun=()=>{
  const ele=document.querySelector(".drop");
  if(!flag){
      flag=1;
      ele.style.display="flex";
  }else{
      flag=0;
      ele.style.display="none";
  }
} 


const arrforque=[0,0,0,0,0,0];

const funforqueopen1=()=>{
  const elementofque=document.querySelector('.info-for-que1');
    if(arrforque[0]){
        elementofque.style.display="none";
    }else{  
        elementofque.style.display="inline";
    }
    arrforque[0]=(!arrforque[0]);
}
const funforqueopen2=()=>{
  const elementofque=document.querySelector('.info-for-que2');

    if(arrforque[1]){
        elementofque.style.display="none";
    }else{
        elementofque.style.display="inline";
    }
    arrforque[1]=(!arrforque[1]);
}
const funforqueopen3=()=>{
  const elementofque=document.querySelector('.info-for-que3');

    if(arrforque[2]){
        elementofque.style.display="none";
    }else{
        elementofque.style.display="inline";
    }
    arrforque[2]=(!arrforque[2]);
}
const funforqueopen4=()=>{
  const elementofque=document.querySelector('.info-for-que4');

    if(arrforque[3]){
        elementofque.style.display="none";
    }else{
        elementofque.style.display="inline";
    }
    
   arrforque[3]=(!arrforque[3]);
}
const funforqueopen5=()=>{
  const elementofque=document.querySelector('.info-for-que5');

    if(arrforque[4]){
        elementofque.style.display="none";
    }else{
        elementofque.style.display="inline-block";
    }  
    arrforque[4]=(!arrforque[4]);
}
const funforqueopen6=()=>{
  const elementofque=document.querySelector('.info-for-que6');

    if(arrforque[5]){
        elementofque.style.display="none";
    }else{
        elementofque.style.display="inline";
    }
    arrforque[5]=(!arrforque[5]);
}
const a=document.querySelectorAll('#star');
  
function showrating(e){

  let type=e.type; 
  let starval=this.starval;
                      
  a.forEach((ele,ind)=>{
        if(type==="click"){
          if(ind<starval){
            ele.classList.add("orange");
            console.log(ele); 
          }else{
            ele.classList.remove("orange"); 
          }
        }          
        if(type==="mouseover"){
          if(ind<starval){
            ele.classList.add("yellow");
              
          }else{
            ele.classList.remove("yellow"); 
          }
        }
        if(type==="mouseout"){
            ele.classList.remove("yellow"); 
        } 
  });
}


for(x=0;x<5;x++){
 a[x].starval=(x+1);
     
["click","mouseover","mouseout"].forEach((s)=>{
      a[x].addEventListener(s,showrating);
});   
} 
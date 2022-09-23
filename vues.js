let a=document.getElementById('star');
let b=document.getElementById('moon');
let c=document.getElementById('m3');
let d=document.getElementById('m4');
let e=document.getElementById('river');
let f=document.getElementById('boat');
let g=document.querySelector('.nouvil');

window.onscroll=function(){
  let value=scrollY; 
  a.style.left= value+'px';
  b.style.top=value*4+'px';   
  c.style.top=value*2+'px';
  d.style.top=value*1.5+'px';
  e.style.top=value+'px';
  f.style.left=value*3+'px';
  g.style.fontSize=value+'px';
    if(scrollY >=67 ){
      g.style.fontSize=67 +'px'; 
      g.style.position='fixed';
      if(scrollY >=327 ){
        g.style.display='none';


      }else{
        g.style.display='block';
    }

        if(scrollY >=72 ){
            document.querySelector('.main').style.background='linear-gradient(#376281,#10001f)';


        }else{
            document.querySelector('.main').style.background='linear-gradient(#200016,#10001f)'


        }
     
    


    }
 

}  
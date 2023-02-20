var menu = document.getElementById("menu-lateral");
var botonMenu= document.getElementById("menu-toggle");


function ver(){
    botonMenu=addEventListener('click', (e)=> {
     if (e.target.classList.contains('menu-toggle')){
         menu.classList.toggle('vista')
     }
           
            
    }
    
   
    )}   
ver();


    

//create by Geovanny 

window.addEventListener("load", () =>{    
let checkbox = document.getElementById("toque");
    
 checkbox.addEventListener("click", ()=>{
     
    const mostrar = document.querySelector("#pass");
    
    if(mostrar.type === "text"){
        mostrar.type = "password";
    }else{
        mostrar.type = "text";
    
    }
     
     
 });
 
 
const nombre = document.getElementById("input_name");

nombre.placeholder = "Escriba su nombre";
nombre.required = " ";
 

const contraseña = document.getElementById("pass");

contraseña.placeholder = "Password";
contraseña.required = " ";
contraseña.pattern = "[A-Za-z0-9ñ]{6,12}";
contraseña.maxLength = "12";  

});

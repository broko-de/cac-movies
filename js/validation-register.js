const formRegister = document.querySelector("#formRegister");

const validarFormulario = (event) => {
    event.preventDefault();
    
    const firstname = document.querySelector("#firstname").value;
    const lastname = document.querySelector("#lastname").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    let validation = true;
    if(!firstname.trim() || !lastname.trim() || !email.trim() || !password.trim()){
        alert("Los campos Nombre, Apellido, Email y Password son obligatorios")
        validation=false;
    }
    if(password.length < 6 || password.length > 12){
        alert("La contraseña debe contener entre 6 y 12 caracteres");
        validation=false;
    }

    if(validation){
        formRegister.submit()
    }else{
        return false;
    }
}


formRegister.addEventListener('submit',validarFormulario);
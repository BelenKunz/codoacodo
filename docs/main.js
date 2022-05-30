
function validar() {
    let x = document.forms["formulario"]["nombre"].value;
    let y = document.forms["formulario"]["apellido"].value
    let z = document.forms["formulario"]["email"].value
    if (x == "") {
      alert("Debe completar todos los campos");
      return false;
    }
    else if (y ==""){
        alert("Debe completar todos los campos");
      return false;
    }
    else if (z == ""){
    alert("Debe completar todos los campos");
      return false;
    }
    else {
      alert ("Sus datos se enviaron correctamente, permanezca atento a su casilla de e-mail")
    }
  }
/*
const form = document.getElementById('myForm');

form.addEventListener('submit', (event) => {
  event.preventDefault(); 
  const formData = new FormData(form);
  const data = {};
  for (let key of formData.keys()) {
    data[key] = formData.get(key);
  }
  console.log(data);
});*/

const BtnEnviar = document.querySelector("#btnEnviar");
BtnEnviar.addEventListener("click", function() {
    let name = document.querySelector("#nombre").value;
    let email = document.querySelector("#email").value;
    let teléfono = document.querySelector("#Teléfono").value;
    alert("Nombre: " + name + " Email: " + email "Telefono: "+ teléfono);

    });

import React from 'react'

function Formulario() {
    
    // Crear el contenedor principal
const container = document.createElement('div');
container.className = 'py-5 text-center bg-light text-dark';

// Crear la sección de la fila y el contenedor
const innerContainer = document.createElement('div');
innerContainer.className = 'container';

const row = document.createElement('div');
row.className = 'row';

// Crear el div del formulario
const formDiv = document.createElement('div');
formDiv.className = 'p-5 col-lg-6 col-10 mx-auto border';

// Crear el título
const title = document.createElement('h1');
title.className = 'mb-4';
title.textContent = 'Te escuchamos';

// Crear el formulario
const form = document.createElement('form');

// Crear el primer input (Nombre)
const nameFormGroup = document.createElement('div');
nameFormGroup.className = 'form-group';
const nameInput = document.createElement('input');
nameInput.type = 'text';
nameInput.className = 'form-control';
nameInput.placeholder = 'Nombre';
nameInput.id = 'form13';
nameFormGroup.appendChild(nameInput);

// Crear el segundo input (Email)
const emailFormGroup = document.createElement('div');
emailFormGroup.className = 'form-group';
const emailInput = document.createElement('input');
emailInput.type = 'email';
emailInput.className = 'form-control';
emailInput.placeholder = 'Email';
emailInput.id = 'form14';
emailFormGroup.appendChild(emailInput);

// Crear el tercer input (Mensaje)
const messageFormGroup = document.createElement('div');
messageFormGroup.className = 'form-group';
const messageInput = document.createElement('input');
messageInput.type = 'text';
messageInput.className = 'form-control';
messageInput.placeholder = 'Mensaje';
messageInput.id = 'form15';
messageFormGroup.appendChild(messageInput);

// Crear el botón de envío
const submitButton = document.createElement('button');
submitButton.type = 'submit';
submitButton.className = 'btn btn-primary';
submitButton.textContent = 'Submit';

// Agregar los elementos al formulario
form.appendChild(nameFormGroup);
form.appendChild(emailFormGroup);
form.appendChild(messageFormGroup);
form.appendChild(submitButton);

// Agregar el formulario y el título al div principal del formulario
formDiv.appendChild(title);
formDiv.appendChild(form);

// Agregar el div del formulario a la fila
row.appendChild(formDiv);

// Agregar la fila al contenedor interno
innerContainer.appendChild(row);

// Agregar el contenedor interno al contenedor principal
container.appendChild(innerContainer);

// Agregar todo el contenido al cuerpo del documento
document.body.appendChild(container);


}
export default Formulario;
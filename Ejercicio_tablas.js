const usuarios= [
    {
        id: 1,
        nombre: "Juan",
        apellido: "Pérez",
        correo: "juan.perez@example.com",
        telefono: "123-456-7890",
        comentario: "Primer registro"
    },
    {
        id: 2,
        nombre: "María",
        apellido: "Gómez",
        correo: "maria.gomez@example.com",
        telefono: "987-654-3210",
        comentario: "Segundo registro"
    },
    {
        id: 3,
        nombre: "Carlos",
        apellido: "López",
        correo: "carlos.lopez@example.com",
        telefono: "555-555-5555",
        comentario: "Tercer registro"
    },
    {
        id: 4,
        nombre: "Ana",
        apellido: "Martínez",
        correo: "ana.martinez@example.com",
        telefono: "444-444-4444",
        comentario: "Cuarto registro"
    },
    {
        id: 5,
        nombre: "Luis",
        apellido: "Hernández",
        correo: "luis.hernandez@example.com",
        telefono: "333-333-3333",
        comentario: "Quinto registro"
    },
    {
        id: 6,
        nombre: "Sofía",
        apellido: "Ramírez",
        correo: "sofia.ramirez@example.com",
        telefono: "222-222-2222",
        comentario: "Sexto registro"
    },
    {
        id: 7,
        nombre: "Diego",
        apellido: "Vargas",
        correo: "diego.vargas@example.com",
        telefono: "111-111-1111",
        comentario: "Séptimo registro"
    },
    {
        id: 8,
        nombre: "Valeria",
        apellido: "Torres",
        correo: "valeria.torres@example.com",
        telefono: "000-000-0000",
        comentario: "Octavo registro"
    },
    {
        id: 9,
        nombre: "Javier",
        apellido: "Flores",
        correo: "javier.flores@example.com",
        telefono: "999-999-9999",
        comentario: "Noveno registro"
    },
    {
        id: 10,
        nombre: "Isabela",
        apellido: "Díaz",
        correo: "isabela.diaz@example.com",
        telefono: "888-888-8888",
        comentario: "Décimo registro"
    }
];

tabla=document.querySelector('#Tabla');

function crearTabla(){
   var cadena="<table><thead>";
    cadena=cadena+"<tr><th>ID</th>";
 cadena=cadena+"<th>Nombre</th>";
 cadena=cadena+"<th>Apellido</th>";
 cadena=cadena+"<th>Correo</th>";
 cadena=cadena+"<th>Telefono</th>";
 cadena=cadena+"<th>Comentario</th></tr></thead>";
 cadena=cadena+"<tbody>";

 for(const usuario of usuarios){
 cadena=cadena+"<tr>";
 cadena=cadena+"<td>"+usuario.id+"</td>";
cadena=cadena+"<td>"+usuario.nombre+"</td>";
cadena=cadena+"<td>"+usuario.apellido+"</td>";
cadena=cadena+"<td>"+usuario.correo+"</td>";
cadena=cadena+"<td>"+usuario.telefono+"</td>";
cadena=cadena+"<td>"+usuario.comentario+"</td>";
cadena=cadena+"<tr>";


   }
 cadena=cadena+"</tbody>";
 cadena=cadena+"</table>";
 tabla.innerHTML=cadena;

}
crearTabla();

function agregarFila(){
   const id=document.getElementById("id").value;
   const nombre=document.getElementById("nombre").value;
   const apellido=document.getElementById("apellido").value;
   const correo=document.getElementById("correo").value;
   const telefono=document.getElementById("telefono").value;
   const comentario=document.getElementById("comentario").value;

   if(id && nombre && apellido && correo && telefono && comentario){
       let contenedor=document.querySelector('#Tabla').getElementByTagName('tbody')[0];
       const nuevaFila=contenedor.insertRow();
       
        nuevaFila.innerHTML=`
           <td>${id}</td>
           <td>${nombre}</td>
           <td>${apellido}</td>
           <td>${correo}</td>
           <td>${telefono}</td>
           <td>${comentario}</td>

        `;
         document.getElementById("formulario").reset();
   }
  else{
     alert("Los Datos no estan completos");
   }

}



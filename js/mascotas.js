const listaMascotas = document.getElementById("lista-mascotas")

let mascotas = [
 {
    tipo: "Gato",
    nombre: "Manchas",
    dueno: "Esteban"
 },
 {
     tipo: "Perro",
     nombre: "Sakura",
     dueno: "Andres"
 }
];

function listarMascotas() {
    const htmlMascotas = mascotas.map( (mascota, index) => `<tr>
    <td>${(index+1)}</td>
    <td>${mascota.tipo}</td>
    <td>${mascota.nombre}</td>
    <td>${mascota.dueno}</td>
    <td>
      <div class="btn-group btn-group-sm" role="group">
        <button type="button" class="btn-editar btn btn-info"><i class="fas fa-edit"></i></button>
        <button type="button" class="btn-eliminar btn btn-danger"><i class="far fa-trash-alt"></i></button>
      </div>
    </td>
    </tr>`).join("")
    listaMascotas.innerHTML = htmlMascotas;
}

listarMascotas();

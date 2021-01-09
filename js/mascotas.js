const listaMascotas = document.getElementById("lista-mascotas");

//Formulario para una nueva Mascota
const formMascotas = document.getElementById("form-mascotas");
const tipo = document.getElementById("tipo-mascota");
const nombre = document.getElementById("nombre");
const dueno = document.getElementById("dueno");
const btnEnviar = document.getElementById("btn-enviar");

const btnNuevo = document.getElementById("btn-nuevo");

let indice = null;
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
  const htmlMascotas = mascotas.map((mascota, index) => `<tr>
    <td>${(index + 1)}</td>
    <td>${mascota.tipo}</td>
    <td>${mascota.nombre}</td>
    <td>${mascota.dueno}</td>
    <td>
      <div class="btn-group btn-group-sm" role="group">
        <button type="button" class="btn btn-info btn-editar"><i class="fas fa-edit"></i></button>
        <button type="button" class="btn-eliminar btn btn-danger"><i class="far fa-trash-alt"></i></button>
      </div>
    </td>
    </tr>`).join("");
  listaMascotas.innerHTML = htmlMascotas;
  agregarFuncionEditar();
}

function agregarFuncionEditar() {
  Array.from(document.getElementsByClassName('btn-editar')).forEach((element, index) => { element.onclick = editarMascota(index); })
}

function enviarMascota() {

  const datos = {
    tipo: tipo.value,
    nombre: nombre.value,
    dueno: dueno.value
  }

  //Si el indice no es un numero
  if (!(typeof indice === "number")) {
    mascotas.push(datos);
    listarMascotas();
    return;
  }

  //Editar
  mascotas[indice] = datos;

  listarMascotas();
}

function guardarMascota() {
  limpiarModal();
  $('#myModal').modal();
}

function editarMascota(index) {

  return () => {
    const mascota = mascotas[index];
    nombre.value = mascota.nombre;
    tipo.value = mascota.tipo;
    dueno.value = mascota.dueno;
    indice = index;
    btnEnviar.innerHTML = "Editar";
    $('#myModal').modal();
  }
}

function limpiarModal() {
  nombre.value = "";
  tipo.value = "Tipo de Mascota";
  dueno.value = "";
  indice = null;
}

listarMascotas();

btnNuevo.onclick = guardarMascota;
btnEnviar.onclick = enviarMascota;
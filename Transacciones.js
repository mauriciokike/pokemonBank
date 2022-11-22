document.getElementById('form').addEventListener('submit', agregar,);
document.getElementById('form1').addEventListener('submit', agregar2);
const Saldo = document.getElementById('saldo');
// Agregar y guardar en el localstorage
function agregar() { 
let descripcion = document.getElementById('descripcion').value;
let monto = document.getElementById('monto').value;
let fecha = document.getElementById('fecha').value;   
let task = {
        descripcion, monto, fecha
      };
      if(localStorage.getItem('tasks') === null) {
        let tasks = [];
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
      } else {
        let tasks = JSON.parse(localStorage.getItem('tasks'));
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
      }
      
        }
function agregar2() {
let descripcion2 = document.getElementById('descripcion2').value;
let monto2 = document.getElementById('monto2').value;
let fecha2 = document.getElementById('fecha2').value;   
let retirotask = {
    descripcion2, monto2, fecha2
            };
            if(localStorage.getItem('retirotasks') === null) {
              let retirotasks = [];
              retirotasks.push(retirotask);
              localStorage.setItem('retirotasks', JSON.stringify(retirotasks));
            } else {
              let retirotasks = JSON.parse(localStorage.getItem('retirotasks'));
              retirotasks.push(retirotask);
              localStorage.setItem('retirotasks', JSON.stringify(retirotasks));
            }
          }
//enconder y mostrar 
function mostrar_ocultar(dato){                
    let tasksView = document.getElementById('tasks');
    let taskss = JSON.parse(localStorage.getItem('tasks'));
    let retiro = JSON.parse(localStorage.getItem('retirotasks'));
    let tasksretiro = document.getElementById('retirotasks');
    switch (dato) {
        case "ingreso":
            if (document.getElementById('check_ingreso').checked){
                document.getElementById('div-ingreso').style.display = "block";
                document.getElementById('div-ingreso').style.display = "flex";
                document.getElementById('div-retiro').style.display = "none";
                document.getElementById('boton-retiro').style.background="rgb(221, 221, 221)";
                document.getElementById('boton-retiro').style.color="black";
                document.getElementById('checki').style.background="black";
                document.getElementById('checki').style.color="white";
                document.getElementById('div-td').style.display = "table";
                document.getElementById('div-td2').style.display = "none";
                document.getElementById('btn-retiro').style.display = "none";
                document.getElementById('btn-ingreso').style.display = "block";
                console.log(dato);
                tasksView.innerHTML = '';
                for(let i = 0; i < taskss.length; i++){
                let descripcion = taskss[i].descripcion;
                let monto = taskss[i].monto;
                let fecha = taskss[i].fecha;
                tasksView.innerHTML +=`<tr>
                <td class="text-danger"><span>Activo</span></td>
                <td><span>${fecha}</span></td>
                <td><span>${descripcion}</span></td>
                <td>$<span>${monto}</td>
                </tr>`; }
            }else{
                document.getElementById('div-ingreso').style.display = "none";
                document.getElementById('div-td').style.display = "none";
                document.getElementById('btn-ingreso').style.display = "none";
                document.getElementById('btn-retiro').style.display = "none";
            }
            break;        
        case "retiro":
            if (document.getElementById('check_retiro').checked){
                document.getElementById('div-retiro').style.display = "block";
                document.getElementById('div-retiro').style.display = "flex";
                document.getElementById('div-ingreso').style.display = "none";
                document.getElementById('boton-retiro').style.background="black";
                document.getElementById('boton-retiro').style.color="white";
                document.getElementById('checki').style.background="rgb(221, 221, 221)";
                document.getElementById('checki').style.color="black";
                document.getElementById('div-td').style.display = "none";
                document.getElementById('div-td2').style.display = "table";
                document.getElementById('btn-retiro').style.display = "block";
                document.getElementById('btn-ingreso').style.display = "none";
                console.log(dato);
                tasksretiro.innerHTML ='';
                for(let i = 0; i < retiro.length; i++){
                let descripcion2 = retiro[i].descripcion2;
                let monto2 = retiro[i].monto2;
                let fecha2 = retiro[i].fecha2;
                tasksretiro.innerHTML +=`<tr>
                <td class="text-danger"><span>Activo</span></td>
                <td><span>${fecha2}</span></td>
                <td><span>${descripcion2}</span></td>
                <td>$<span>${monto2}</td>
                </tr>`; }
            }else{
                document.getElementById('div-retiro').style.display = "none";
                document.getElementById('div-td2').style.display = "none";
            }
            break;
        default:
         }
     }
//funcion imprimir saldo 
window.onload = function imprimir(){
  Saldo.innerText = localStorage.getItem('saldo')

} 


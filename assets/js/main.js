
var x=document.getElementById("x").value;
var y=document.getElementById("y").value;

var bStart=document.getElementById("start");

bStart.addEventListener('click',
function partir() {
    function Validar(){
    	if(x>10||y>6){
    		return alert("Las coordenadas deben estar en el rango de 10x6");
    	}
    	else{
			var hijoBorra=document.getElementById("borra");
			var contenedor=document.getElementById("boxAuto");
			return contenedor.removeChild(hijoBorra);
    	}
    };
	Validar();

	
});





















document.getElementById("bt").addEventListener('click', telefono, false);
function telefono() {
    alert("Teléfono: +569 99689 5236");   
}
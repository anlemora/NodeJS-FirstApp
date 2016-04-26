function iniciar() {
	console.log("+ El Request Handler 'iniciar' ha sido llamado.");

	function sleep(miliSeconds) {
		//Obtener la hora actual
		var startTime = new Date().getTime();
		//Deteniendo el CPU
		while (new Date().getTime < startTime + miliSeconds);
	}

	sleep(10000);
	return "Hola iniciar";
}

function subir() {
	console.log("+ El Request Handler 'subir' ha sido llamado.");
	return "Hola subir";
}

exports.iniciar = iniciar;
exports.subir = subir;
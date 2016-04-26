function iniciar() {
	console.log("+ El Request Handler 'iniciar' ha sido llamado.");
	return "Hola iniciar";
}

function subir() {
	console.log("+ El Request Handler 'subir' ha sido llamado.");
	return "Hola subir";
}

exports.iniciar = iniciar;
exports.subir = subir;
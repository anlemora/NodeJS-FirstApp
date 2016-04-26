function iniciar() {
	console.log("+ El Request Handler 'iniciar' ha sido llamado.");
}

function subir() {
	console.log("+ El Request Handler 'subir' ha sido llamado.");
}

exports.iniciar = iniciar;
exports.subir = subir;
function route(handle, pathname){
	console.log("+ A punto de rutear una peticion para " + pathname);
	if (typeof handle[pathname] === 'function') {
		return handle[pathname]();
	} else {
		console.log("No se encontro handler para " + pathname);
		return "404 Not Found";
	}
}

exports.route = route;


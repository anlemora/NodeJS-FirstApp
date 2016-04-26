var exec = require("child_process").exec;

function start() {
	console.log("+ Request Handler 'start' was called.");

	var content = "empty";

	exec("ls -lah", function (error, stdout, tderr) {
		content = stdout;
	});

	return content

	// function sleep(miliSeconds) {
	// 	// Getting actual hour
	// 	var startTime = new Date().getTime();
	// 	// Stopping the CPU
	// 	while (new Date().getTime() < startTime + miliSeconds);
	// }

	// sleep(10000);
	// return "Hello start";
}

function upload() {
	console.log("+ Request Handler 'upload' was called.");
	return "Hello upload";
}

exports.start = start;
exports.upload = upload;
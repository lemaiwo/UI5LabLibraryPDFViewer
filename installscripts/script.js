const {
	exec
} = require('child_process');
var hostname = require("os").hostname();
console.log("start postinstall script");
console.log("Running on:" + hostname);
if (hostname.indexOf("devxbuild") > -1) {
	console.log("Don't install bower, running in SAP Web IDE CP");
	return;
}
console.log("install bower");
const commands = [
	'bower install'
];

const executedCommands = exec(commands.join('&&'), (error) => {
	if (error) {
		throw error;
	}
});
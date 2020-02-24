// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");

const clipboardy = require("clipboardy");

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log(
		'Congratulations, your extension "forward-slasher" is now active!'
	);

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand(
		"extension.forwardSlasher",
		function () {
			// The code you place here will be executed every time your command is executed
			var path = vscode.window.activeTextEditor.document.uri.path;

			if (path) {
				if (path.indexOf("\\") !== -1) {
					path = path.split("\\");
				} else if (path.indexOf("/") !== -1) {
					path = path.split("/");
				}
				path = path.filter(pathItem => pathItem.length > 0);
				path.shift();

				path = path.join("/");

				path = "/home/" + path;

				clipboardy
					.write(path)
					.then(() => vscode.window.showInformationMessage("path copied to clipboard!"))
					.catch(() => vscode.window.showErrorMessage("failed to copy path to clipboard!"));
			}
		}
	);

	context.subscriptions.push(disposable);


	disposable = vscode.commands.registerCommand(
		"extension.forwardSlasherPublish",
		function () {
			// The code you place here will be executed every time your command is executed
			var path = vscode.window.activeTextEditor.document.uri.path;

			if (path) {
				if (path.indexOf("\\") !== -1) {
					path = path.split("\\");
				} else if (path.indexOf("/") !== -1) {
					path = path.split("/");
				}
				path = path.filter(pathItem => pathItem.length > 0);
				path.shift();

				path = path.join("/");

				path = "publish /home/" + path;

				clipboardy
					.write(path)
					.then(() => vscode.window.showInformationMessage("path copied to clipboard!"))
					.catch(() => vscode.window.showErrorMessage("failed to copy path to clipboard!"));
			}
		}
	);

	context.subscriptions.push(disposable);

	disposable = vscode.commands.registerCommand(
		"extension.forwardSlasherCommit",
		function () {
			// The code you place here will be executed every time your command is executed
			var path = vscode.window.activeTextEditor.document.uri.path;

			if (path) {
				if (path.indexOf("\\") !== -1) {
					path = path.split("\\");
				} else if (path.indexOf("/") !== -1) {
					path = path.split("/");
				}
				path = path.filter(pathItem => pathItem.length > 0);
				path.shift();

				path = path.join("/");

				path = "commit /home/" + path;

				clipboardy
					.write(path)
					.then(() => vscode.window.showInformationMessage("path copied to clipboard!"))
					.catch(() => vscode.window.showErrorMessage("failed to copy path to clipboard!"));
			}
		}
	);

	context.subscriptions.push(disposable);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;

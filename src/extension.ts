import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('open-unity-meta.open-meta-file', (uri: vscode.Uri) => {
		const filepath = vscode.Uri.file(`${uri.fsPath}.meta`)
		vscode.workspace.openTextDocument(filepath).then(doc => {
			vscode.window.showTextDocument(doc).then(editor => {
				var pos1 = new vscode.Position(0, 0);
				editor.selections = [new vscode.Selection(pos1, pos1)]; 
		
				var range = new vscode.Range(pos1, pos1);
				editor.revealRange(range);
			});
		}, (reason) => {
			vscode.window.showErrorMessage(reason);
		})
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}

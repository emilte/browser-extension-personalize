// ##############################
//             main
// ##############################

function main() {
	setInterval(greetConsole, 10_000);
	addContent();
}

main();

// ##############################
//             utils
// ##############################

function greetConsole() {
	console.log('The extension is working!');
}

function addContent() {
	const body = document.querySelector('body');
	// Add div with some text.
	const div = document.createElement('div');
	div.textContent = 'The extension is working!';
	div.classList.add('personalized'); // Styled by `styles/www.example.com.css`.
	body.appendChild(div);
}

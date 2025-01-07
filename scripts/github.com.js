// ##############################
//             main
// ##############################

const id = 'copy-pr-link';

function main() {
	const url = window.location.href;
	if (!url.includes('/pull/')) {
		return;
	}

	const header = document.getElementsByClassName('gh-header-actions')[0];
	const button = document.getElementById(id);

	if (header && !button) {
		const btn = addCopyButton({ el: header, url: url });
		addKeyboardShortcut({ btn, url });
	}
}

observeUrlChanges();
main();

// ##############################
//             utils
// ##############################

function getPrTitle() {
	return document.querySelector('bdi.js-issue-title').textContent;
}

function addCopyButton({ el, url }) {
	const button = document.createElement('button');
	const title = getPrTitle();

	button.id = id;
	button.textContent = '🔗 Share';
	button.className = 'copy-button';

	button.addEventListener('click', () => {
		const textToCopy = `${title}\n${url}`;
		navigator.clipboard.writeText(textToCopy);
		const originalText = button.textContent;
		button.textContent = '✅ Copied';
		setTimeout(() => {
			button.textContent = originalText;
		}, 4000);
	});
	el.appendChild(button);
	return button;
}

function addKeyboardShortcut({ btn, url }) {
	const title = getPrTitle();
	document.addEventListener('keydown', (event) => {
		if (event.shiftKey && event.key === 'L') {
			const textToCopy = `${title}\n${url}`;
			navigator.clipboard.writeText(textToCopy);
			const originalText = btn.textContent;
			btn.textContent = '✅ Copied';
			setTimeout(() => {
				btn.textContent = originalText;
			}, 4000);
		}
	});
}

function observeUrlChanges() {
	let lastUrl = window.location.href;
	const observer = new MutationObserver(() => {
		const currentUrl = window.location.href;
		if (currentUrl !== lastUrl) {
			lastUrl = currentUrl;
			main();
		}
	});
	observer.observe(document.body, { childList: true, subtree: true });
}

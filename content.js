// ##########################
//         Functions
// ##########################

function injectStylesheet(file) {
	const link = document.createElement('link');
	link.rel = 'stylesheet';
	link.type = 'text/css';
	link.href = chrome.runtime.getURL(file); // Must be available as web_accessible_resources.
	(document.head || document.documentElement).appendChild(link);
}

function injectScript(file) {
	const script = document.createElement('script');
	script.type = 'module';
	script.src = chrome.runtime.getURL(file); // Must be available as web_accessible_resources.
	(document.head || document.documentElement).appendChild(script);
}

const DOMAIN = window.location.hostname;

//#########################
//          CSS
//#########################

// Inject custom domain css:
injectStylesheet(`styles/${DOMAIN}.css`);
injectStylesheet(`styles/secret/${DOMAIN}.css`);
// Inject custom global css:
injectStylesheet('styles/global/global.css');

//#########################
//           JS
//#########################

// Inject custom domain js:
injectScript(`scripts/${DOMAIN}.js`);
injectScript(`scripts/secret/${DOMAIN}.js`);
// Inject custom global js:
injectScript('scripts/global/global.js');

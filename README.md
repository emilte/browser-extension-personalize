# browser-extension-personalize

Personalize websites with persistent custom styling and scripts.

Supported browsers: Google Chrome, Firefox

<br>

## How to:

<details>
<summary>Google Chrome</summary>

1. Clone this repo
2. Paste this in the search bar of Chrome `chrome://extensions`
3. Toggle `Developer mode`
4. Load unpacked -> select this folder
5. Visit https://www.example.com. You should see a green box with `The extension is working!`
6. Start customizing (see tutorial below)

</details>

<details>
<summary>Firefox</summary>

1. Clone this repo
2. Paste this in the search bar of Firefox `about:debugging#/runtime/this-firefox`
3. Load Temporary Add-On... -> select `manifest.json` in this folder
4. Visit https://www.example.com. You should see a green box with `The extension is working!`
5. Start customizing (see tutorial below)

</details>

<br>

## Customize a website

Add a new `.css` file in `styles`. <br>
The filename must match the website **_exactly_** (including sub-domain). <br>
The same formula applies for javascript, which is located in `scripts`.

You may also use the global css and javascript. See their README respectively.

<br>

> Reload of the extension is usually not needed. <br>
> It is only required if you modify any of these files:
>
> - `manifest.json`
> - `content.js`

<br>

## Why use this extension?

Have you experienced a website where you wish the colors were slightly different? Are there elements you don't care about at all? Why not just remove them completely?

Using this extension, you can enhance your personal experience when visiting websites.
Why write a ticket to other developers about your subjective opinion, that is unlikely to ever be picked up? Just fix it here!

The source code is open and only hosted from your local machine.
Any updates is in your full control, no need to worry about 3rd party extensions and dependency injection (afaik).

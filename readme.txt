README: Multilingual Course Website Template

What this template does
This template automatically redirects visitors to the correct language version of your website based on their browser settings. Includes:

Intelligent language detection

Automatic redirection

Fallback options when JavaScript is disabled

Support for 4 languages ​​(English, Portuguese, Spanish and German)

File structure
text
Copy
Download
index.html -> Main redirection file
/br/index.html -> Brazilian Portuguese version
/en-us/index.html -> English version
/es/index.html -> Spanish version
/german/index.html -> German version
Setup instructions
1. Prepare your content
Create your site content in each language folder:

English: /en-us/index.html

Portuguese: /br/index.html

Spanish: /es/index.html

German: /german/index.html

2. Customize languages ​​(optional)
To add new languages:

Edit index.html

Add to language map:

javascript
Copy
Download
// Add inside the languageMap object
'fr-FR': './french/index.html',
'it-IT': './italian/index.html'
Create new folders with the translated content:

text
Copy
Download
/french/index.html
/italian/index.html
3. Change the default language
In index.html, modify:

javascript
Copy
Download
} else {
redirectUrl = './en-us/index.html'; // Change to your preferred default
}
4. Upload to your server
Upload ALL FILES AND FOLDERS to the root directory of your site. The main index.html file should be in the root folder.

For browsers with JavaScript disabled
The template shows these language options when JavaScript is not available. Update these links in index.html if you add new languages:

html
Copy
Download
Run
<noscript>
<a href="./en-us/index.html">English</a><br>
<a href="./br/index.html">Portuguese</a><br>
<a href="./es/index.html">Spanish</a><br>
<a href="./german/index.html">German</a>
</noscript>
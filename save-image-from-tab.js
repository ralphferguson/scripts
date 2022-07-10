// Save the following script as a bookmark. Clicking the bookmark will then save the image (likely to the "Download" folder).

javascript: (() => {
// Selects the image
var a = document.createElement('a');
var image = document.querySelector('img');
a.href = image.src;

// Sets the name of the image to the text following everything behind the last "/".
// There may be issues with the file if there are query parameters attached behind the last "/". Simply renaming the file should resolve this.
var str = image.src;
var n = str.lastIndexOf('/');
var name = str.substring(n + 1);

// Saves the image
a.download = name;
document.body.appendChild(a);
a.click();
document.body.removeChild(a);
})();

// content.js
window.onload = function() {
    // Find all <code> tags
    var codeTags = document.getElementsByTagName('code');


    console.log('Found ' + codeTags + ' <code> tags')

    // Loop through <code> tags
    for (let i = 0; i < codeTags.length; i++) {
        // Create an icon
        let icon = document.createElement('img');
        icon.src = chrome.runtime.getURL('images/vscode-icon.png'); // Path to the icon
        icon.style.cursor = 'pointer';

        // Add click event listener
        icon.addEventListener('click', function() {
            // Get the code inside the <code> tag
            let code = codeTags[i].innerText;

            // Copy the code to clipboard
            navigator.clipboard.writeText(code).then(function() {
                console.log('Copying to clipboard was successful!');
            }, function(err) {
                console.error('Could not copy text: ', err);
            });
        });

        // Add the icon to the <code> tag
        codeTags[i].appendChild(icon);
    }
}

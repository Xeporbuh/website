var currentURL = window.location.href;
if (currentURL.endsWith('/c1')) {
    var h2 = document.createElement('h2');
    h2.textContent = 'Checkpoint 1';
    document.body.appendChild(h2);
} else if (currentURL.endsWith('/c2')) {
    var h2 = document.createElement('h2');
    h2.textContent = 'Checkpoint 2';
    document.body.appendChild(h2);
} else if (currentURL.endsWith('/c3')) {
    var h2 = document.createElement('h2');
    h2.textContent = 'Checkpoint 3';
    document.body.appendChild(h2);
} else if (currentURL.endsWith('/c4')) {
    var h2 = document.createElement('h2');
    h2.textContent = 'Checkpoint 4';
    document.body.appendChild(h2);
} else {
    console.log('URL does not match any checkpoints.');
}

document.addEventListener('DOMContentLoaded', () => {
    let location = window.location;
    let uri = 'ws:';
    if (location.protocol === 'https:') {
        uri = 'wss:';
    }
    uri = `${uri}//${location.host}${location.pathname}ws`;

    const ws = new WebSocket(uri);
    ws.onopen = () => {
        console.log('Connected');
    }

    ws.onmessage = e => {
        let out = document.querySelector('#output');
        out.innerHTML += `${e.data}<br>`;
    }

    const btn = document.querySelector('.btn');
    btn.addEventListener('click', () => {
        ws.send(document.querySelector('#input').value);
    });

})
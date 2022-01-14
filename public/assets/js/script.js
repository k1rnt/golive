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

})
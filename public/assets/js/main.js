function getIRIParameterValue(requestedKey) {
    let pageIRI = window.location.search.substring(1);
    let pageIRIVariables = pageIRI.split('&');
    for (let i = 0; i < pageIRIVariables.length; i++) {
        let data = pageIRIVariables[i].split('=');
        let key = data[0];
        let value = data[1];
        if (key === requestedKey) {
            return value;
        }
    }
}

let username = getIRIParameterValue('username');
if ((typeof username == 'undefined') || (username === null) || (username == '')) {
    username = 'Gamer' + Math.floor(Math.random() * 10000000);
}

$('#messages').prepend('<b>'+username+':</b>');

let socket = io();
socket.on('log', function(array) {
    console.log.apply(console,array);
});
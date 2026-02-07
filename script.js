function sendData() {
    let name = document.getElementById("username").value;

    fetch("server.php?name=" + name)
        .then(response => response.text())
        .then(data => {
            document.getElementById("response").innerHTML = data;
        });
}

function limparCalc() {
    document.querySelector(".senha").innerHTML = ""
    senha = ""
}

var senha = ""

function addSenha(e) {
    if (senha.length < 6) {
        senha = senha + e.id
    }

    document.querySelector(".senha").innerHTML = "*".repeat(senha.length)

    if (senha.length > 5) {
        document.querySelector(".delete").disabled = false
    } else {
        document.querySelector(".alert").classList.add("model")

        document.querySelector(".delete").disabled = true
    }
}

function login() {

    const dataAtual = new Date();

    const diaAtual = dataAtual.getDate();

    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            "senha": senha
        })
    };

    fetch('http://localhost:2550/usuario/login', options)
        .then(response => response.json())
        .then(user => {

            if (user !== false) {
                localStorage.setItem("userID", user[0].id)
                localStorage.setItem("userIDPerfil", user[0].id_perfil.id)
                console.log(user[0].id_perfil.id)
                localStorage.setItem("dayAcess", diaAtual)
                window.location.href = "../home/index.html"
            } else {
                document.querySelector(".alert").classList.remove("model")
                senha = ""
                document.querySelector(".senha").innerHTML = ""
            }
        })
}
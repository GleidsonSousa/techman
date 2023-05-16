function carregarEquipamentos() {
  const options = { method: 'GET' };

  fetch('http://localhost:2550/equipamento/read', options)
    .then(response => response.json())
    .then(equipamento => {
      equipamento.forEach(e => {
        if (e.ativo !== false) {



          var div = document.querySelector(".clone").cloneNode(true)
          div.classList.remove("model")
          div.querySelector(".pic").src = e.imagem != null ? "../../assets/upload/" + e.imagem  :  "../../assets/upload/noimage.png"
          div.querySelector("#nomeEquipamento").innerHTML = e.equipamento
          div.querySelector("#descricao").innerHTML = e.descricao
          div.querySelector('.btnComent').id = e.id
          div.querySelector('.btnComent').addEventListener('click', () => abrirModalComentario(e.comentarios, e.id))
          div.querySelector('.btnDel').id = e.id

          document.querySelector("main").appendChild(div)
        }
      })
    })
    .catch(error => {
      console.error('Erro ao buscar dados:', error);
      document.querySelector(".ms-fetch").classList.remove("model")
    })
}

var idDel = 0

function abrirModalDelete(e) {
  idDel = e.id
 
  document.querySelector('#idEquipment').innerHTML = idDel

  document.querySelector('.delComent-modal').classList.remove('model')
}

function abrirModalComentario(com, id) {
  com.forEach(c => {
    
    let model = document.querySelector('.mod-comentario').cloneNode(true)
    if(c.perfil == 1){
      model.querySelector('#perfil').innerHTML = "Comum"
    } if (c.perfil == 2){
        model.querySelector('#perfil').innerHTML = "Administrador"
    }  if (c.perfil == 3){
      model.querySelector('#perfil').innerHTML = "Tecnico"
    }  if (c.perfil == 4){
    model.querySelector('#perfil').innerHTML = "Gerente"
    }
    
    model.querySelector('#data').innerHTML = new Date(c.data).toLocaleDateString('pt-br')
    model.querySelector('.comenbody').innerHTML = c.comentario
    model.classList.remove('model')
    document.querySelector('.comentarios').appendChild(model)
  })
  document.querySelector("#sendComentario").setAttribute('ideq', id)
  document.querySelector('.comentarios-modal').classList.remove('model')
}

function fecharModalComentario() {
  document.querySelector('.comentarios-modal').classList.add('model')
  let model = document.querySelector('.mod-comentario').cloneNode(true)
  document.querySelector('.comentarios').innerHTML = ""
  document.querySelector('.comentarios').appendChild(model)
}

function excluirEquipamento() {
  const options = { method: 'DELETE' };

  fetch('http://localhost:2550/equipamento/delete/' + idDel, options)
    .then(response => response.json())
    .then(response => window.location.reload())
}

function abrirAdicionarComentario() {
  document.querySelector('.comentarios-modal').classList.add('model')
  document.querySelector(".comentar-modal").classList.remove("model")
}

function sair() {
  localStorage.clear()
  window.location.href = "../login/login.html"
}

function habilitarBotao() {
  const input = document.getElementById('textArea');
  const botao = document.getElementById('sendComentario');

  if (input.value.trim() !== '') {
    botao.disabled = false;
  } else {
    botao.disabled = true;
  }
}

function cadastrarComentario(e) {

  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: [JSON.stringify({
      "comentario": document.querySelector("#textArea").value,
      "perfil": parseInt(localStorage.getItem("userIDPerfil")),
      "equipamento": parseInt(e.getAttribute('ideq'))
    })]
  };
  fetch('http://localhost:2550/comentario/create', options)
    .then(response => response.json())
    .then(response => {

      if (response.count > 0) {
        document.querySelector(".ms-ok").classList.remove("model")

      } 


      setTimeout(() => {
        window.location.reload()
      }, 1000)
    })
    .catch(error => {
      console.error('Erro ao buscar dados:', error);
      console.log(parseInt(localStorage.getItem("userIDPerfil")))

      document.querySelector(".ms-ko").classList.remove("model")

      // setTimeout(() => {
      //   window.location.reload()
      // }, 1000)
    })
}

function habilitarBotaoEq() {
  const input = document.getElementById('nomeEquipamentoCad');
  const input2 = document.getElementById('endImage');
  const input3 = document.getElementById('textEquipamento');
  const botao = document.getElementById('addEqui');

  if (input.value.trim() !== '' && input2.value.trim() !== '' && input3.value.trim() !== '') {
    botao.disabled = false;
  } else {
    botao.disabled = true;
  }
}

function adicionarEquipamento() {
  document.querySelector("#checkeq").value;
  var boolean = true;

  if (document.querySelector("#checkeq").value !== "true") {
    boolean = false;
  }

  var formData = new FormData();
  formData.append("equipamento", document.querySelector("#nomeEquipamentoCad").value);
  formData.append("imagem", document.querySelector("#endImage").files[0]);
  formData.append("descricao", document.querySelector("#textEquipamento").value);
  formData.append("ativo", boolean);

  fetch('http://localhost:2550/equipamento/create', {
    method: 'POST',
    body: formData
  })
    .then(response => response.json())
    .then(response => {
      window.location.reload();
    })
    .catch(error => console.error('Erro:', error));
}


function checkeq(e) {

  if (e.querySelector('input').value !== "true") {
    e.querySelector('input').value = "true"
    e.querySelector('span').innerHTML = "Ativo"
  } else {
    e.querySelector('input').value = "false"
    e.querySelector('span').innerHTML = "Desativado"
  }

}
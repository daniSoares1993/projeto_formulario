let btnClose = document.getElementById('botaoFechar');
let cliqueAqui = document.getElementById('cliqueAqui');
const modal = document.getElementById('modal');
let btnEnviarFormulario = document.getElementById('btnFormularioEnviar');
const cep = document.getElementById('cep');
const nomeCompleto = document.getElementById('nomeCompleto');
const dataNascimento = document.getElementById('dataNascimento');
const email = document.getElementById('emailUsuario');
const senha = document.getElementById('formularioSenha');
const confirmarSenha = document.getElementById('confirmacaoSenha');
let foto = 1;


// Trocando o background do fundo principal
let trocarBackground = setInterval(()=>{
    if(foto <= 4){
        container.style.backgroundImage = `url(./imagens/img${foto}.jpg)`
        foto++
    } else {
        foto = 1;
    }
},5000)




btnClose.addEventListener('click',()=>{
    modal.style.display = 'none'
})

cliqueAqui.addEventListener('click',()=>{
    modal.style.display = 'flex'
})



cep.addEventListener('focusout',()=>{
    let valor = cep.value
    let url = `https://viacep.com.br/ws/${valor}/json/`;
    
    fetch(url).then((response)=>{
        response.json().then((dados)=>{
            console.log(dados)
           const rua = document.getElementById('rua');
            rua.value = dados.logradouro;
            const bairro =  document.getElementById('bairro');
            bairro.value = dados.bairro
            const cidade = document.getElementById('cidade');
            cidade.value = dados.localidade            
            
        })    
    })    
})

btnEnviarFormulario.addEventListener('click',()=>{
   const key = 'item1';
   localStorage.setItem(key,nomeCompleto.value);
})



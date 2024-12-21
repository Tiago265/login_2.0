const openModalButton = document.querySelector("#open-modal");
const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");
const cad = document.querySelector("#add")
const toggleModal = () => {
    [modal, fade].forEach((el) => el.classList.toggle("hide"))
};

[openModalButton,closeModalButton,fade].forEach((el) => {
    el.addEventListener("click", () => toggleModal());
});

function add(){
    let cadNome = document.getElementById('cadUser').value;
    let cadEmail = document.getElementById('cadEmail').value;
    let cadSenha = document.getElementById('cadSenha').value
    const cadDados = { cadNome, cadEmail, cadSenha }
    const bancodeDados = JSON.parse(localStorage.getItem('bancodeDados')) || [];
    bancodeDados.push(cadDados);
    localStorage.setItem('bancodeDados', JSON.stringify(bancodeDados));
    alert("Seja bem vindo(a) "+cadNome)
}
function logar(){
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;
    const dados = { nome, email, senha}
    let bancodeDados = JSON.parse(localStorage.getItem('bancodeDados')) || []
    for(let usuario of bancodeDados){
        if(usuario.cadNome === nome && usuario.cadEmail === email && usuario.cadSenha === senha){
            alert('Parabéns, você logou '+nome)
            break;
        }
    }
}
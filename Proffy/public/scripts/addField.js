//Procurar o botao
document.querySelector('#add-time')
// Quando clicar no botao
.addEventListener('click', cloneField)

//Executar uma acao
function cloneField() {
    //-Eu: "Duplicar os campos." -PC: "Que campo?"
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) //boolean:true or false

    //-Eu: "Pegar os campos." -PC: "Que campos?"
    const fields = newFieldContainer.querySelectorAll('input')

    //para cada campo limpar
    fields.forEach(function(field) {
        //pegar o field do momento e limpa
        field.value = ''
    })
    
    //-Eu: "Colocar na página." -PC: "Onde?"
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
    
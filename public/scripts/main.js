import Modal from './modal.js'

const modal = Modal()

const checkButtons = document.querySelectorAll(".actions a.check")

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

checkButtons.forEach(button => {
    button.addEventListener("click", handleClick)
})

const deleteButton = document.querySelectorAll(".actions a.delete")

deleteButton.forEach(button => {
    button.addEventListener("click", (event) => handleClick(event, false))
})

function handleClick(event, check = true){
    event.preventDefault()

    const form = document.querySelector(".modal form")
    const slug = check ? "check" : "delete"

    const roomId = document.querySelector("#room-id").dataset.id

    const text = check ? "Marcar como lida" : "Excluir"
    const questionID = event.target.dataset.id
    
    form.setAttribute("action", `/question/${roomId}/${questionID}/${slug}`)
    
    modalTitle.innerHTML= `${text} esta pergunta`
    modalDescription.innerHTML= `Tem certeza que deseja ${text.toLowerCase()} essa pergunta`
    modalButton.innerHTML = `Sim, ${text.toLowerCase()}`

    check? modalButton.classList.remove("red") : modalButton.classList.add("red")

    modal.open()
}

import { workerService } from "./services/worker.service.js";
import { validateService } from "./services/validate.service.js"
import { userService } from "./services/user.service.js"

window.app = {
    handleSubmit,
    onInit,
    navTo,
    toggleMenu
}


async function onInit() {
    const workers = await workerService.query()
    renderTable(workers)
}


function toggleMenu() {
    document.body.classList.toggle('menu-open');

}


// TABLE
function renderTable(workers) {
    const strHTML = workers.map(worker => {

        return `<div class="row flex">
        <div class="worker-img"><img src="https://robohash.org/${worker.id}" alt=""></div>
        <div class="worker-name">${worker.fullName}</div>
        <div class="worker-age">${worker.age}</div>
        <div class="worker-startdate">${worker.startDate}</div>
        </div>
        </br>
        `
    })

    document.querySelector('.workers-table').innerHTML = strHTML.join('')
}

// Page navigation
function navTo(page) {
    document.body.classList.remove('menu-open');
    const elTable = document.querySelector('.workers-table-container')
    const elForm = document.querySelector('.form-page')
    const elTableNav = document.querySelector('.table-nav')
    const elFormNav = document.querySelector('.form-nav')
    switch (page) {
        case 'table':
            elTable.classList.replace('display-none', 'display-block')
            elTableNav.classList.replace('non', 'active')

            elForm.classList.replace('display-block', 'display-none')
            elFormNav.classList.replace('active', 'non')
            break;
        case 'form':
            elForm.classList.replace('display-none', 'display-block')
            elFormNav.classList.replace('non', 'active')

            elTable.classList.replace('display-block', 'display-none')
            elTableNav.classList.replace('active', 'non')
            break;
        default:
            break;
    }

}


// FORM
function handleSubmit(ev) {
    ev.preventDefault();
    let isError = false
    const user = {}

    Array.from(ev.target).forEach((el) => {
        resetErrorMsgs(el)
        if (el.name) {

            const elSpan = document.querySelector(`span.${el.name}`)

            const error = validateService.fieldValidator(el)

            if (error) {
                document.querySelector(`.form-${el.name}`).classList.add('error-box')
                elSpan.style.display = 'block'
                elSpan.innerText = error
                isError = true
            }
            const name = el.name
            const value = el.value
            if(name && value) user[name] = value
           
        }
    })
    if (!isError) {
        userService.onSignup(user)
        cleanInputFields()
    }
}


function cleanInputFields() {
    document.querySelector('.form-firstname').value = ''
    document.querySelector('.form-lastname').value = ''
    document.querySelector('.form-email').value = ''
    document.querySelector('.form-gender').value = ''
    document.querySelector('.form-desc').value = ''
}


function resetErrorMsgs(el) {
    if (el.name === 'form-btn') return
    document.querySelector(`.form-${el.name}`).classList.remove('error-box')
    const elSpan = document.querySelector(`span.${el.name}`)
    elSpan.style.display = 'none'
}
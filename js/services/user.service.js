import { utilService } from "./util.service.js"
import { storageService } from "./storage.service.js";
import { swalService } from "./swal.service.js"


const STORAGE_KEY = 'userDB'
const gUsers =[]

export const userService = {
    onSignup
}


function onSignup(newUser) {
    newUser.id = utilService.makeId()
    gUsers.push(newUser)
    storageService.saveToStorage(STORAGE_KEY, gUsers)
    swalService.onSaveSwal()

}
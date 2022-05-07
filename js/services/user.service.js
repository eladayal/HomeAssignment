import { utilService } from "./util.service.js"
import { storageService } from "./storage.service.js";
import { swalService } from "./swal.service.js"


const STORAGE_KEY = 'userDB'

export const userService = {
    onSignup
}


function onSignup(newUser) {
    newUser.id = utilService.makeId()
    storageService.saveToStorage(STORAGE_KEY, newUser)
    swalService.onSaveSwal()

}
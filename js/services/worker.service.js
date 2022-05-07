import  {storageService}  from "./storage.service.js";
import { utilService } from "./util.service.js"


export const workerService = {
    query,
}

const STORAGE_KEY = 'workersDB';


async function query(){
    let workers = storageService.loadFromStorage(STORAGE_KEY)
    if (!workers||!workers.length) workers = _createWorkers ()
    return workers
}


function _createWorker(fullName, age, startDate) {
    const worker = {
        id: utilService.makeId(),
        fullName,
        age,
        startDate:utilService.getDate(startDate),
        desc: utilService.makeLorem(60)
    }
    return worker
}


function _createWorkers (){

     const workers = [
            _createWorker('Elad Ayal',27,1651486311),
            _createWorker('Barak Lebowich',27,1651485511),
            _createWorker('Daniel Bar-on',22,1653386311),
            _createWorker('Tommy Irmia',18,1653486311),
        ]
    storageService.saveToStorage(STORAGE_KEY,workers)
    return workers
}
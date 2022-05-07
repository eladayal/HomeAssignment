export const validateService = {
    fieldValidator
}

function fieldValidator(el) {
    let regex;
    switch (el.name) {
        case 'email':
            regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            if (regex.test(el.value)) return null
            else return 'Please enter a valid email'

        case 'firstname':
        case 'lastname':

            regex = /^[a-z ,.'-]+$/i
            if (regex.test(el.value)) return null
            else return 'Please enter a valid name'

        case 'gender':
            if (el.value) return null
            else return 'Please Select one of the above'
        case 'desc':
            if (el.value) return null
            else return 'Dont be shy... write a couple of words'

        default:
            return null
    }

}
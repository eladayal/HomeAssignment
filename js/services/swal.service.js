export const swalService = {
  onSaveSwal,
}


function onSaveSwal() {
  const Toast = Swal.mixin({
    toast: true,
    width: 300,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2500,
    timerProgressBar: true,
  })
  Toast.fire({
    icon: 'success',
    title: 'User has been saved!'
  })
}
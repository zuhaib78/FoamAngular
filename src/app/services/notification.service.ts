import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() { }

   success(msg: string) {
    return Swal.fire({
      title: 'Success!',
      text: msg,
      icon: 'success',
      timer: 2000,
        customClass: {
        container: 'custom-message-swal'
      }
    })
  }

  error(msg: string) {
    Swal.fire({
      title: 'Error!',
      text: msg,
      icon: 'error',
      timer: 3000,
      confirmButtonText: '  Ok  ',
      confirmButtonColor: '#F15E5E',
      customClass: {
        container: 'custom-message-swal'
      }
    })
  }

  delete(msg?: string) {
    return Swal.fire({
      title: 'Are you sure?',
      text: `Do you really want to delete this record? \n This process cannot be undone.`,
      icon: 'error',
     
      showCancelButton: true,
      confirmButtonText: 'Yes',
      confirmButtonColor: '#F15E5E',
    })
  }
  warning(msg?: string) {
    return Swal.fire({
      title: 'Are you sure?',
      text: msg,
      icon: 'info',
      buttonsStyling: false,
      showCancelButton: true,
      cancelButtonText: 'No',
     customClass:{
      cancelButton: 'btn btn-outline-secondary ml-2  pr-4 pl-4 pt-2' ,
      confirmButton: 'btn btn-success  pr-4 pl-4 pt-2'
    },
      confirmButtonText: 'Yes',
      confirmButtonColor: '#28a745',
    })
  }
  Custom(msg: string, title: string, icon) {
    return Swal.fire({
      title: title,
      text: msg,
      icon: icon,
      showCancelButton: true,
      cancelButtonText: 'No',
      confirmButtonText: 'Yes',
      confirmButtonColor: '#28a745',
      buttonsStyling: false,
      customClass:{
        cancelButton: 'btn btn-outline-secondary ml-2  pr-4 pl-4 pt-2' ,
        confirmButton: 'btn btn-success  pr-4 pl-4 pt-2'
      },

    })
  }

  CustomTitle(msg: string, title: string) {
    Swal.fire({
      title: title,
      text: msg,
      icon: 'error',
      timer: 3000,
      confirmButtonText: '  Ok  ',
      confirmButtonColor: '#F15E5E',
      customClass: {
        container: 'custom-message-swal'
      }
    })
  }

  CustomMessage(msg: string, title: string) {
    return Swal.fire({
      title: title,
      text: msg,
      icon: 'error',
      showCancelButton: true,
      confirmButtonText: 'View Import Errors',
      cancelButtonText: 'Cancel Import',
      confirmButtonColor: '#F15E5E',
    })
  }

  CustomErrorMessage(msg: string, title: string) {
    return Swal.fire({
      title: title,
      text: msg,
      icon: 'error',
      showCancelButton: false,
      confirmButtonText: 'OK',
      confirmButtonColor: '#F15E5E',
    })
  }

  CustomAll(msg: string, title: string, cancelButtonText:string, confirmButtonText:string, icon) {
    return Swal.fire({
      title: title,
      text: msg,
      icon: icon,
      showCancelButton: true,

      buttonsStyling: false,
      customClass:{
        cancelButton: 'btn btn-outline-secondary ml-2  pr-4 pl-4 pt-2' ,
        confirmButton: 'btn btn-success  pr-4 pl-4 pt-2 pb-2' 
      },
 
      confirmButtonText: confirmButtonText,
      cancelButtonText: cancelButtonText,
      confirmButtonColor: '#F15E5E',
    })
  }
 
}

import { Injectable } from '@angular/core'

declare let toastr:any

@Injectable()
export class ToastrService {
  success(message: string, title?: string) {
    toastr.sucess(message, title)
  }
  info(message: string, title?: string) {
    toastr.sucess(message, title)
  }
  warning(message: string, title?: string) {
    toastr.sucess(message, title)
  }
  error(message: string, title?: string) {
    toastr.sucess(message, title)
  }
}

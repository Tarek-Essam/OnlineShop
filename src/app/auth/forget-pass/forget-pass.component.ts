import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons , NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {FormGroup , FormControl , Validators} from '@angular/forms';
import {AbstractControl, ValidationErrors} from '@angular/forms';
import { LoginService } from '../../login.service';

@Component({
  selector: 'app-forget-pass',
  templateUrl: './forget-pass.component.html',
  styleUrls: ['./forget-pass.component.css']
})
export class ForgetPassComponent{
  modalReference: NgbModalRef;
  displayValidator: boolean = false;
  error: boolean = false;
  uuidError:boolean = false;
  passUpdated:boolean = false;
  mailSent:boolean = false;
  closeResult: string;
  openSellerField : boolean = false;
  form = new FormGroup({
    email: new FormControl('',[Validators.required , Validators.pattern("[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}")])
  });

  passForm = new FormGroup({
    uuid: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required]),
    password2: new FormControl('',[Validators.required])
  });
  constructor(private modalService: NgbModal , private loginSer: LoginService) { }

  get email(){
    return this.form.get('email');
  }

  open(content) {
    this.modalReference = this.modalService.open(content);
     this.modalReference.result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  submit(){
    this.mailSent = !this.mailSent
    this.loginSer.forgetPasswordMail(this.form.value).subscribe((res : any)=>{
      if (res.uuid) {
        this.displayValidator = !this.displayValidator;
      }
      else{
        this.error = !this.error;
      }
    },(err)=>{
      this.error = !this.error;
    })
  }

  submitPass(){
    // console.log(this.passForm.value)
    this.loginSer.resetPassword(this.passForm.value).subscribe((res :any)=>{
      if (res.uuid == 'updated') {
          this.passUpdated = !this.passUpdated;
          this.uuidError = !this.uuidError;
          setTimeout(()=>{
            this.modalReference.close();
          },1000)
      }
      else{
        this.uuidError = !this.uuidError;
        this.passUpdated = !this.passUpdated;
      }
    },(err)=>{
      this.uuidError = !this.uuidError;
      this.passUpdated = !this.passUpdated;
    })
  }

}

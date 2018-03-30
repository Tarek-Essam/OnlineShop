import {Component} from '@angular/core';
import {NgbModal, ModalDismissReasons , NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {FormGroup , FormControl , Validators} from '@angular/forms';
import {AbstractControl, ValidationErrors} from '@angular/forms';
import { LoginService } from '../../login.service';
import { AsyncLocalStorage } from 'angular-async-local-storage';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{
  modalReference: NgbModalRef;
  closeResult: string;
  image : any;
  openSellerField : boolean = false;
  form = new FormGroup({
    userName: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required , Validators.pattern("[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}")] , this.validateEmailNotTaken.bind(this)),
    password: new FormControl('',Validators.required),
    password2: new FormControl('', Validators.required),
    address: new FormControl('',Validators.required),
    nationalID: new FormControl('123456789123',[Validators.required , Validators.minLength(12) , Validators.pattern('^[0-9]{12}')])
  });

  constructor(private modalService: NgbModal , private loginSer: LoginService , private storage: AsyncLocalStorage) {}

  get username(){
    return this.form.get('userName');
  }
  get email(){
    return this.form.get('email');
  }

  get password(){
    return this.form.get('password');
  }

  get password2(){
    return this.form.get('password2');
  }

  get nationalID(){
    return this.form.get('nationalID');
  }
  get address(){
    return this.form.get('address');
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

  sellerClicked() {
    if (this.form.get('nationalID').value) {
      this.form.get('nationalID').reset("");
    }
    else{
      this.form.get('nationalID').reset("123456789123");
    }
    this.openSellerField = !this.openSellerField;
  }

  validateEmailNotTaken(control: AbstractControl) {
      return this.loginSer.sendToRegister(control.value).map((res :any) => {
        return res.data == "invalid" ?  {"validateEmailNotTaken" : true} : null ;
      })
  }

  submit(){
    // console.log(this.form.value);
    this.form.value.image = this.image;
    return this.loginSer.registerUser(this.form.value).subscribe((res : any) => {
    console.log(res);
    this.modalReference.close()
    this.storage.setItem('provider',`${res.provider}`).subscribe(() => {});
    this.storage.setItem('token',`${res.token}`).subscribe(() => {});
  } , err => {
    console.log(err)
  })
}

changeListener($event) : void {
  this.readThis($event.target);
}

readThis(inputValue: any): void {
  var file:File = inputValue.files[0];
  var myReader:FileReader = new FileReader();

  myReader.onloadend = (e) => {
    this.image = myReader.result;
  }
  myReader.readAsDataURL(file);
}

}

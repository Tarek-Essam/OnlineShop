import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
private userInfo : object;

  constructor(private loginSer: LoginService) { }

  ngOnInit() {
    this.userInfo = this.loginSer.getUserInfo();
  }


}

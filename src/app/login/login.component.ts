import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model;
  constructor() {

   }


  submitLogin(form) {
    debugger;
    if (form.value.optradio === 'student') {
      if (form.value.email === 'amit' && form.value.password === 'Amit@123') {
        alert('Student Login Successfull');
      }
    } else if (form.value.optradio === 'faculty') {
      if (form.value.email === 'neha' && form.value.password === 'Neha@123') {
        alert('Faculty Login Successfull');
      }
    } else if (form.value.optradio === 'admin') {
      if (form.value.email === 'admin' && form.value.password === 'Admin@123') {
        alert('Admin Login Successfull');
      }
    } else {
      alert ('Invalid Credentials !!');
    }
    form.reset();
  }

  ngOnInit() {
  }

}

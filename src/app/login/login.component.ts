import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private route:Router) { }
  formGroup: FormGroup;
  ngOnInit(): void {

    this.formGroup = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })

  }

  createLogin(){
    console.log("enter dashboard");
    window.localStorage.setItem("authtoken", "YWc3Etd5JlB6O8gmH4k7ZHCGKl3pk5AH");
    this.route.navigate(["/dashboard/home"]);
  }

}

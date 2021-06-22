import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormGroup, FormBuilder } from '@angular/forms'
import { DataService } from '../data.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor(private fb: FormBuilder, private data:DataService, private router:Router) { }
  formGroup: FormGroup;
  newProduct: object

  ngOnInit(): void {

    this.formGroup = this.fb.group({
      search: ['', [Validators.required]]
    })

  }

  logout(){
    console.log("logout dashboard");
    window.localStorage.removeItem("authtoken");
    this.router.navigate(['/login']);
  }
  getSearchValue(){
    console.log(this.formGroup.value.search);
    if(this.formGroup.value.search != ""){
      this.router.navigate(['dashboard/news', this.formGroup.value.search]);
      
    }

    
  }
}

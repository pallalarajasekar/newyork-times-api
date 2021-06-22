import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private data: DataService, private router: Router) { }

  homeData: any;
  ngOnInit(): void {

    this.data.getHomeNews().subscribe((data: any) => {
      this.homeData = data.results;
      console.log(this.homeData);
    })

  }
  continueBlock(section){
    this.router.navigate(['dashboard/news',section]);
  }

}

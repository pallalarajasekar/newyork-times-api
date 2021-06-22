import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor( private activeRoute: ActivatedRoute, private data:DataService) { }

  currentRead: string;
  homeData: any;
  currentReadData =[];
  ngOnInit(): void {
    
    this.currentRead = this.activeRoute.snapshot.params.id;
    console.log(this.currentRead);

    this.data.getNewsData(this.currentRead).subscribe((data: any) => {
      this.currentReadData = data.results;
      console.log(this.currentReadData);

      // for( let i=0; i<this.homeData.length; i++){
      //   console.log(this.homeData[i].section);
      //   if(this.homeData[i].section === this.currentRead){
      //     this.currentReadData.push(this.homeData[i]);
      //   }
        
      // }
      // console.log(this.currentReadData);
    })

  }

}

import { Component, OnInit, Input, Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  @Input('sectionName') sectionName = "";
  constructor() { }

  ngOnInit(): void {
  }

}

@Pipe({
  name: 'filterUnique',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    
    // Remove the duplicate elements
    if(!value){
      value = []
    }
    let arr = value.map(o => o['section'])
    let uniqueArray = Array.from(new Set(arr));
    return uniqueArray;
  }

}

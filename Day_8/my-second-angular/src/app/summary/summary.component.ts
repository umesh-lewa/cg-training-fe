import { Component, Input, OnInit } from '@angular/core';
import { ItemcountServiceService } from '../itemcount-service.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  @Input() itemCount:Number;
  
  constructor(private itemService: ItemcountServiceService) { 

  }

  ngOnInit(): void {
    this.itemService.data.subscribe(data=>{
      this.itemCount = data;
    });
  }

}

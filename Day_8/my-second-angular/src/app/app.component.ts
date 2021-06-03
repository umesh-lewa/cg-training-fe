import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'my-second-angular';

  items: any = [];
  itemName = "";

  listOfvegetables = ["capsicum", "tomato", "cabbage"];
  listOfFruits = ["orange", "banana", "mango"];

  ngOnInit() {
    console.log('Called ngOnInit method');
    if(localStorage.getItem("myTodoListData")){
      this.items=JSON.parse(localStorage.getItem("myTodoListData"));
      console.log("setting items from local storage");
    }else{
      console.log("no items found in localstorage");
    }
  }

  addItem() {
    //console.log(this.itemName);
    if (this.itemName != "") {
      //console.log(this.itemName);
      if (this.listOfvegetables.indexOf(this.itemName) > -1) {
        this.items.push([this.itemName, "vegetable"]);
      } else {
        this.items.push([this.itemName, "fruit"]);
      }
      //this.items.push(this.itemName);
      this.itemName = "";
      //console.log(this.items);
    }

    let jsonData = JSON.stringify(this.items);
    localStorage.setItem('myTodoListData', jsonData);

  }

  removeItem(index: number) {
    this.items.splice(index, 1);

    let jsonData = JSON.stringify(this.items);
    localStorage.setItem('myTodoListData', jsonData);

    if(this.items.length==0){
      console.log("items length 0 so removing key from local storage");
      localStorage.removeItem("myTodoListData");
    }
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'my-second-angular';

  items: any = [];
  itemName = "";
  errorMessage = "";

  listOfvegetables = ["capsicum", "tomato", "cabbage"];
  listOfFruits = ["orange", "banana", "mango"];

  ngOnInit() {
    console.log('Called ngOnInit method');
    if (localStorage.getItem("myTodoListData")) {
      this.items = JSON.parse(localStorage.getItem("myTodoListData"));
      console.log("setting items from local storage");
    } else {
      console.log("no items found in localstorage");
    }
  }

  addItem() {
    //console.log(this.itemName);
    if (this.itemName != "") {

      if (this.listOfvegetables.indexOf(this.itemName) > -1 || this.listOfFruits.indexOf(this.itemName) > -1) {

      } else {
        this.errorMessage = "Please enter valid item !";
        return;
      }
      let isItemAlreadyInBasket = false;
      for (var item of this.items) {
        console.log(item[0]);
        if (item[0] == this.itemName) {
          isItemAlreadyInBasket = true;
          console.log("item found in basket ! Setting flag to true !");
        }
      }
      if (isItemAlreadyInBasket) {
        this.errorMessage = "Selected item already in basket !";
        return;
      }
      //console.log(this.itemName);
      if (this.listOfvegetables.indexOf(this.itemName) > -1) {
        this.items.push([this.itemName, "vegetable"]);
      } else if (this.listOfFruits.indexOf(this.itemName) > -1 && this.items.indexOf(this.itemName) == -1) {
        this.items.push([this.itemName, "fruit"]);
      } else {

      }
      this.errorMessage = "";
      //this.items.push(this.itemName);
      this.itemName = "";
      //console.log(this.items);
    } else {
      this.errorMessage = "Item is Empty !";
    }

    let jsonData = JSON.stringify(this.items);
    localStorage.setItem('myTodoListData', jsonData);

  }

  addItemByEnter(event) {
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      this.addItem();
    }
  }

  removeItem(index: number) {
    this.items.splice(index, 1);

    let jsonData = JSON.stringify(this.items);
    localStorage.setItem('myTodoListData', jsonData);

    if (this.items.length == 0) {
      console.log("items length 0 so removing key from local storage");
      localStorage.removeItem("myTodoListData");
    }
  }

}

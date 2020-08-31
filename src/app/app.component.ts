import { Component, OnInit } from '@angular/core';
import { SpacexService } from './services/spacex.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  //   title = 'SpaceXproject';
  selectedItem: any = "";
  launchValue: any = "";
  landingValue: any = "";
  queryObject: any = {};

  //   yearArray: any[] = [2006, 2007, 2008, 2009];
  booleanArray: any[] = ["true", "false"];

  tableData: any = [];
  launchYear: any = [];

  launchedYear = [2006, 2007, 2008, 2009];

  constructor(private service: SpacexService) { }

  ngOnInit() {
    this.service.fetchData().subscribe(data => {
      this.tableData = data;
      console.log(data)
    })

    for (let i = 2006; i <= 2020; i++) {
      this.launchYear.push(i);
    }
  }

  queryHandler() {
    console.log("queryObject=====", this.queryObject);
    this.service.fetchQueryData(this.queryObject).subscribe(data => {
      this.tableData = data;
      console.log(data)
    })
  }

  yearClick(event, value) {
    // alert("hi")
    console.log(event, value);
    if (this.selectedItem == value) {
      this.selectedItem = "";
      delete this.queryObject["launch_year"];
    }
    else {
      this.selectedItem = value;
      this.queryObject.launch_year = value;
    }
    this.queryHandler();
  }
  launchClick(event, value) {
    console.log(event, value);
    if (this.launchValue == value) {
      this.launchValue = "";
      delete this.queryObject["launch_success"];

    }
    else {
      this.launchValue = value;
      this.queryObject.launch_success = value;

    }
    this.queryHandler();

  }

  landingClick(event, value) {
    console.log(event, value);
    if (this.landingValue == value) {
      this.landingValue = "";
      delete this.queryObject["land_success"];

    }
    else {
      this.landingValue = value
      this.queryObject.land_success = value;

    }
    this.queryHandler();

  }
}

   // var target = event.target || event.srcElement || event.currentTarget;
    // console.log(target.attributes.id, target.attributes.class);
    // let classes = target.attributes.class;
    // classes.removeClass('btns-selected')
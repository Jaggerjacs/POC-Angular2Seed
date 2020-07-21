import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

  // @ViewChild('table') myTable: any;

  isLoading: boolean = false;

  placeholder = 'Custom';

  rows = [
    { name: 'Will', age: 28 },
    { name: 'Arthur', age: 32 },
    { name: 'Adrew', age: 41 },
  ];

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = !this.isLoading;

    }, 2500);
    // console.log(this.myTable);

    // this.myTable.nativeElement.myRows = this.rows;
  }

  goChange(e: any) {
    console.log(e.detail);
    this.rows.forEach(row => row.name = row.name.toUpperCase());
  }
}

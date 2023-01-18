import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-feild',
  templateUrl: './search-feild.component.html',
  styleUrls: ['./search-feild.component.scss']
})
export class SearchFeildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getValue(value: string) {
    console.log(value)
  }

}

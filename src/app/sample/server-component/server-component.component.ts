import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-component',
  templateUrl: './server-component.component.html',
  styleUrls: ['./server-component.component.scss']
})
export class ServerComponentComponent implements OnInit {
  serverId:any
  serverStatus = "offline"
  data(){
    return this.serverId = 45;
   
  }
 
  constructor() { }

  ngOnInit(): void {
  }

}

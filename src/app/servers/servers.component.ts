import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
noNewServer=false;
serverCreationStatus='online'
  constructor() { 
    setTimeout(()=>{
      this.noNewServer=true;
    },20000 );
  }

  ngOnInit(): void { 
  }

  oncreateServer(){
    this.serverCreationStatus='offline'+this.serverName
  }
  event:Event
  serverName:any
  updateServerName(event){
    console.log(event.target.value);
    this.serverName=event.target.value
  }

}

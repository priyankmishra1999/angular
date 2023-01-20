import { Component, OnInit } from '@angular/core';
import { LocalService } from '../local.service';
import { HttpClient } from '@angular/common/http'
@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  noNewServer = false;
  serverCreationStatus = 'online'
  serverCreated = false;
  servers = ['Server 1 , Server 2'];

  constructor(private localStore: LocalService, private httpClient: HttpClient) {
    setTimeout(() => {
      this.noNewServer = true;
    }, 200);
  }
  data: Object

  data1: any
  image: any
  dataList: []
  oncreateServer() {
    this.serverCreated = true,
      this.servers.push(this.serverName)
    this.serverCreationStatus = 'offline ' + this.serverName
    console.log(this.serverName);
    this.localStore.saveData("serverName", this.serverName)
    this.httpClient.get('https://java.bitbharat.world/static/get-Blog-list?page=0&pageSize=20&title=').subscribe((res: any) => {
      this.dataList = res.data.List
      // this.dataList.push(res.data.id)

    })

  }
  title:any
  viewData(contentId:any){
console.log(contentId);
this.httpClient.get(`https://java.bitbharat.world/static/get-Blog-by-id?blogId=${contentId}`).subscribe((res: any) => {
  this.title=res.data.title

})
  }
  event: Event
  serverName: any
  updateServerName(event) {



    // console.log(event.target.value);
    this.serverName = event.target.value
  }
  ngOnInit(): void {

  }

}

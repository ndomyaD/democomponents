import { Component, OnInit } from '@angular/core';
import { RecordsService } from '../records';


@Component({
  selector: 'app-emp-info',
  standalone: false,
  templateUrl: './emp-info.html',
  styleUrl: './emp-info.css',
  providers: [RecordsService]
})
export class EmpInfo implements OnInit {
  infoReceived1: string[] = [];
  infoReceived2: string[] = [];
  infoReceived3: string[] = [];

getInfoFromServiceClass1() {
    this.infoReceived1 = this.rservice.getInfo1();
}
getInfoFromServiceClass2() {
    this.infoReceived2 = this.rservice.getInfo2();
}
getInfoFromServiceClass3() {
    this.infoReceived3 = this.rservice.getInfo3();
} 

  constructor(private rservice: RecordsService) {}

  ngOnInit(): void {
    
  }

 
}

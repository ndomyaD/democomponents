import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {
   info1: string[] = ["Ndomya Dom", "E455", "dom@abc.net"];
   info2: string[] = ["Ndomya Domi", "E478", "domi@abc.net"];
   info3: string[] = ["Ndomya Dominique", "E445", "domin@abc.net"];

   getInfo1() : string[] {
       return this.info1
   }

   getInfo2() : string[] {
       return this.info2
   }

   getInfo3() : string[] {
       return this.info3
   }

   constructor() { }
}

import { Component, OnInit } from '@angular/core';

import { jsonpService } from '../services/get.service';
import { accountInfo } from '../shared/account-info';

@Component({
  selector: 'app-account-options',
  templateUrl: './account-options.component.html',
  styleUrls: ['./account-options.component.scss']
})
export class AccountOptionsComponent implements OnInit {
  userKey: string = 'AJA3Cw9XcJZf';
  userSecret: string = '1J%2BYxAY47khnuXf4GKSggLpPFBbQv8Hq';
  APIKey: string = '3_inujb44QPskKBok5VwhYnqy40eaVrwAJXXLsqaHRI_6DCM3KHhxNXjjcFQe0PASK';


  data;

  constructor(private jsonpService:  jsonpService) { }

  ngOnInit() {
    this.jsonpService.jsonpGet(this.userKey, this.userSecret, this.APIKey).subscribe(
      data => {
        this.data = data,
        console.log(this.data.accountOptions)
      },
      error => console.error(error)
    );
  }

  setProperties() {
  this.jsonpService.httpSet(this.userKey, this.userSecret, this.APIKey, {})
    .subscribe(data => console.log(data));
  }

}

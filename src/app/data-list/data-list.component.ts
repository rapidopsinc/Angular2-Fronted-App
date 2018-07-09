import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { Http} from '@angular/http';
import $ from "jquery";
import * as _ from'lodash';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html'
})
export class DataListComponent implements OnInit {

  dataList: any;
  EditedData:any;
  constructor(private router: Router, private http: Http) {
    }



  ngOnInit() {
     this.getList();
  }

  getList(){
    this.http.get(`https://jsonplaceholder.typicode.com/posts`)
      .subscribe(result => {
        this.dataList = result.json();
        });
    }

    delete(id){
    _.remove(this.dataList, (data) => {
         return data.id === id;
    });
  }

}

import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Http} from '@angular/http';
import $ from "jquery";


@Component({
  selector: 'app-single-data',
  templateUrl: './single-data.component.html'
})
export class SingleDataComponent implements OnInit {
    dataObj: any = {};
  editModeOn: boolean =false;

  constructor(private router: Router, private http: Http, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getSingleList(params['id']);
    });
  }

  getSingleList(id) {
    this.http.get(`https://jsonplaceholder.typicode.com/posts/` + id)
      .subscribe(result => {
        this.dataObj = result.json();
      });
  }

  Edit() {
    this.editModeOn = true;
  }

  Update(form) {
    if (form.valid) {
        this.router.navigate(['/data/list']);
      }
  }

  Cancel() {
    this.editModeOn = false;
  }

}

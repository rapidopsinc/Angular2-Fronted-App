import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import $ from "jquery";


@Component({
  selector: 'app-basic-form-validation',
  templateUrl: './basic-form-validation.component.html'
})
export class BasicFormValidationComponent implements OnInit {
  Name: any;
  fileObj:any;
  noFileSelected:boolean=false;
  userNameRegexPattern = /^[a-zA-Z0-9_]+$/;

  constructor(private router: Router) {
  }

  ngOnInit() {
    $('body').trigger('EditedData', false);
    }

  getFile(event) {
    this.noFileSelected = false;
    this.fileObj = event.target.files[0];
  }

  checkFileSelectOrNot(){
    if(!this.fileObj){
      this.noFileSelected = true;
      return false;
    }else{
        this.noFileSelected = false;
        return true;
    }

  }
  validateForm(form) {
    if (this.checkFileSelectOrNot() && form.valid)  {
        this.router.navigate(['/list']);
    }
  }
}

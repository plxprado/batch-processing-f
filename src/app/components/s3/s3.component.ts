import { Component, OnInit } from '@angular/core';
import { S3Service } from '../../services/S3Service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-s3',
  templateUrl: './s3.component.html',
  styleUrl: './s3.component.scss'
})
export class S3Component implements OnInit{

  
  showProgress: boolean = false;
  submitted: boolean = false;


  private s3service : S3Service;

  formData = {
    buecketName: '',
    };

  

  constructor(private httpCLient: HttpClient, private formBuilder: FormBuilder) {
    this.s3service = new S3Service(httpCLient)
  }

  downloadBucket(bucketName: string) {
    this.s3service.downloadByBucketName(bucketName);
  
  }

  ngOnInit(): void {
       
  }

  onSubmit() {
    console.log("FORM DATA" + this.formData.buecketName)
    this.downloadBucket(this.formData.buecketName)
    this.submitted = true
  }
    
}

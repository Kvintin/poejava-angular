import { ContractType } from './../../models/contract-type.model';
import { JobService } from './../../services/job.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-job-add',
  templateUrl: './job-add.component.html',
  styleUrls: ['./job-add.component.css']
})
export class JobAddComponent implements OnInit {
  contractTypes: ContractType[] = [
    { id: 1,  label: 'Stage' },
    { id: 2,  label: 'Interim' },
    { id: 3,  label: 'CDD' },
    { id: 4,  label: 'CDI' },
    { id: 5,  label: 'Indépendant' },
  ];

  form: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private jobService: JobService
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      title: ['', [Validators.required, Validators.pattern(/^[a-z\s\-]{2,10}$/i)]],
      company: '',
      city: '',
      zipcode: '',
      description: '',
      contractType: null,
      startDate: new Date(),
      publishedDate: new Date()
    });
  }

  onSave() {
    if (this.form.valid) {
      console.log(this.form.value);
    } else {
      console.log("c'est pas valid");
    }
  }

  get title() {
    return this.form.get('title');
  }
}

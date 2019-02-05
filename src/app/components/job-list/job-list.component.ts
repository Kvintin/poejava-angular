import { JobService } from './../../services/job.service';
import { Job } from './../../models/job.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {
  jobs: Job[] = [];

  constructor(private jobService: JobService) { }

  ngOnInit() {
    this.jobService.findAll()
      .subscribe(
        (jobs: Job[]) => {
          this.jobs = jobs;
        },
        err => {
          console.log(err);
        }
      );
  }
}

// err => 'ok'

// function(err) {
//   return 'ok';
// }

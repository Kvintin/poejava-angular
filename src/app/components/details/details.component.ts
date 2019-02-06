import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Job } from './../../models/job.model';
import { JobService } from './../../services/job.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  job = new Job();

  constructor(
    private router: Router,
    private jobService: JobService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    this.jobService.findOne(parseInt(id, 10))
      .subscribe(
        (job: Job) => {
          this.job = job;
        },
        err => {
          console.log(err);
        }
      );
  }

  onDelete(event: Event) {
    event.preventDefault();

    this.jobService.delete(this.job.id)
      .subscribe(
        success => {
          this.router.navigate(['/jobs/list']);
        },
        err => {
          console.log(err);
        }
      );
  }
}

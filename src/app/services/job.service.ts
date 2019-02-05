import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Job } from './../models/job.model';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  constructor(private http: HttpClient) { }

  /**
   * Find all job.
   */
  findAll(): Observable<Job[]> {
    return this.http.get<Job[]>('http://localhost:3000/jobs');
  }

  /**
   * Create a new job.
   */
  add(job: Job): Observable<Job> {
    return this.http.post<Job>('http://localhost:3000/jobs', job);
  }
}

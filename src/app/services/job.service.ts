import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Job } from './../models/job.model';

const BASE_URL = 'http://localhost:3000/jobs';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  constructor(private http: HttpClient) {}

  /**
   * Find all job.
   */
  findAll(): Observable<Job[]> {
    return this.http.get<Job[]>(BASE_URL);
  }

  /**
   * Create a new job.
   */
  add(job: Job): Observable<Job> {
    return this.http.post<Job>(BASE_URL, job);
  }

  /**
   * Delete a job by its ID.
   */
  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${BASE_URL}/${id}`);
  }

  /**
   * Find a job by its ID.
   */
  findOne(id: number): Observable<Job> {
    return this.http.get<Job>(`${BASE_URL}/${id}`);
  }
}

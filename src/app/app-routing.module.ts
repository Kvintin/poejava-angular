import { DetailsComponent } from './components/details/details.component';
import { RouterModule, Route } from '@angular/router';
import { NgModule } from '@angular/core';

import { DemoComponent } from './components/demo/demo.component';
import { JobListComponent } from './components/job-list/job-list.component';
import { JobAddComponent } from './components/job-add/job-add.component';

const routes: Route[] = [
  { path: '', redirectTo: 'demo', pathMatch: 'full' },
  {
    path: 'jobs',
    children: [
      { path: 'add', component: JobAddComponent },
      { path: 'list', component: JobListComponent },
      { path: 'details/:id', component: DetailsComponent },
    ]
  },
  { path: '**', component: DemoComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  { path : '', redirectTo: 'layout', pathMatch: 'full'},
  { path: 'layout', component: LayoutComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path : '**', redirectTo: 'layout', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

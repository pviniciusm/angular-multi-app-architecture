import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ResumoRoutingModule } from 'projects/resumo/src/public-api';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
  },
  {
    path: 'resumo',
    loadChildren: () => ResumoRoutingModule,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

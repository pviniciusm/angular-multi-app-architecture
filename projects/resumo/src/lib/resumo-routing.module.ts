import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumoPageComponent } from './pages/resumo-page/resumo-page.component';

const routes: Routes = [
  {
    path: '',
    component: ResumoPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResumoRoutingModule {}

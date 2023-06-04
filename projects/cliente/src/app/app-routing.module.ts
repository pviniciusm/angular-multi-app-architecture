import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LojaPageComponent } from './pages/loja-page/loja-page.component';
import { ResumoRoutingModule } from 'projects/resumo/src/public-api';

const routes: Routes = [
  {
    path: '',
    component: LojaPageComponent,
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

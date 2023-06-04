import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LojaPageComponent } from './pages/loja-page/loja-page.component';

const routes: Routes = [
  {
    path: '',
    component: LojaPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

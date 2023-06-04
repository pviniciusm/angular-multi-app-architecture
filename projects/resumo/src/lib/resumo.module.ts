import { NgModule } from '@angular/core';
import { ResumoComponent } from './resumo.component';
import { ResumoPageComponent } from './pages/resumo-page/resumo-page.component';
import { ResumoRoutingModule } from './resumo-routing.module';

@NgModule({
  declarations: [ResumoComponent, ResumoPageComponent],
  imports: [ResumoRoutingModule],
  exports: [ResumoComponent],
})
export class ResumoModule {}

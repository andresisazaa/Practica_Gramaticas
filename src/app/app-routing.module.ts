import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IngresoGramaticaComponent } from './pages/ingreso-gramatica/ingreso-gramatica.component';

const routes: Routes = [
  {
    path: '',
    component: IngresoGramaticaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

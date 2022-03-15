import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WidgetalgoliaComponent } from './components/widgetalgolia/widgetalgolia.component';
import { HtmlalgoliaComponent } from './components/htmlalgolia/htmlalgolia.component';
import { DirectserverComponent } from './components/directserver/directserver.component';

const routes: Routes = [
  { path: 'widget', component: WidgetalgoliaComponent },
  { path: 'html', component: HtmlalgoliaComponent },
  { path: 'server', component: DirectserverComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

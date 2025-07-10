import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ComponentsComponent } from './pages/components/components.component';
import { VisualsComponent } from './pages/visuals/visuals.component';
import { ExtrasComponent } from './pages/extras/extras.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home - codeX WebSight'
  },
  {
    path: 'components',
    component: ComponentsComponent,
    title: 'Components - codeX WebSight'
  },
  {
    path: 'extras',
    component: ExtrasComponent,
    title: 'Extras - codeX WebSight'
  },
  {
    path: 'visuals',
    component: VisualsComponent,
    title: 'Visuals - codeX WebSight'
  },
  {
    path: 'contact',
    component: ContactComponent,
    title: 'Contact - codeX WebSight'
  }
];
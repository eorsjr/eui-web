import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { GalleryComponent } from './pages/gallery/gallery.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home - EUI Web'
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'About - EUI Web'
  },
  {
    path: 'gallery',
    component: GalleryComponent,
    title: 'Gallery - EUI Web'
  }
];
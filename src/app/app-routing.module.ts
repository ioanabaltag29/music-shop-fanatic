import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { StoreComponent } from './components/store/store.component';
import { CdDetailsComponent } from './components/cd-details/cd-details.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { PopGenreComponent } from './components/pop-genre/pop-genre.component';
import { RockGenreComponent } from './components/rock-genre/rock-genre.component';
import { JazzBluesGenreComponent } from './components/jazz-blues-genre/jazz-blues-genre.component';
import { HipHopRapGenreComponent } from './components/hip-hop-rap-genre/hip-hop-rap-genre.component';
import { DiscoGenreComponent } from './components/disco-genre/disco-genre.component';
import { ElectronicaGenreComponent } from './components/electronica-genre/electronica-genre.component';
import { FunkSoulGenreComponent } from './components/funk-soul-genre/funk-soul-genre.component';
import { SoundtrackGenreComponent } from './components/soundtrack-genre/soundtrack-genre.component';
import { RbGenreComponent } from './components/rb-genre/rb-genre.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactComponent } from './components/contact/contact.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: "full"
  },
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  },
  {
    path: "store",
    component: StoreComponent,
    pathMatch: "full"
  },
  {
    path: "cd-details/:cdId",
    component: CdDetailsComponent,
    pathMatch: "full"
  },
  {
    path: "registration",
    component: RegistrationComponent,
    pathMatch: "full"
  },
  {
    path: "log-in",
    component: LogInComponent,
    pathMatch: "full"
  },
  {
    path: "store/pop-genre",
    component: PopGenreComponent,
    pathMatch: "full"
  },
  {
    path: "store/rock-genre",
    component: RockGenreComponent,
    pathMatch: "full"
  },
  {
    path: "store/jazz-blues-genre",
    component: JazzBluesGenreComponent,
    pathMatch: "full"
  },
  {
    path: "store/hip-hop-rap-genre",
    component: HipHopRapGenreComponent,
    pathMatch: "full"
  },
  {
    path: "store/disco-genre",
    component: DiscoGenreComponent,
    pathMatch: "full"
  },
  {
    path: "store/electronica-genre",
    component: ElectronicaGenreComponent,
    pathMatch: "full"
  },
  {
    path: "store/funk-soul-genre",
    component: FunkSoulGenreComponent,
    pathMatch: "full"
  },
  {
    path: "store/soundtrack-genre",
    component: SoundtrackGenreComponent,
    pathMatch: "full"
  },
  {
    path: "store/r&b-genre",
    component: RbGenreComponent,
    pathMatch: "full"
  },
  {
    path: "search/:searchKey",
    component: StoreComponent,
    pathMatch: "full"
  },
  {
    path: "cart-page",
    component: CartPageComponent,
    pathMatch: "full"
  },
  {
    path: "about-us",
    component: AboutUsComponent,
    pathMatch: "full"
  },
  {
    path: "contact",
    component: ContactComponent,
    pathMatch: "full"
  }


]
@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

//angular modules - routing
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter'
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';

import { RatingModule } from 'ng-starrating'


//angular components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { StoreComponent } from './components/store/store.component';
import { CdDetailsComponent } from './components/cd-details/cd-details.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { GenreFilteredStoreComponent } from './components/genre-filtered-store/genre-filtered-store.component';
import { PopGenreComponent } from './components/pop-genre/pop-genre.component';
import { RockGenreComponent } from './components/rock-genre/rock-genre.component';
import { JazzBluesGenreComponent } from './components/jazz-blues-genre/jazz-blues-genre.component';
import { HipHopRapGenreComponent } from './components/hip-hop-rap-genre/hip-hop-rap-genre.component';
import { DiscoGenreComponent } from './components/disco-genre/disco-genre.component';
import { ElectronicaGenreComponent } from './components/electronica-genre/electronica-genre.component';
import { FunkSoulGenreComponent } from './components/funk-soul-genre/funk-soul-genre.component';
import { SoundtrackGenreComponent } from './components/soundtrack-genre/soundtrack-genre.component';
import { RbGenreComponent } from './components/rb-genre/rb-genre.component';
import { SearchComponent } from './components/search/search.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactComponent } from './components/contact/contact.component';

// angular material modules
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { Cart } from './classes/cart';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    StoreComponent,
    CdDetailsComponent,
    RegistrationComponent,
    LogInComponent,
    GenreFilteredStoreComponent,
    PopGenreComponent,
    RockGenreComponent,
    JazzBluesGenreComponent,
    HipHopRapGenreComponent,
    DiscoGenreComponent,
    ElectronicaGenreComponent,
    FunkSoulGenreComponent,
    SoundtrackGenreComponent,
    RbGenreComponent,
    SearchComponent,
    CartPageComponent,
    FooterComponent,
    AboutUsComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatIconModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,
    RatingModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [Cart],
  bootstrap: [AppComponent]
})
export class AppModule { }

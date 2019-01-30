import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectComponent } from './project/project.component';
import { ContactComponent } from './contact/contact.component';

import { PorjserviceService } from './porjservice.service';
import { ProjectDetailsComponent } from './project/project-details/project-details.component';
import { BlogComponent } from './blog/blog.component';

//---------Roughter Configer-----

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: "",redirectTo:"home",pathMatch:"full"},
  { path: 'aboutus', component: AboutComponent },
  { path: 'projects', component: ProjectComponent },
  {  path: 'projects/:id', component: ProjectDetailsComponent },
  { path: 'contactus', component: ContactComponent },
  { path: 'blog', component: BlogComponent },
  { path: '**', component: HomeComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ProjectComponent,
    ContactComponent,
    ProjectDetailsComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PorjserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }




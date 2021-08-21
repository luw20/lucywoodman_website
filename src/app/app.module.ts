import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { FooterComponent } from './pages/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactComponent } from './pages/contact/contact.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalComponent } from 'src/app/modal/modal.component'; 
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { ModalServiceService } from './modal-service.service';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HamburgerMenuComponent } from 'src/app/hamburger-menu/hamburger-menu.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { PdfJsViewerModule } from 'ng2-pdfjs-viewer';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HomeComponent,
    ProjectsComponent,
    FooterComponent,
    ContactComponent,
    ExperienceComponent,
    ModalComponent,
    HamburgerMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    PdfJsViewerModule
  ],

  bootstrap: [AppComponent],
  entryComponents: [ModalComponent],
  providers: [{provide : MatDialogRef, useValue : {}}, ModalServiceService]
})
export class AppModule { }

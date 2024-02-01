import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IntroTextComponent } from './intro-text/intro-text.component';
import { SkillSetComponent } from './skill-set/skill-set.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ImprintComponent } from './imprint/imprint.component';
import { StartComponent } from './start/start.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { FirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getMessaging, provideMessaging } from '@angular/fire/messaging';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IntroTextComponent,
    SkillSetComponent,
    ProjectsComponent,
    ContactFormComponent,
    FooterComponent,
    ImprintComponent,
    StartComponent,
    HeaderMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp({"projectId":"portfolio-f3217","appId":"1:386058160291:web:fe298490bb7879928e9716","storageBucket":"portfolio-f3217.appspot.com","apiKey":"AIzaSyA9F3z8KGLztg20ytAKcVG00VzQeLyIWUI","authDomain":"portfolio-f3217.firebaseapp.com","messagingSenderId":"386058160291"})),
    provideMessaging(() => getMessaging())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

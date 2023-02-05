import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IntroTextComponent } from './intro-text/intro-text.component';
import { SkillSetComponent } from './skill-set/skill-set.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IntroTextComponent,
    SkillSetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

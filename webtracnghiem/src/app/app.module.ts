import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { ItemService } from './services/item.service';
import { AuthService } from './services/auth.service';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { QuizComponent } from './quiz/quiz.component';
import { ResultComponent } from './result/result.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SigninComponent,
    SignupComponent,
    ResetpasswordComponent,
    AboutComponent,
    ContactComponent,
    FeedbackComponent,
    QuizComponent,
    ResultComponent,
    HomeComponent,
    DashboardComponent,
    FooterComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase, 'webtracnghiem'),
    AngularFireDatabaseModule,
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', 	component: HomeComponent},
      { path: 'signin', 	component: SigninComponent},
      { path: 'signup', 	component: SignupComponent},
      { path: 'resetpassword', 	component: ResetpasswordComponent},
      { path: 'about', 	component: AboutComponent},
      { path: 'contact', 	component: ContactComponent},
      { path: 'feedback', 	component: FeedbackComponent},
      { path: 'quiz', 	component: QuizComponent},
      { path: 'result', 	component: ResultComponent},
      { path: 'home', 	component: HomeComponent},
      { path: 'dashboard', 	component: DashboardComponent},
      { path: '**', 	redirectTo: 'home', pathMatch: 'full' }
    ])
  ],
  providers: [ItemService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

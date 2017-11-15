import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './pages/test/test.component';

import { MaterializeModule } from 'angular2-materialize';
import { GreetPipe } from './shared/pipe/greet.pipe';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './pages/login/login.component';
import { PubliczoneComponent } from './pages/publiczone/publiczone.component';
import { PrivatezoneComponent } from './pages/privatezone/privatezone.component';
import { StudentComponent } from './pages/student/student.component';
import { StudentFormComponent } from './pages/student-form/student-form.component';
import { LoginService } from './shared/service/login.service';

import { HttpModule } from '@angular/http';
import { AdminGuard } from './shared/guard/admin.guard';
import { StudentService } from './shared/service/student.service';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { Db1Component } from './pages/db1/db1.component';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { Db2Component } from './pages/db2/db2.component';
import { AngularFireDatabaseModule } from 'angularfire2/database';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    GreetPipe,
    HomeComponent,
    LoginComponent,
    PubliczoneComponent,
    PrivatezoneComponent,
    StudentComponent,
    StudentFormComponent,
    Db1Component,
    Db2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterializeModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule
  ],
  providers: [LoginService, AdminGuard, StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './pages/test/test.component';

import { MaterializeModule } from 'angular2-materialize';
import { GreetPipe } from './shared/pipe/greet.pipe';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { PubliczoneComponent } from './pages/publiczone/publiczone.component';
import { PrivatezoneComponent } from './pages/privatezone/privatezone.component';
import { StudentComponent } from './pages/student/student.component';
import { StudentFormComponent } from './pages/student-form/student-form.component';
import { LoginService } from './shared/service/login.service';

import { HttpModule } from '@angular/http';
import { AdminGuard } from './shared/guard/admin.guard';
import { StudentService } from './shared/service/student.service';

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
    StudentFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterializeModule,
    FormsModule,
    HttpModule
  ],
  providers: [LoginService, AdminGuard, StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }

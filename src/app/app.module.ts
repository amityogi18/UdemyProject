import { DataTableServiceService } from './services/data-table-service.service';
import { PostService } from './services/post.service';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material';



import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { SummaryPipe } from './summary.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { PostComponent } from './post/post.component';
import { DataTableComponent } from './data-table/data-table.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    SummaryPipe,
    FavoriteComponent,
    PostComponent,
    DataTableComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MatTableModule
  ],
  providers: [DataTableServiceService, PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }

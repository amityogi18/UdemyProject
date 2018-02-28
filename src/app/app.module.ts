
import { DataTableServiceService } from './services/data-table-service.service';
import { PostService } from './services/post.service';

import { RouterModule } from '@angular/router';
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
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { GitHubFollowersComponent } from './git-hub-followers/git-hub-followers.component';
import { GitHubProfileComponent } from './git-hub-profile/git-hub-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    SummaryPipe,
    FavoriteComponent,
    PostComponent,
    DataTableComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    GitHubFollowersComponent,
    GitHubProfileComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MatTableModule,
    RouterModule.forRoot([
      { path: '',
        component: HomeComponent
      },
      { path: 'followers/:username',
        component: GitHubProfileComponent
      },
      { path: 'followers',
        component: GitHubFollowersComponent
      },
      { path: 'posts',
        component: PostComponent
      },
      { path: '**',
      component: NotFoundComponent
      }
    ])
  ],
  providers: [DataTableServiceService, PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }

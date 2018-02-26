import { BadInput } from './../common/bad-input';
import { AppError } from './../common/app-error';
import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';
import { NotFoundError } from '../common/not-found-error';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts: any[];

  constructor(private service: PostService) {

  }

  createPost(input: HTMLInputElement) {
    let post: any = { title: input.value };
    input.value = '';
    this.service.createPost(post)
      .subscribe(response => {
        post.id = response.json().id;
        this.posts.splice(0, 0, post);
        // post['id'] = response.json().id;
        console.log(response.json());
      }, (error: AppError) => {
        if (error instanceof BadInput) {}
        alert('An unexpected Error occured');
        console.log(error);
      });
  }

  updatePost(post) {
    this.service.updatePost(post)
      .subscribe(response => {
        console.log(response.json());
      }, error => {
        alert('An unexpected Error occured');
        console.log(error);
      });
  }

  deletePost(post) {
    this.service.deletePost(345)
      .subscribe(response => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);

      }, (error: AppError) => {
        if (error instanceof NotFoundError) {
          alert('This post is laready been deleted');
        } else {
          alert('An unexpected Error occured');
          console.log(error);
        }
      });
  }

  ngOnInit() {
    this.service.getPosts().subscribe(response => {
      this.posts = response.json();
    }, error => {
      alert('An unexpected Error occured');
      console.log(error);
    });
  }

}

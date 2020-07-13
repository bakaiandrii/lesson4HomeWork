import {Component} from '@angular/core';
import {PostService} from '../../services/post.service';
import {Post} from '../../models/Post';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent {

  posts: Post[];

  constructor(private postService: PostService) {
    this.postService.getAllPosts().subscribe(post => this.posts = post);
  }


}

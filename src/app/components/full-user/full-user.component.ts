import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../models/User';
import {PostService} from '../../services/post.service';
import {Post} from '../../models/Post';
import {CommentService} from '../../services/comment.service';

@Component({
  selector: 'app-full-user',
  templateUrl: './full-user.component.html',
  styleUrls: ['./full-user.component.css']
})
export class FullUserComponent {
  user: User;
  posts: Post[];


  constructor(private  activatedRoute: ActivatedRoute,
              private router: Router,
              private postService: PostService) {
    // console.log(this.router.getCurrentNavigation().extras.state.user);
    this.activatedRoute.params.subscribe(value => {
      this.user = history.state.user;
      this.postService.getPostOfUser(this.user.id).subscribe(allPost => {
        this.posts = allPost;
      });
    });
  }


}

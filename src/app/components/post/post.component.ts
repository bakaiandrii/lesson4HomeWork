import {Component, Input} from '@angular/core';
import {Post} from '../../models/Post';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  @Input()
  post: Post;

  constructor(private  router: Router,
              private  route: ActivatedRoute) {
  }


  navigateToCmment(postId): void {
    this.router.navigate([postId, 'comments'], {relativeTo: this.route});
  }
}

import {Component} from '@angular/core';
import {Comment} from '../../models/Comment';
import {ActivatedRoute, Router} from '@angular/router';
import {CommentService} from '../../services/comment.service';



@Component({
  selector: 'app-all-comments',
  templateUrl: './all-comments.component.html',
  styleUrls: ['./all-comments.component.css']
})
export class AllCommentsComponent {

  comments: Comment[];


  constructor(private  activatedRoute: ActivatedRoute,
              private commentService: CommentService) {
    this.activatedRoute.params.subscribe(value => {
      this.commentService.getCommentOfSingleUser(value.id).subscribe(comment1 => this.comments = comment1);
    });
  }


}




import {Component} from '@angular/core';
import {Comment} from '../../models/Comment';
import {CommentService} from '../../services/comment.service';

@Component({
  selector: 'app-all-comment',
  templateUrl: './all-comment.component.html',
  styleUrls: ['./all-comment.component.css']
})
export class AllCommentComponent  {

  comments: Comment[];

  constructor(private commentService: CommentService) {
    this.commentService.getAllComments().subscribe(comment => this.comments = comment);
  }

}

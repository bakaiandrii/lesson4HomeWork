import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './components/app/app.component';
import {HttpClientModule} from '@angular/common/http';
import {UserComponent} from './components/user/user.component';
import {RouterModule} from '@angular/router';
import {FullUserComponent} from './components/full-user/full-user.component';
import {PostComponent} from './components/post/post.component';
import {AllUsersComponent} from './components/all-users/all-users.component';
import {LeavePageService} from './services/leave-page.service';
import {PrefetchUserService} from './services/prefetch-user.service';
import {AllCommentsComponent} from './components/all-post-comments/all-comments.component';
import {CommentComponent} from './components/comment/comment.component';
import {AllPostsComponent} from './components/all-posts/all-posts.component';
import {PrefetchPostService} from './services/prefetch-post.service';
import { AllCommentComponent } from './components/all-comment/all-comment.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    FullUserComponent,
    PostComponent,
    AllUsersComponent,
    AllCommentsComponent,
    CommentComponent,
    AllPostsComponent,
    AllCommentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'users',
        component: AllUsersComponent,
        canActivate: [LeavePageService],      // називається guardy
        resolve: {xxx: PrefetchUserService},   // називається resolvy
        children: [
          {
            path: 'user/:id/post',
            component: FullUserComponent,
            children: [
              {
                path: ':id/comments',
                component: AllCommentsComponent,
              },
            ]
          }
        ]
      },
      {
        path: 'posts',
        component: AllPostsComponent,
        canActivate: [LeavePageService],
        resolve: {allPosts: PrefetchPostService},
        children: [
          {
            path: ':id/comments',
            component: AllCommentsComponent,
          },
        ],
      },
      {
        path: 'comments',
        component: AllCommentComponent,
        canActivate: [LeavePageService],
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

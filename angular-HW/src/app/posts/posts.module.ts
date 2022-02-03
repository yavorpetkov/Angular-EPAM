import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';
import { PostsComponent } from './posts/posts.component';
// import { PostsService } from './posts.service';

@NgModule({
  declarations: [EditComponent, ViewComponent, PostsComponent],
  imports: [CommonModule, PostsRoutingModule],
  // providers: [PostsService],
})
export class PostsModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostInteractComponent } from './postInteract/postInteract.component';
import { PostsComponent } from './posts/posts.component';

const postsRoutes: Routes = [
  { path: '', component: PostsComponent },
  { path: 'view/:id', component: PostInteractComponent },
  { path: 'add', component: PostInteractComponent },
  { path: 'edit/:id', component: PostInteractComponent },
];

@NgModule({
  imports: [RouterModule.forChild(postsRoutes)],
  exports: [RouterModule],
})
export class PostsRoutingModule {}

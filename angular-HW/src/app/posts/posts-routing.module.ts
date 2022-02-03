import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { PostsComponent } from './posts/posts.component';
import { ViewComponent } from './view/view.component';

const postsRoutes: Routes = [
  { path: '', component: PostsComponent },
  { path: 'view', component: ViewComponent },
  { path: 'edit', component: EditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(postsRoutes)],
  exports: [RouterModule],
})
export class PostsRoutingModule {}

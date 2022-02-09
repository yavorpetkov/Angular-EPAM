import { Injectable } from '@angular/core';
import { BehaviorSubject, take } from 'rxjs';
import { PostItemModel } from './posts/models/postItem';
import { PostsService } from './posts/posts.service';

@Injectable({
  providedIn: 'root',
})
export class DataStoreService {
  private _posts$ = new BehaviorSubject<PostItemModel[]>([]);
  public readonly posts$ = this._posts$.asObservable();
  constructor(private postsService: PostsService) {
    this.initializePosts();
  }

  private initializePosts(): void {
    this.postsService
      .getPosts()
      .pipe(take(1))
      .subscribe((posts) => {
        this._posts$.next(posts);
      });
  }
  public generateId(): number {
    return (
      Math.max.apply(
        Math,
        this._posts$.value.map(function (post) {
          return post.id;
        })
      ) + 1
    );
  }
  public getPostById(id: number): PostItemModel {
    const index = this._posts$.value.findIndex((post) => post.id === id);
    return this._posts$.value[index];
  }

  public addPost(post: PostItemModel): void {
    this._posts$.next([...this._posts$.value, post]);
  }

  public deletePost(id: number): void {
    const newPosts = this._posts$.value.filter((post) => post.id !== id);
    this._posts$.next(newPosts);
  }

  public updatePost(post: PostItemModel): void {
    const index = this._posts$.value.findIndex((i) => i.id === post.id);
    this._posts$.value[index] = post;
  }
}

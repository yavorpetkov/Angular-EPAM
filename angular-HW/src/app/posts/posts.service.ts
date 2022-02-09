import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostItemModel } from './models/postItem';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  public posts: PostItemModel[] = [];
  public url: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  public getPosts(): Observable<PostItemModel[]> {
    return this.http.get<PostItemModel[]>(this.url);
  }
  public getPostsById(id: number): Observable<PostItemModel> {
    return this.http.get<PostItemModel>(`${this.url}/${id}`);
  }
  public addPost(post: PostItemModel): Observable<PostItemModel> {
    return this.http.post<PostItemModel>(this.url, post);
  }
  public updatePostById(post: PostItemModel): Observable<PostItemModel[]> {
    return this.http.put<PostItemModel[]>(`${this.url}/${post.id}`, post);
  }
  public deletePostById(id: number): Observable<{}> {
    return this.http.delete(`${this.url}/${id}`);
  }
}

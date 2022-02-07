import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TodoItemModel } from './models/todoItem';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient) {}

  getPosts(): Observable<TodoItemModel[]> {
    return this.http.get<TodoItemModel[]>(
      'https://jsonplaceholder.typicode.com/todos'
    );
  }
  getPostById(id: number) {
    return this.http.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
  }
  updatePostById() {}
}

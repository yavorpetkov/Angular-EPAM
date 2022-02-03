import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient) {}

  getPosts() {
    this.http.get('https://jsonplaceholder.typicode.com/todos/');
  }
  getPostById(id: number) {
    this.http.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
  }
  updatePostById() {}

  test() {
    return '123';
  }
}

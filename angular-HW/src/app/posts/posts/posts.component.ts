import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  public abv: string = 'abv';
  constructor(private PostsService: PostsService) {}

  ngOnInit(): void {
    this.abv = this.PostsService.test();
  }
}

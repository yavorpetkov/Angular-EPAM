import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';
import { PostsService } from '../posts.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

import { TodoItemModel } from '../models/todoItem';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements AfterViewInit, OnInit {
  public displayedColumns: string[] = [
    'id',
    'title',
    'userId',
    'completed',
    'actions',
  ];
  public posts$ = this.postsService.getPosts();
  public dataSource: MatTableDataSource<TodoItemModel>;

  constructor(private postsService: PostsService) {}

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.posts$.subscribe((response) => {
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  ngAfterViewInit() {}
}

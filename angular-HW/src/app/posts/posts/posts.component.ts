import {
  Component,
  OnInit,
  ViewChild,
  OnDestroy,
  AfterViewInit,
  ChangeDetectorRef,
} from '@angular/core';

import { DataStoreService } from 'src/app/data-store.service';

import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

import { PostItemModel } from '../models/postItem';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit, AfterViewInit, OnDestroy {
  public data: PostItemModel[];
  public displayedColumns: string[] = [
    'id',
    'title',
    'userId',
    'body',
    'actions',
  ];
  public dataSource: MatTableDataSource<PostItemModel>;
  private destroy$ = new Subject();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private dataStoreService: DataStoreService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource();
  }
  ngAfterViewInit() {
    this.dataStoreService.posts$
      .pipe(takeUntil(this.destroy$))
      .subscribe((posts) => {
        this.dataSource.data = posts;
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      });
    this.cd.detectChanges();
  }
  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  delete(id: number): void {
    if (window.confirm('Are you sure to delete this item')) {
      this.dataStoreService.deletePost(id);
    }
  }
}

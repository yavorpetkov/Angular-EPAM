import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { DataStoreService } from 'src/app/data-store.service';
import { PostsService } from '../posts.service';

import { PostItemModel } from '../models/postItem';

@Component({
  selector: 'app-post-interact',
  templateUrl: './postInteract.component.html',
  styleUrls: ['./postInteract.component.scss'],
})
export class PostInteractComponent implements OnInit {
  public data: PostItemModel = { id: 0, userId: 0, body: '', title: '' };
  public currentPage: string;
  public formData: FormGroup;
  floatLabelControl = new FormControl('always');

  constructor(
    private postsService: PostsService,
    private dataStoreService: DataStoreService,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.formData = this.fb.group({
      userId: ['', [Validators.required]],
      title: ['', [Validators.required]],
      body: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.currentPage = this.activatedRoute.snapshot.url[0].path;
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));

    this.setFormValues(id);
  }

  private setFormValues(id: number): void {
    if (this.currentPage !== 'add') {
      this.data = this.dataStoreService.getPostById(id);
      this.formData.controls['title'].setValue(this.data.title);
      this.formData.controls['body'].setValue(this.data.body);
      this.formData.controls['userId'].setValue(this.data.userId);
    } else if (this.currentPage === 'add') {
      this.data.id = this.dataStoreService.generateId();
    }
    if (this.currentPage === 'view') {
      this.formData.controls['title'].disable();
      this.formData.controls['body'].disable();
      this.formData.controls['userId'].disable();
    }
  }

  private addPost(): void {
    this.dataStoreService.addPost({ ...this.data, ...this.formData.value });
    this.postsService.addPost({ ...this.data, ...this.formData.value });
    this.goBack();
  }
  private updatePost(): void {
    this.dataStoreService.updatePost({ ...this.data, ...this.formData.value });
    this.postsService.updatePostById({ ...this.data, ...this.formData.value });
    this.goBack();
  }

  public onSubmit(): void | boolean {
    if (!this.formData.valid) return confirm('You need to fill out the form');

    if (this.currentPage === 'add') {
      this.addPost();
    } else if (this.currentPage === 'edit') {
      this.updatePost();
    }
  }

  public goBack(): void {
    this.router.navigateByUrl('/posts');
  }
}

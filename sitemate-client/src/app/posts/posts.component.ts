import { Component, OnInit } from '@angular/core';
import { Post } from '../services/model/post'; 
import { PostsService } from '../services/posts.service'; 

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [], 
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];

  constructor(private postsService: PostsService) {}

  ngOnInit() {
    this.getPosts();
  }

  getPosts(): void {
    this.postsService.getPosts().subscribe((posts) => (this.posts = posts));
  }

  add(title: string, content: string): void {
    title = title.trim();
    content = content.trim();
    if (!title || !content) { return; }
    this.postsService.addPost({ title, content } as Post)
      .subscribe(post => {
        this.posts.push(post);
      });
  }

  delete(post: Post): void {
    this.posts = this.posts.filter(p => p !== post);
    this.postsService.deletePost(post).subscribe();
  }
}

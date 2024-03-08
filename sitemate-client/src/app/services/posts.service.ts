import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  // URL to rails app
  
  private postsUrl = 'http://localhost:3000/posts'; 
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  /** GET posts from the server */
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl);
  }

  /** GET post by id. Will 404 if id not found */
  getPost(id: number): Observable<Post> {
    const url = `${this.postsUrl}/${id}`;
    return this.http.get<Post>(url);
  }

  /** POST: add a new post to the server */
  addPost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.postsUrl, post, this.httpOptions);
  }

  /** DELETE: delete the post from the server */
  deletePost(post: Post | number): Observable<Post> {
    const id = typeof post === 'number' ? post : post.id;
    const url = `${this.postsUrl}/${id}`;

    return this.http.delete<Post>(url, this.httpOptions);
  }

  /** PUT: update the post on the server */
  updatePost(post: Post): Observable<any> {
    return this.http.put(this.postsUrl, post, this.httpOptions);
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostModel } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  BASE_URL='https://jsonplaceholder.typicode.com/'
  constructor(private httpClient:HttpClient) { }
  public getPostList() {
    return this.httpClient.get<PostModel[]>(this.BASE_URL+'posts')
  }
  public addPost(post: PostModel) {
    const headers = new HttpHeaders()
    return this.httpClient.post(this.BASE_URL+'posts', post, {headers})
  }

}

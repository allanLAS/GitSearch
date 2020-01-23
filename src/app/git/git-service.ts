import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class GitService {
    private username: string;
  private apiUrl: string = "https://api.github.com/users/";
  private apiKey: string = environment.Git_Secret;

  //Git profiles
  gitProfile() {
    return this.http.get(this.apiUrl + this.username + "?access_token=" + this.apiKey)
  }

  //Git Repos
  gitRepos() {
    return this.http.get(this.apiUrl + this.username + "/repos" + "?access_token=" + this.apiKey)
  }

  constructor(private http: HttpClient) {
    console.log("GitService Ready");
    this.username = "allanLAS"
  }

  updateUser(username: string) {
    this.username = username;
    }
}
    

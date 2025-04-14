import { Component } from '@angular/core';
import { GithubService } from './github.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-api-github',
  imports: [NgIf, NgFor],
  templateUrl: './api-github.component.html',
  styleUrl: './api-github.component.css'
})
export class ApiGithubComponent {
  public repositories: string[] | undefined = undefined;

  constructor(private service: GithubService) { }

  isEmpty(): boolean {
    if (this.repositories !== undefined) {
      return this.repositories.length === 0;
    }
    return false;
  }
  search(user: string) {
    this.repositories = undefined;
    this.service.getRepositories(user).subscribe(
     { next: repositories => this.repositories = repositories,
      error: error => alert(error)}
    );
  }
}

import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, tap } from "rxjs";

@Injectable({
    providedIn: 'root' // 👈 Esto lo hace disponible globalmente
})
export class GithubService {
    constructor(private http: HttpClient) { }
    getRepositories(user: string): Observable<string[]> {
        const url = `https://api.github.com/users/${user}/repos`;
        return this.http.get<any>(url, { observe: 'response' })
            .pipe(
                map(response => response.body.map((data: { name: string; }) => data.name)),
                catchError(error => { 
                    console.log(error);
                    throw new Error(`Server error. ${error.error.status} ${error.error.message}`) })
            );
    }
}
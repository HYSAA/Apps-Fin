import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Import the necessary operator
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost/USJR-app-appsdev'; // Replace with your backend URL

  constructor(private http: HttpClient) { }

  createUser(userData: any): Observable<string> {
    return this.http.post(`${this.apiUrl}/create.php`, userData, { responseType: 'text' });
  }

  getUsers(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/read.php`);
  }

  updateUser(userData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/update.php`, userData);
  }

  deleteUser(userId: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/delete.php`, { id: userId });
  }

  saveStud(studData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/savestudent.php`, studData, { responseType: 'text' });
  }
}

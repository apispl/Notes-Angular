import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from '../note';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  private baseUrl = 'http://localhost:8080/notes';

  constructor(private http: HttpClient) { }

  public getNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(this.baseUrl);
  }

}

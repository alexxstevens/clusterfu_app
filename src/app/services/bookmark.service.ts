import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Bookmark } from './../models/Bookmark';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class BookmarkService {
  bookmarksUrl: string = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  getBookmarks(): Observable<Bookmark[]> {
    return this.http.get<Bookmark[]>(this.bookmarksUrl);
  }

  saveBookmark(bookmark: Bookmark): Observable<Bookmark> {
    return this.http.post<Bookmark>(this.bookmarksUrl, bookmark, httpOptions);
  }

  updateBookmark(bookmark: Bookmark): Observable<Bookmark> {
    const url = `${this.bookmarksUrl}/${bookmark.id}`;
    return this.http.put<Bookmark>(url, bookmark, httpOptions);
  }

  getBookmark(id: number): Observable<Bookmark> {
    const url = `${this.bookmarksUrl}/${id}`;
    return this.http.get<Bookmark>(url);
  }
}

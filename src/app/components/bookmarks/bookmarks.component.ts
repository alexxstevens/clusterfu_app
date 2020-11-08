import { Component, OnInit } from '@angular/core';
import { Bookmark } from '../../models/Bookmark';
import { BookmarkService } from './../../services/bookmark.service';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss'],
})
export class BookmarksComponent implements OnInit {
  bookmarks: Bookmark[];
  currentBookmark: Bookmark = {
    id: 0,
    title: '',
    body: '',
  };
  isEdit: boolean = false;

  constructor(private _bookmarkService: BookmarkService) {}

  ngOnInit(): void {
    this._bookmarkService.getBookmarks().subscribe((bookmarks) => {
      this.bookmarks = bookmarks;
    });
  }

  onNewBookmark(bookmark: Bookmark) {
    this.bookmarks.unshift(bookmark);
  }

  editBookmark(bookmark: Bookmark) {
    this.currentBookmark = bookmark;
    this.isEdit = true;
  }

  onUpdatedBookmark(bookmark: Bookmark) {
    console.log('onupdatedbookmark');
    this.bookmarks.forEach((cur, index) => {
      if (bookmark.id === cur.id) {
        this.bookmarks.splice(index, 1);
        this.bookmarks.unshift(bookmark);
        this.isEdit = false;
        console.log('on update');
        this.currentBookmark = {
          id: 0,
          title: '',
          body: '',
        };
      }
    });
  }
}

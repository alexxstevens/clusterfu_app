import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { BookmarkService } from 'src/app/services/bookmark.service';
import { Bookmark } from '../../models/Bookmark';

@Component({
  selector: 'app-bookmark-form',
  templateUrl: './bookmark-form.component.html',
  styleUrls: ['./bookmark-form.component.scss'],
})
export class BookmarkFormComponent implements OnInit {
  @Output() newBookmark: EventEmitter<Bookmark> = new EventEmitter();
  @Output() updatedBookmark: EventEmitter<Bookmark> = new EventEmitter();
  @Input() currentBookmark: Bookmark;
  @Input() isEdit: boolean;

  constructor(private _bookmarkService: BookmarkService) {}

  ngOnInit(): void {}

  addBookmark(title, body) {
    if (!title || !body) {
      alert('Please Add all fields bishhh');
    } else {
      this._bookmarkService
        .saveBookmark({ title, body } as Bookmark)
        .subscribe((bookmark) => {
          this.newBookmark.emit(bookmark);
        });
    }
  }

  updateBookmark() {
    console.log('update started');
    this._bookmarkService
      .updateBookmark(this.currentBookmark)
      .subscribe((bookmark) => {
        console.log(bookmark);
        this.isEdit = false;
        this.updatedBookmark.emit(bookmark);
      });
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { BookmarkService } from '../../services/bookmark.service';
import { Bookmark } from '../../models/Bookmark';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.scss'],
})
export class BookmarkComponent implements OnInit {
  bookmark: Bookmark;
  constructor(
    private _route: ActivatedRoute,
    private _bookmarkService: BookmarkService,
    private _location: Location
  ) {}

  ngOnInit(): void {
    const id = +this._route.snapshot.paramMap.get('id');
    this._bookmarkService
      .getBookmark(id)
      .subscribe((bookmark) => (this.bookmark = bookmark));
  }
}

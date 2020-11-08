import { BookmarkService } from './services/bookmark.service';
import { UserService } from './services/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

import { fromEventPattern } from 'rxjs';
import { BookmarksComponent } from './components/bookmarks/bookmarks.component';
import { BookmarkFormComponent } from './components/bookmark-form/bookmark-form.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { BookmarkComponent } from './components/bookmark/bookmark.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HelpComponent } from './components/help/help.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    NavbarComponent,
    FooterComponent,
    BookmarksComponent,
    BookmarkFormComponent,
    HomeComponent,
    BookmarkComponent,
    NotFoundComponent,
    HelpComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  providers: [UserService, BookmarkService],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NewPostComponent } from './newpost.component';

@NgModule({
  imports: [BrowserModule, NgbModule],
  declarations: [NewPostComponent],
  exports: [NewPostComponent],
  bootstrap: [NewPostComponent]
})
export class NgbdModalBasicModule {}

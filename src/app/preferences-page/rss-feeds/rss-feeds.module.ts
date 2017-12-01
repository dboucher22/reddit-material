import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../../material.module';
import { RssFeedsComponent } from './rss-feeds.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MaterialModule,
        RouterModule
    ],
    declarations: [RssFeedsComponent]
})
export class PrefsRssFeedsModule { }

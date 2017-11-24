import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { HomePageComponent } from './home-page.component';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule
    ],
    exports: [
        HomePageComponent
    ],
    declarations: [HomePageComponent]
})
export class HomePageModule { }

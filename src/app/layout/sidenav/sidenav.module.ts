import { NgModule } from '@angular/core';
import { SidenavComponent } from './sidenav.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material.module';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule
    ],
    exports: [
        SidenavComponent
    ],
    declarations: [SidenavComponent]
})
export class SidenavModule { }

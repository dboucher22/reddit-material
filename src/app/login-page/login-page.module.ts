import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from '../material.module';
import { LoginPageComponent } from './login-page.component';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule
    ],
    exports: [
        LoginPageComponent
    ],
    declarations: [LoginPageComponent]
})
export class LoginPageModule { }

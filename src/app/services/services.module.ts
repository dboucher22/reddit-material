import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { CommunitiesService } from './communities.service';

@NgModule({
    imports: [
        HttpClientModule
    ],
    providers: [
        CommunitiesService
    ]
})
export class ServicesModule { }

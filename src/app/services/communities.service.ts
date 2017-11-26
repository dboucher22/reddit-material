import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

interface ICommunitiesService {
    getAll(): Observable<any>;
}

@Injectable()
export class CommunitiesService implements ICommunitiesService {
    constructor(private httpClient: HttpClient) { }

    public getAll(): Observable<any> {
        return this.httpClient.get('http://localhost:5000/api/communities', {});
    }
}

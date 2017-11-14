import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class StudentService {

  constructor(private http: Http) {}

  search(searhStr: string): Observable<any> {
    const dataUrl = `http://test.pnpsw.com/api/v1/ms0401/filter?studentName=${searhStr}&limit=10&offset=0`;
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'JWT ' + window.localStorage.getItem('token')
    });

    const options = new RequestOptions({ headers: headers });

    return this.http
      .get(dataUrl, options)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw('Server error'));
  }
}

import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class LoginService {
  dataUrl = 'http://test.pnpsw.com/api/v1/login/doLoginStudent';

  constructor(private http: Http) {}

  doLogin(body): Observable<any> {

    return this.http
      .post(this.dataUrl, body)
      .map((res: Response) => res.json())
      .catch((error: any) =>
        Observable.throw('Server error')
      );

  }
}

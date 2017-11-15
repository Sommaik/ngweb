import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { environment } from '../../../environments/environment';
import { Student } from '../model/student';

@Injectable()
export class StudentService {
  options;

  constructor(private http: Http) {
    const headers = new Headers({
      'Content-Type': 'application/json',
      Authorization: 'JWT ' + window.localStorage.getItem('token')
    });

    this.options = new RequestOptions({ headers: headers });
  }

  search(searhStr: string): Observable<any> {
    const dataUrl = `${environment.hostUrl}/api/v1/ms0401/filter?studentName=${searhStr}&limit=10&offset=0`;

    return this.http
      .get(dataUrl, this.options)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw('Server error'));
  }

  delete(id): Observable<any> {
    const dataUrl = `${environment.hostUrl}/api/v1/ms0401/${id}`;
    return this.http
      .delete(dataUrl, this.options)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw('Server error'));
  }

  pagination(url): Observable<any> {
    const dataUrl = `${environment.hostUrl}${url}`;

    return this.http
      .get(dataUrl, this.options)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw('Server error'));
  }

  add(student: Student): Observable<any> {
    const dataUrl = `${environment.hostUrl}/api/v1/ms0402/createStudent`;

    return this.http
      .post(dataUrl, student, this.options)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw('Server error'));
  }

  readStudent(id): Observable<any> {
    const dataUrl = `${environment.hostUrl}/api/v1/ms0402/readStudent/${id}`;

    return this.http
      .get(dataUrl, this.options)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw('Server error'));
  }

  update(student: Student): Observable<any> {
    const dataUrl = `${environment.hostUrl}/api/v1/ms0402/updateStudent`;

    return this.http
      .put(dataUrl, student, this.options)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw('Server error'));
  }
}

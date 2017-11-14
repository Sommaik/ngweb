import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { StudentService } from '../../shared/service/student.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class StudentComponent implements OnInit {

  students: Observable<any>;
  studentData = [];
  searchText = '';

  constructor(
    private studentService: StudentService
  ) { }

  ngOnInit() {
  }

  onSearch() {
    this.students = this.studentService.search(this.searchText);

    this.studentService.search(this.searchText).subscribe( (resp) => {
      this.studentData = resp.items;
    });
  }

}

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { StudentService } from '../../shared/service/student.service';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

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
    private studentService: StudentService,
    private router: Router
  ) { }

  ngOnInit() {
    this.onSearch();
  }

  onSearch() {
    this.students = this.studentService.search(this.searchText);

    // this.studentService.search(this.searchText).subscribe( (resp) => {
    //   this.studentData = resp.items;
    // });
  }

  onDelete(id) {
    this.studentService.delete(id).subscribe( (resp) => {
      Materialize.toast('Remove Complete', 4000);
      this.onSearch();
    });
  }

  onPagination(url) {
    this.students = this.studentService.pagination(url);
  }

  onEdit(id) {
    this.router.navigate(['admin', 'student-form', id]);
  }

}

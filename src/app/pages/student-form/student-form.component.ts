import { Component, OnInit, ViewEncapsulation, AfterViewChecked } from '@angular/core';
import { Student } from '../../shared/model/student';
import { StudentService } from '../../shared/service/student.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class StudentFormComponent implements OnInit, AfterViewChecked {

  student: Student = new Student();
  mode = 'ADD';
  _id = '0';

  constructor(
    private studentService: StudentService,
    private activeRouter: ActivatedRoute,
    private router: Router
  ) {
    this.activeRouter.params.subscribe((param) => {
      this._id = param.id;
      if (param.id !== '0') {
        this.mode = 'UPDATE';
        this.studentService.readStudent(param.id).subscribe( (resp) => {
          this.student = resp[0];
        });
      }
    });
  }

  ngAfterViewChecked() {
    try {
      Materialize.updateTextFields();
    }catch (e) {}
  }

  ngOnInit() {
  }

  onSave() {
    this.studentService.add(this.student).subscribe((resp) => {
      Materialize.toast('Save Complete', 4000);
    });
  }

  onUpdate() {
    this.studentService.update(this.student).subscribe((resp) => {
      Materialize.toast('Update Complete', 4000);
    });
  }

  onBack() {
    this.router.navigate(['admin', 'student']);
  }

}

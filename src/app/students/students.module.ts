import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './students/students.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentDetailsComponent } from './student-details/student-details.component';



@NgModule({
  declarations: [StudentsComponent, StudentAddComponent, StudentEditComponent, StudentDetailsComponent],
  imports: [
    CommonModule
  ]
})
export class StudentsModule { }

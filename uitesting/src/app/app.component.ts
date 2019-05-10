import { Component, ViewChild, group } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('id') id;
  @ViewChild('name') name;
  @ViewChild('group') group;
  @ViewChild('email') email;
  @ViewChild('tutor') tutor;
  students = [{
    id: 1,
    name: 'John',
    group: 913,
    email: 'john@gmail.com',
    indrumator: 'johnatan'
  }];

  constructor(private dataService: DataService) {

  }

  addStudent() {
    const id = this.id.nativeElement.value;
    const name = this.name.nativeElement.value;
    const groupval = this.group.nativeElement.value;
    const emailval = this.email.nativeElement.value;
    const tutor = this.tutor.nativeElement.value;
    const student = {
      id: id,
      name: name,
      group: groupval,
      email: emailval,
      indrumator: tutor
    };
    this.dataService.addStudent(student);
  }

  getStudent() {
    this.dataService.getStudents();
  }
}

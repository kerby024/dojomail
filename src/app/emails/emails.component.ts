import { Component, OnInit } from '@angular/core';
import { Email } from './../email';
@Component({
  selector: 'app-emails',
  templateUrl: './emails.component.html',
  styleUrls: ['./emails.component.css']
})
export class EmailsComponent implements OnInit {
  emails: Array<object>;
  constructor() {
    this.emails = []
    this.emails.push(new Email('Your dog is dead', false, 'yourwife@gmail.com', 'That\'s it. He\'s dead. What do you want for dinner?'))
    this.emails.push(new Email('Your dog is alive', true, 'yourotherwife@gmail.com', 'He\'s alive. What do you want for dessert?'))
   }

  ngOnInit() {
    console.log('hey')
  }

}

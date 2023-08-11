import { Component, Input, OnInit } from '@angular/core';
import { IContactData } from 'src/app/interfaces/contact.interface';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {
  @Input() contactData!: IContactData;
  constructor() {}
  ngOnInit(): void {}
}

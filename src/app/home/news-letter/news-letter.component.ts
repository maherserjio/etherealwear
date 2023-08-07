import { Component, Input, OnInit } from '@angular/core';
import { INewsLetter } from 'src/app/interfaces/news-letter.interface';

@Component({
  selector: 'app-news-letter',
  templateUrl: './news-letter.component.html',
  styleUrls: ['./news-letter.component.scss'],
})
export class NewsLetterComponent implements OnInit {
  @Input() newsLetterData!: INewsLetter;
  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';
import { LogService } from 'projects/shared/src/public-api';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  constructor(private logService: LogService) {}

  ngOnInit(): void {
    this.logService.log();
  }
}

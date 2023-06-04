import { Component, OnInit } from '@angular/core';
import { ResetServiceContract } from '../../contracts';

@Component({
  selector: 'lib-resumo-page',
  templateUrl: './resumo-page.component.html',
  styleUrls: ['./resumo-page.component.css'],
})
export class ResumoPageComponent implements OnInit {
  constructor(public resetService: ResetServiceContract) {}

  ngOnInit(): void {
    this.resetService.reset();
  }
}

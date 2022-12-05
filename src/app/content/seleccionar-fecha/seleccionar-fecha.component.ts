import { Component, OnInit } from '@angular/core';
import { NgbAlertModule, NgbDatepickerModule, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';


@Component({
  selector: 'app-seleccionar-fecha',
  standalone: true,
  templateUrl: './seleccionar-fecha.component.html',
  imports: [NgbDatepickerModule, NgbAlertModule, FormsModule, JsonPipe],
})

export class SeleccionarFechaComponent implements OnInit {

  model: NgbDateStruct;

  constructor() {
  }

  ngOnInit(): void {
  }

}

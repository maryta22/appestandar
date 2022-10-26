import { Component, OnInit } from '@angular/core';
import { ContentService } from '../services/content.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit {
  active : string;

  constructor(private contentService: ContentService) {
    this.active = 'client';
  }

  ngOnInit(): void {
  }

  actualizarEstado(){
    this.contentService.modifyTable(this.active);
  }
}

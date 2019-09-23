
import { Component, OnInit, Output, EventEmitter, OnChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-well-list',
  templateUrl: './well-list.component.html',
  styleUrls: ['./well-list.component.scss']
})
export class WellListComponent implements OnInit, OnChanges {
  currentSourceKey: any;
  displayedColumns: string[] = ['name', 'type', 'sourceKey'];
  dataSource:MatTableDataSource<any>;
  wellList = [];

  constructor() {}

  ngOnInit() {
  }

  ngOnChanges() {

  }

  addWell(event) {
    this.wellList.push(event);
    this.dataSource = new MatTableDataSource(this.wellList);
  }

  emitSourceKey() {

  }
}
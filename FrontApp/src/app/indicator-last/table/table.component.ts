import { Component, OnInit, ViewChild,AfterViewInit } from '@angular/core';

import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { IndicatorLastService } from '../indicator-last.service';
import { indicatorLast } from '../indicatorLast';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit , AfterViewInit {

  indicadores: Array<indicatorLast> = [];
  constructor(private indicatorLastService : IndicatorLastService) { }
  ngAfterViewInit()
  {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit() {

    this.indicatorLastService.getindicatorLast().subscribe((indicador:[])=>{
    this.indicadores = Object.values(indicador).reduce( (acc,cur) => [...acc, cur] , [])
    this.dataSource.data = this.indicadores;
  });
  }

  displayedColumns: string[] = ['key', 'name', 'unit', 'date','value'];
  dataSource = new MatTableDataSource();
  
  @ViewChild (MatPaginator ,{static:true})paginator:MatPaginator;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    console.log(this.dataSource);
  }
}

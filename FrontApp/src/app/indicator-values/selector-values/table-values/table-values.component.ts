import { Component, OnInit, ViewChild, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { SelectValuesService } from '../../select-values.service';

@Component({
  selector: 'app-table-values',
  templateUrl: './table-values.component.html',
  styleUrls: ['./table-values.component.css']
})
export class TableValuesComponent implements OnInit, OnChanges {

  @ViewChild (MatPaginator ,{static:true}) paginator:MatPaginator;
  @Input() recarga:string;
  datasource;
  displayedColumns: string[] = ['date','value'];
  dataSource = new MatTableDataSource();
  totalItems:number;
  
  constructor(private selectValuesService : SelectValuesService) { }

  ngOnInit() 
  {
    this.tableDataLoad();  
  }
  
  ngOnChanges(changes: SimpleChanges){
    if(changes.recarga && !changes.recarga.isFirstChange()){
      this.tableDataLoad(changes.recarga.currentValue);
    }
  }
  tableDataLoad(filtro = 'cobre')
  {
    this.selectValuesService.getUrlselect(filtro).subscribe((valuesindicator:any)=>{
      const values = valuesindicator.values;
      let indicadores = Object.keys(values).reduce((acc,key) => [ ...acc,{ date: key, value: values[key] } ], []);
      this.dataSource = new MatTableDataSource<{ date: number, value: number}>(indicadores);
      this.dataSource.paginator = this.paginator;
      this.totalItems = indicadores.length;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    // this.dataSource.filter = filterValue.trim().toLowerCase();
    // console.log(this.dataSource);
     
  }
  

}

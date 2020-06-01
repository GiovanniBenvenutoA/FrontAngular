import { Component, OnInit } from '@angular/core';
import { indicatorLast } from 'src/app/indicator-last/indicatorLast';
import { IndicatorLastService } from 'src/app/indicator-last/indicator-last.service';
import { SelectValuesService } from 'src/app/indicator-values/select-values.service';

@Component({
  selector: 'app-selector-date',
  templateUrl: './selector-date.component.html',
  styleUrls: ['./selector-date.component.css']
})
export class SelectorDateComponent implements OnInit {

  indicador : String;
  
  flagRecarga = '';
  indicadores: Array<indicatorLast> = [];
  constructor(private indicatorLastService : IndicatorLastService,protected selectValuesService : SelectValuesService) { }

  ngOnInit() {
    this.getData(this.indicador);
  }

  getData(indicador)
  {
    this.indicatorLastService.getindicatorLast().subscribe((indicador:[])=>{
      this.indicadores = Object.values(indicador).reduce( (acc,cur) => [...acc, cur] , [])
      });
    this.selectValuesService.getUrl(indicador);
  }

  toogle(tipo){
    this.flagRecarga = tipo.value;
  }

}

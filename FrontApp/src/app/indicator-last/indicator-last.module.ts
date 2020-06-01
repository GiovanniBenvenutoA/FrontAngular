import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule} from '../material.module';
import { TableComponent} from '../indicator-last/table/table.component'


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    TableComponent
  ]
})
export class IndicatorLastModule { }

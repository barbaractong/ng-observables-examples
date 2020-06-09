import { Component, OnInit, ViewChild } from '@angular/core';

import {MatTableDataSource} from '@angular/material/table';
import {MatPaginatorModule, MatPaginator} from '@angular/material/paginator'; 

export interface TableGenerator {
  document: string;
  field: string; 
  accuracy: number;
  similarity: number;
  user: string;
  active: string;
  //actions: any
}

const TABLE_DATA: TableGenerator[] = [
  {document: 'Comprovante de residência', field: 'CEP', accuracy: 90, similarity: 95, user: 'Barbara Tong', active: 'Sim'},
  {document: 'Comprovante de residência', field: 'CEP', accuracy: 90, similarity: 95, user: 'Barbara Tong', active: 'Sim', },
  {document: 'Comprovante de residência', field: 'CEP', accuracy: 90, similarity: 95, user: 'Barbara Tong', active: 'Sim', },
  {document: 'Comprovante de residência', field: 'CEP', accuracy: 90, similarity: 95, user: 'Barbara Tong', active: 'Sim'},
  {document: 'Comprovante de residência', field: 'CEP', accuracy: 90, similarity: 95, user: 'Barbara Tong', active: 'Sim', },
  {document: 'Comprovante de residência', field: 'CEP', accuracy: 90, similarity: 95, user: 'Barbara Tong', active: 'Sim', },
  {document: 'Comprovante de residência', field: 'CEP', accuracy: 90, similarity: 95, user: 'Barbara Tong', active: 'Sim'},
  {document: 'Comprovante de residência', field: 'CEP', accuracy: 90, similarity: 95, user: 'Barbara Tong', active: 'Sim', },
  {document: 'Comprovante de residência', field: 'CEP', accuracy: 90, similarity: 95, user: 'Barbara Tong', active: 'Sim', },
  {document: 'Comprovante de residência', field: 'CEP', accuracy: 90, similarity: 95, user: 'Barbara Tong', active: 'Sim'},
  {document: 'Comprovante de residência', field: 'CEP', accuracy: 90, similarity: 95, user: 'Barbara Tong', active: 'Sim', },
  {document: 'Comprovante de residência', field: 'CEP', accuracy: 90, similarity: 95, user: 'Barbara Tong', active: 'Sim', },
  {document: 'Comprovante de residência', field: 'CEP', accuracy: 90, similarity: 95, user: 'Barbara Tong', active: 'Sim'},
  {document: 'Comprovante de residência', field: 'CEP', accuracy: 90, similarity: 95, user: 'Barbara Tong', active: 'Sim', },
  {document: 'Comprovante de residência', field: 'CEP', accuracy: 90, similarity: 95, user: 'Barbara Tong', active: 'Sim', },
  {document: 'Comprovante de residência', field: 'CEP', accuracy: 90, similarity: 95, user: 'Barbara Tong', active: 'Sim'},
  {document: 'Comprovante de residência', field: 'CEP', accuracy: 90, similarity: 95, user: 'Barbara Tong', active: 'Sim', },
  {document: 'Comprovante de residência', field: 'CEP', accuracy: 90, similarity: 95, user: 'Barbara Tong', active: 'Sim', },
  {document: 'Comprovante de residência', field: 'CEP', accuracy: 90, similarity: 95, user: 'Barbara Tong', active: 'Sim'},
  {document: 'Comprovante de residência', field: 'CEP', accuracy: 90, similarity: 95, user: 'Barbara Tong', active: 'Sim', },
  {document: 'Comprovante de residência', field: 'CEP', accuracy: 90, similarity: 95, user: 'Barbara Tong', active: 'Sim', },
  {document: 'Comprovante de residência', field: 'CEP', accuracy: 90, similarity: 95, user: 'Barbara Tong', active: 'Sim'},
  {document: 'Comprovante de residência', field: 'CEP', accuracy: 90, similarity: 95, user: 'Barbara Tong', active: 'Sim', },
  {document: 'Comprovante de residência', field: 'CEP', accuracy: 90, similarity: 95, user: 'Barbara Tong', active: 'Sim', },
  {document: 'Comprovante de residência', field: 'CEP', accuracy: 90, similarity: 95, user: 'Barbara Tong', active: 'Sim'},
  {document: 'Comprovante de residência', field: 'CEP', accuracy: 90, similarity: 95, user: 'Barbara Tong', active: 'Sim', },
  {document: 'Comprovante de residência', field: 'CEP', accuracy: 90, similarity: 95, user: 'Barbara Tong', active: 'Sim', },
]

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  //displayedColumns: string[] = ['name', 'weight', 'symbol'];

  displayedColumns: string[] = ['document', 'field', 'accuracy', 'similarity', 'user', 'active', 'actions'];
  dataSource = new MatTableDataSource(TABLE_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}

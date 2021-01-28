import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatTableDataSource} from '@angular/material/table';
import { Note } from './note';
import {MatSort} from '@angular/material/sort';
import { NotesService } from './services/notes.service';
import { ViewChild } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed, void', style({ height: '0px', minHeight: '0', display: 'none' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
      transition('expanded <=> void', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
    ]),
  ],
})
export class AppComponent implements AfterViewInit{
  title = 'Notes UI';

  displayedColumns: string[] = ['title', 'created', 'modified'];
  dataSource!: MatTableDataSource<Note>;


  @ViewChild(MatSort) sort!: MatSort;

  constructor(private noteService: NotesService){
    this.noteService.getNotes().subscribe(value => {
      console.log(value);
      this.dataSource = new MatTableDataSource<Note>(value);;
      this.dataSource.sort = this.sort;
    })
  }

  ngAfterViewInit(): void {
  }
}

import { Component, OnInit } from '@angular/core';
import{ NoteService } from './../note.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  note_text = '';
  notes;


  constructor(private _noteService : NoteService) {
    
   }

  ngOnInit() {
    this._noteService.showNotes((data)=> {
      console.log('data is.....',data);
      this.notes = data;
    })
  }

  onClick(){
    console.log('note is......',this.note_text);
    this._noteService.createNote(this.note_text);

    this._noteService.showNotes((data)=> {
      console.log('data is.....',data);
      this.notes = data;
    });
    // this.notes.push(this.note);
  }

}

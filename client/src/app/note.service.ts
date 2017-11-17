import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class NoteService {

  // private _notes = [];

  constructor(private _http: Http) { 
    // this.showNotes();
  }

  createNote(note){
    // this._notes.push(note);
    this._http.post(`/notes/${note}`, note)
    .subscribe(
      (response) => {
        console.log('success in adding...');
      },
      (err) => {
        console.log('didn not add');
      }
  )
  }

  showNotes(callback){
    this._http.get('/notes')
    .subscribe(
      (response) => {
        callback(response.json());
      },
      (err) => {
        console.log(err);
      }
    )
  }

  // showNotes(){
  //   this._http.get('/notes')
  //   .subscribe(
  //     (response) => {
  //       console.log('success in display...');
  //     },
  //     (err) => {
  //       console.log('oopsss');
  //     }
  //   )
  // }

}

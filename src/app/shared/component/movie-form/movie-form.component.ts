import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IMovie } from '../../models/Imovies';
import { MatDialog } from '@angular/material/dialog';
import { SnackbarService } from '../../services/snackbar.service';
import { UuidService } from '../../services/uuid.service';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.scss']
})
export class MovieFormComponent implements OnInit , OnChanges {
isInEditMode:boolean=false;
@Input() getEmitMovie !:IMovie
@Output() emitMovieObj: EventEmitter<IMovie>= new EventEmitter<IMovie>()
@Output() emitUpdateMovieObj: EventEmitter<IMovie>= new EventEmitter<IMovie>()
@ViewChild('movieForm')movieForm ! :NgForm
  constructor(private _uuidService : UuidService) { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['getEmitMovie']['currentValue']){
      this.isInEditMode = true
      this.movieForm.form.patchValue(changes['getEmitMovie']['currentValue'])
    }
  }
OnAddMovie(){
  if(this.movieForm.valid){
    let movieObj: IMovie={
      ...this.movieForm.value,
      movieId:this._uuidService.uuid()
    }
    this.emitMovieObj.emit(movieObj)
    this.movieForm.reset()
  }
}
onUpdate(){
  if(this.movieForm.valid){
    let UPDATED_OBJ:IMovie={
      ...this.movieForm.value,
      movieId: this.getEmitMovie.movieId
    }
     this.emitUpdateMovieObj.emit(UPDATED_OBJ)
     this.movieForm.reset()
     this.isInEditMode =false
  }
}

}

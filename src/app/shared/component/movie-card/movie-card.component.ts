import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IMovie } from '../../models/Imovies';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetConfirmComponent } from '../get-confirm/get-confirm.component';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
@Input() movieObj! : Array<IMovie>
@Output() emitRemoveObj: EventEmitter<IMovie>= new EventEmitter<IMovie>()
@Output() emitEditObj: EventEmitter<IMovie>= new EventEmitter<IMovie>()
  constructor(private _MatDailog : MatDialog) { }

  ngOnInit(): void {
  }

onEditMovie(editmovie:IMovie){
   this.emitEditObj.emit(editmovie)
}

onRemove(RemoveMovieObj: IMovie){
  let matConfig = new MatDialogConfig()
      matConfig.width='500px',
      matConfig.disableClose=true
  
    let matConfigRef=    this._MatDailog.open(GetConfirmComponent, matConfig)
       matConfigRef.afterClosed()
       .subscribe(flag=>{
          if(flag){
            this.emitRemoveObj.emit(RemoveMovieObj)
          }
       })
}
}

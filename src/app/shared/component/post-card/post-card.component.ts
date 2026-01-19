import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IPost } from '../../models/Ipost';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetConfirmComponent } from '../get-confirm/get-confirm.component';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {
@Input() postObj!:Array<IPost>
@Output() emitRemovePostObj: EventEmitter<IPost>=new EventEmitter<IPost>()
@Output() emitEditPostObj: EventEmitter<IPost>=new EventEmitter<IPost>()
  constructor(private _MatDialog : MatDialog) { }

  ngOnInit(): void {
  }

onEditPost(post :IPost){
   this.emitEditPostObj.emit(post)
}

onRemove(post:IPost){
    let matConfig = new MatDialogConfig()
    matConfig.width='500px',
    matConfig.disableClose=true

  let matConfigRef=    this._MatDialog.open(GetConfirmComponent, matConfig)
     matConfigRef.afterClosed()
     .subscribe(flag=>{
        if(flag){
          this.emitRemovePostObj.emit(post)
        }
     })
}

trackByPost(index: number, postId:IPost  ){
  return postId
}
}

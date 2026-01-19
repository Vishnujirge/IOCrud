import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IPost } from '../../models/Ipost';
import { UuidService } from '../../services/uuid.service';
import { OutletContext } from '@angular/router';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit  , OnChanges{
isInEditMode:boolean=false
@Input()newEditPost! : IPost
@Output() emitPostObj: EventEmitter<IPost>=new EventEmitter<IPost>()
@Output() emitUpdatePostObj: EventEmitter<IPost>=new EventEmitter<IPost>()
@ViewChild('postForm') postForm !: NgForm
  constructor(private _uuidService: UuidService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['newEditPost']['currentValue']){
      this.isInEditMode=true
      this.postForm.form.patchValue(changes['newEditPost']['currentValue'])
    }
  }
onUpdate(){
  if(this.postForm.valid){
    let UPDATED_OBJ:IPost={
      ...this.postForm.value,
      postId:this.newEditPost.postId
    }
    this.emitUpdatePostObj.emit(UPDATED_OBJ)
    this.isInEditMode=false
    this.postForm.reset()
   
  }
}


onAddPost(){
   if(this.postForm.valid){
    let postObj: IPost={
      ...this.postForm.value,
      postId: this._uuidService.uuid()
    }
    this.emitPostObj.emit(postObj)
    this.postForm.reset()
   }
}
}

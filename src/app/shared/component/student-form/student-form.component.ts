import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Istd } from '../../models/Istd';
import { UuidService } from '../../services/uuid.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit, OnChanges {
isInEditMode:boolean=false
@Input()editStdObj!:Istd
@Output() emitStdObj : EventEmitter<Istd> = new EventEmitter<Istd>()
@Output() emitUpdatedStdObj : EventEmitter<Istd> = new EventEmitter<Istd>()
@ViewChild('stdForm') stdForm! :NgForm
  constructor(private _uuidService : UuidService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['editStdObj']['currentValue']){
      this.isInEditMode = true
      this.stdForm.form.patchValue(changes['editStdObj']['currentValue'])
    }
  }

onAddStd(){
  if(this.stdForm.valid){
    let stdObj : Istd={
      ...this.stdForm.value,
      stdId:this._uuidService.uuid()
    }
    this.emitStdObj.emit(stdObj)
  }
}

onUpdate(){
  if(this.stdForm.valid){
    let UPDATED_OBJ : Istd={
      ...this.stdForm.value,
      stdId: this.editStdObj.stdId
    }
  this.emitUpdatedStdObj.emit(UPDATED_OBJ)
  this.stdForm.reset()
  this.isInEditMode=false
  }
}
}

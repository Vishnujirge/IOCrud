import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ITodos } from '../../models/itodo';
import { UuidService } from '../../services/uuid.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit , OnChanges {
isInEditMode:boolean=false;
@Input()  editObj! : ITodos
@Output() emitTodoObj:EventEmitter<ITodos>= new EventEmitter<ITodos>()
@Output() emitUpdatedTodoObj:EventEmitter<ITodos>= new EventEmitter<ITodos>()

@ViewChild('todoForm') todoForm !:NgForm
  constructor(private _uuidService : UuidService) { }

  ngOnInit(): void {
  }
 ngOnChanges(changes: SimpleChanges): void {
     if(changes['editObj']['currentValue']){
      this.isInEditMode= true,
      this.todoForm.form.patchValue(changes['editObj']['currentValue'])
     }
 }

onUpdate(){
  if(this.todoForm.valid){
    let UPDATED_OBJ : ITodos={
      ...this.todoForm.value,
      todoId:this.editObj.todoId
    }
     this.emitUpdatedTodoObj.emit(UPDATED_OBJ)
     this.todoForm.reset()
     this.isInEditMode= false
  }
}

onAddTodo(){
  if(this.todoForm.valid){
    let newTodoObj:ITodos={
       ...this.todoForm.value,
       todoId: this._uuidService.uuid()
    }
    this.emitTodoObj.emit(newTodoObj)
    this.todoForm.reset()
  }
}
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITodos } from '../../models/itodo';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { GetConfirmComponent } from '../get-confirm/get-confirm.component';




@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
@Input() todoObj! : Array<ITodos>
@Output() emitEditTodo : EventEmitter<ITodos> = new EventEmitter<ITodos>()

@Output() emitRemoveTodo : EventEmitter<ITodos> = new EventEmitter<ITodos>()
  constructor(private _matDialog : MatDialog) { }

  ngOnInit(): void {
  }
onEdit(todo:ITodos){
    this.emitEditTodo.emit(todo)
}

onRemoveTodo(removetodo : ITodos){
   let dailogConfig = new MatDialogConfig()
   dailogConfig.width='500px',
   dailogConfig.disableClose=true
 let dialogRef= this._matDialog.open(GetConfirmComponent, dailogConfig)
 dialogRef.afterClosed()
 .subscribe(flag=>{
  if(flag){
    this.emitRemoveTodo.emit(removetodo)
  }
 })
    

}
 trackby(index : number, todoId: ITodos){
  return todoId
 }
}

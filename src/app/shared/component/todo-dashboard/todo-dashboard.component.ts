import { Component, OnInit } from '@angular/core';
import { ITodos } from '../../models/itodo';
import { todoArr } from '../../const/todo';
import { SnackbarService } from '../../services/snackbar.service';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.scss']
})
export class TodoDashboardComponent implements OnInit {
newTodoArr : Array<ITodos> = todoArr;
editTodo! : ITodos
  constructor(private _snackBar : SnackbarService) { }

  ngOnInit(): void {
  }
getTodoObj(todoObj: ITodos){
   this.newTodoArr.unshift(todoObj)
    this._snackBar.openSnackbar(`todoItem with name ${todoObj.todoItem} with ID ${todoObj.todoId} Added successfully`)
}
getEditTodo(todo: ITodos){
  this.editTodo =todo
}

getUpdatedObj(todo:ITodos){
  let getIndex = this.newTodoArr.findIndex(todo=> todo.todoId===todo.todoId)
  this.newTodoArr[getIndex]=todo
}
getremoveTodo(todo:ITodos){
    let getIndex = this.newTodoArr.findIndex(todo => todo.todoId === todo.todoId)
    this.newTodoArr.splice(getIndex,1)
    this._snackBar.openSnackbar(`todoItem with name ${todo.todoItem} with ID ${todo.todoId} Remove successfully`)
}
}

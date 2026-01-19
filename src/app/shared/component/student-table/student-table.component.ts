import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Istd } from '../../models/Istd';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetConfirmComponent } from '../get-confirm/get-confirm.component';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.scss']
})
export class StudentTableComponent implements OnInit {
@Input()stdObj! :Istd[]
@Output() emitRemoveStd : EventEmitter<Istd> =new EventEmitter<Istd>()
@Output() emitEditStd : EventEmitter<Istd> =new EventEmitter<Istd>()
  constructor(private _matDialog : MatDialog) { }

  ngOnInit(): void {
  }

onEdit(std : Istd){
   this.emitEditStd.emit(std)
}

onRemove(removeStd : Istd){
    let matConfig = new MatDialogConfig()
    matConfig.width="500px",
    matConfig.disableClose=true

   let matConfigRef =   this._matDialog.open(GetConfirmComponent, matConfig)
     matConfigRef.afterClosed()
      .subscribe(flag=>{
  if(flag){
    this.emitRemoveStd.emit(removeStd)
  }
 })
}
trackByStd(index: number , stdId :Istd){
  return stdId
}
}
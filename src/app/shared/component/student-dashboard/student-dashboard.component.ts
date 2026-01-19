import { Component, OnInit } from '@angular/core';
import { Istd } from '../../models/Istd';
import { stdArr } from '../../const/std';
import { SnackbarService } from '../../services/snackbar.service';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.scss']
})
export class StudentDashboardComponent implements OnInit {
newStdArr: Array<Istd>= stdArr
 editStd! :Istd
  constructor(private _snackBar : SnackbarService) { }

  ngOnInit(): void {
  }
getstdObj(stdObj:Istd){
  this.newStdArr.unshift(stdObj)
  this._snackBar.openSnackbar(`This student with name ${stdObj.fName} with id ${stdObj.stdId} Added succesfully`)
}
getEditStd(std: Istd){
this.editStd = std
}
getUpdatedStd(std : Istd){
   let getIndex = this.newStdArr.findIndex(std => std.stdId === std.stdId)
   this.newStdArr[getIndex]=std
   this._snackBar.openSnackbar(`This student with name ${std.fName} with id ${std.stdId} Updated succesfully`)


}
getRemoveStd(removetd: Istd){
  let getIndex = this.newStdArr.findIndex(std => std.stdId === removetd.stdId)
  this.newStdArr.splice(getIndex,1)
  this._snackBar.openSnackbar(`This student with name ${removetd.fName} with id ${removetd.stdId} remove succesfully`)
}
}

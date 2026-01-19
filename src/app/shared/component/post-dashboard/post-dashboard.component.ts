import { Component, OnInit } from '@angular/core';
import { IPost } from '../../models/Ipost';
import { postArr } from '../../const/post';
import { SnackbarService } from '../../services/snackbar.service';

@Component({
  selector: 'app-post-dashboard',
  templateUrl: './post-dashboard.component.html',
  styleUrls: ['./post-dashboard.component.scss']
})
export class PostDashboardComponent implements OnInit {
newPostArr:IPost[]=postArr
editPost!: IPost
  constructor(private _snackBarService : SnackbarService) { }

  ngOnInit(): void {
  }
 getPostObj(post:IPost){
  this.newPostArr.unshift(post)
  this._snackBarService.openSnackbar(`The post with ${post.title} is added Sucessfully` )
 }
getEditPostObj(editPostObj:IPost){
     this.editPost= editPostObj
}

getUpdatedPost(updatPost: IPost){
 let getIndex = this.newPostArr.findIndex(post=>post.postId === updatPost.postId)
 this.newPostArr[getIndex] = updatPost
   this._snackBarService.openSnackbar(`The post with ${updatPost.title} is Updated Sucessfully` )
}
 getRemovePostObj(removePost: IPost){
     let getIndex = this.newPostArr.findIndex(post=>post.postId=== removePost.postId)
     this.newPostArr.splice(getIndex,1)
     this._snackBarService.openSnackbar(`The post with ${removePost.title} is Remove Sucessfully` )
 }


}

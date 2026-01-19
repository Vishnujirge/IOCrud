import { Component, OnInit } from '@angular/core';
import { IMovie } from '../../models/Imovies';
import { moviesArr } from '../../const/movie';
import { SnackbarService } from '../../services/snackbar.service';

@Component({
  selector: 'app-movie-dashboard',
  templateUrl: './movie-dashboard.component.html',
  styleUrls: ['./movie-dashboard.component.scss']
})
export class MovieDashboardComponent implements OnInit {
newMovieArr:IMovie[]=moviesArr
 editMovie! : IMovie
  constructor(private _snackBar : SnackbarService) { }

  ngOnInit(): void {
  }
getmovieObj(movieObj: IMovie){
    this.newMovieArr.unshift(movieObj)
    this._snackBar.openSnackbar(`The movie with id ${movieObj.movieId} Addded successfuly`)

}
getEditMovie(getMovie: IMovie){
  this.editMovie = getMovie
}
getUpdateMovie(updateMovie: IMovie){
  let getIndex = this.newMovieArr.findIndex(movie=>movie.movieId=== updateMovie.movieId)
     this.newMovieArr[getIndex]=updateMovie
     this._snackBar.openSnackbar(`The movie with ${updateMovie.title} is Updated Sucessfully` )
}

getRemoveObj(removeMovie: IMovie){
    let getIndex = this.newMovieArr.findIndex(movie=>movie.movieId=== removeMovie.movieId)
     this.newMovieArr.splice(getIndex,1)
     this._snackBar.openSnackbar(`The movie with ${removeMovie.title} is Remove Sucessfully` )
}
}

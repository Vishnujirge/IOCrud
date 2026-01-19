import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { StudentDashboardComponent } from "./shared/component/student-dashboard/student-dashboard.component";
import { PostDashboardComponent } from "./shared/component/post-dashboard/post-dashboard.component";
import { MovieDashboardComponent } from "./shared/component/movie-dashboard/movie-dashboard.component";
import { TodoDashboardComponent } from "./shared/component/todo-dashboard/todo-dashboard.component";


const routes : Routes=[
    {
        path:'todo',
        component:TodoDashboardComponent
    },
   
    {
        path:'student',
        component:StudentDashboardComponent
    },
    {
        path:'post',
        component:PostDashboardComponent
    },
     {
        path:'movie',
        component:MovieDashboardComponent
    }
]


@NgModule({
    imports:[RouterModule.forRoot(routes)]
})

export class AppRoutingModule {
  
}
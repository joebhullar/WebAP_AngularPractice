import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Components
import { ContactComponent } from './contact/contact.component';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsComponent } from './products/products.component';
import { LogoutComponent } from './logout/logout.component';
import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { RegisterComponent } from './register/register.component';
import { PostComponent } from './post/post.component';
import { CommentsComponent } from './comments/comments.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { AlbumsComponent } from './albums/albums.component';
import { CreateFeedbackComponent } from './create-feedback/create-feedback.component';

import { Router, RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const routes:Routes=[
  {path:'', redirectTo:'/Home', pathMatch:'full'},
  {path:'Home', component:HomeComponent},
  {path:'Products', component:ProductsComponent},
  {path:'Contact', component:ContactComponent},
  {path:'Help', component:HelpComponent},
  {path:'Login', component:LoginComponent},
  {path:'ProductDetail', component:ProductDetailComponent},
  {path:'Products', component:ProductsComponent},
  {path:'Logout', component:LogoutComponent},
  {path:'Users', component:UsersComponent},
  {path:'UserDetail', component:UserDetailComponent},
  {path:'Register', component:RegisterComponent},
  {path:'Post', component:PostComponent},
  {path:'Comments', component:CommentsComponent},
  {path:'Feedback', component:FeedbackComponent},
  {path:'CreateFeedback', component:CreateFeedbackComponent},
  {path:'Albums', component:AlbumsComponent},
  {path:"**", component:PageNotFoundComponent},
];


@NgModule({
  declarations: [
    ContactComponent,
    HelpComponent,
    HomeComponent,
    LoginComponent,
    PageNotFoundComponent,
    ProductDetailComponent,
    ProductsComponent,
    RegisterComponent,
    UserDetailComponent,
    UsersComponent,
    LogoutComponent,
    PostComponent,
    CommentsComponent,
    AlbumsComponent,
    FeedbackComponent,
    CreateFeedbackComponent

  ],
  imports: [
    CommonModule, FormsModule, RouterModule.forRoot(routes), HttpClientModule
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }

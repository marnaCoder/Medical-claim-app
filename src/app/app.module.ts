import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CreateComponent } from './create/create.component';
import { DomiciliaryComponent } from './create/domiciliary/domiciliary.component';
import { MedicalChestComponent } from './create/medical-chest/medical-chest.component';
import { SpectaclesComponent } from './create/spectacles/spectacles.component';
import { StatementComponent } from './statement/statement.component';
import { ViewModifyComponent } from './view-modify/view-modify.component';
import {Routes, RouterModule} from '@angular/router'

const appRoutes: Routes=[
  // {path:'',component:AppComponent},
  {path:'create',component:CreateComponent,children:[
   { path:'domiciliary',component:DomiciliaryComponent},
   {path:'medical_chest',component:MedicalChestComponent},
   {path:'spectacles',component:SpectaclesComponent}
  ]},
  {path:'statement',component:StatementComponent},
  {path:'view',component:ViewModifyComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreateComponent,
    DomiciliaryComponent,
    MedicalChestComponent,
    SpectaclesComponent,
    StatementComponent,

    ViewModifyComponent
    ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

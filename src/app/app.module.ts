import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { AutoallocatorComponent } from './autoallocator/autoallocator.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { AbgComponent } from './abg/abg.component';


const routes: Routes = [
	{path:'home',component: HomeComponentComponent},
	{path:'auto-allocator',component: AutoallocatorComponent},
  {path:'abg',component: AbgComponent},
  
]

@NgModule({
  declarations: [
    AppComponent,
    AutoallocatorComponent,
    HomeComponentComponent,
    AbgComponent,
    

  ],
  imports: [
    BrowserModule,RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

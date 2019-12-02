import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APP_STORAGE } from '../core/core.module';
import { LoginComponent } from '../login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: 'login',
    children: [
      {
        path: '',
        component: LoginComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [LoginComponent],
  providers: [
    {
      provide: APP_STORAGE,
      useValue: localStorage,
    },
  ],
  imports: [
    CommonModule, 
    RouterModule.forChild(routes),
    BrowserModule,
    FormsModule,],
})
export class UserModule {
  static forRoot({ storage }: { storage: Storage }): ModuleWithProviders {
    return {
      ngModule: UserModule,
      providers: [
        {
          provide: APP_STORAGE,
          useValue: storage,
        },
      ],
    };
  }

  forChild() {}
}

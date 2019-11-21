import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APP_STORAGE } from '../core/core.module';

@NgModule({
  declarations: [],
  providers: [
    {
      provide: APP_STORAGE,
      useValue: localStorage,
    },
  ],
  imports: [CommonModule],
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

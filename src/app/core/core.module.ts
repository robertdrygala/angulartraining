import { NgModule, ModuleWithProviders, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';

export const APP_STORAGE = new InjectionToken('application storage');

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class CoreModule {
  static forRoot({ storage }: { storage: Storage }): ModuleWithProviders {
    return {
      ngModule: CoreModule,
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

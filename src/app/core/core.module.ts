import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';

import { throwIfAlreadyLoaded } from './guard/module-import.guard';
import { TokenInterceptor } from './interceptor/token.interceptor';
import { SidemenuService } from './services/comp-services/sidemenu/sidemenu.service';
import { LoaderService } from './services/loader.service';

// import { AuthGuard } from './guard/auth.guard';
// import { NoAuthGuard } from './guard/no-auth.guard';
// import { AuthService } from './services/auth.service';
// import { StorageService } from './services/storage.service';
// import { UsersService } from './services/users.service';
// import { DeviceService } from './services/device.service';

const customServices = [
  // DeviceService,
  // UsersService,
  LoaderService,
  // StorageService,
  // AuthGuard,
  // NoAuthGuard,
  // AuthService,
  SidemenuService
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ...customServices,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}

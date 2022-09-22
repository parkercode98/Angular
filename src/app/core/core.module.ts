import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { AuthGuard } from './guard/auth.guard';
// import { NoAuthGuard } from './guard/no-auth.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptor/token.interceptor';
import { throwIfAlreadyLoaded } from './guard/module-import.guard';
// import { AuthService } from './services/auth.service';
// import { LoaderService } from './services/loader.service';
// import { StorageService } from './services/storage.service';
// import { UsersService } from './services/users.service';
// import { DeviceService } from './services/device.service';

const customServices = [
  // DeviceService,
  // UsersService,
  // LoaderService,
  // StorageService,
  // AuthGuard,
  // NoAuthGuard,
  // AuthService,
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    // ...customServices,
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

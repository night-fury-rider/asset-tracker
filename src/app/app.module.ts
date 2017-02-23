import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { Modal } from '../modules/modal/modal';

import { CategoryService } from '../modules/category/category.service';

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    Modal
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    Modal
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, 
              Storage, CategoryService]
})
export class AppModule {}

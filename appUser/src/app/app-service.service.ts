import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { loadInternal } from '@angular/core/src/render3/util';
@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private loadingController:LoadingController) { }
  
     

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Loading',
    });
    await loading.present();

  
}
async dismissLoader()
{
  this.loadingController.dismiss();
}

}

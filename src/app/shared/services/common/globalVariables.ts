import { Injectable } from '@angular/core';
import { AppLoaderService } from './../../components/componentsAsService/app-loader/app-loader.service';
import Utils from './utils';

@Injectable({
  providedIn: 'root'
})
export class GlobalVariables {

  private paramsData: any = {};
  private retainParamValue = false;

  constructor(public loader: AppLoaderService) { }
  public getParameterData(key) {
    if (!Utils.isUndefined(this.paramsData) && !Utils.isNull(this.paramsData)) {
      if (this.paramsData.hasOwnProperty(key)) {
        const output = this.paramsData[key];
        if (this.retainParamValue === false) {
          this.setParameterData(key, null);
        }
        return output;
      } else {
        return null;
      }
    } else {
      return null;
    }
  }

  // single time set method
  // @input => any data value either an object or a value
  // @retainvalue => weather the data should present or not
  public setParameterData(key, input, retainValue = true) {
    this.paramsData[key] = input;
    this.retainParamValue = retainValue;
  }

  open() {
    this.loader.open();
  }

  close() {
    this.loader.close();
  }

}

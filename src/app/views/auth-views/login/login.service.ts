import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FrameURLService } from '../../../shared/services/http/frame-url.service';
import { RequestEnums } from '../../../shared/constants/request-enums';
import { CommonHttpService } from '../../../shared/services/http/common-http.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _frameUrlService: FrameURLService,
    private _commonHttpService: CommonHttpService) { }

  login(requestObject): Observable<any> {
    requestObject.path = this._frameUrlService.getHttpFramedURL(requestObject);
    console.log(requestObject);
    return this._commonHttpService.sendReciveService(requestObject);
  }
}

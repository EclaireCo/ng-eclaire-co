import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private _isMenuEnabled = new BehaviorSubject(true);
  public isMenuEnabled$ = this._isMenuEnabled.asObservable();
  constructor() { }

  enable(){ this._isMenuEnabled.next(true)}
  disable(){ this._isMenuEnabled.next(false)}
  
}

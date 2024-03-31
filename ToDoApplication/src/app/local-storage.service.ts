import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }
 
  getItem(key: string) {
    if (typeof window !== 'undefined' && window.localStorage) {
      return window.localStorage.getItem(key);
    } else {
      return null;
    }
  }

  setItem(key: string, value: string) {
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.setItem(key, value);
    }
  }
}

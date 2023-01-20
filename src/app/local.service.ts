import { Injectable } from '@angular/core';
import  *  as CryptoJS from  'crypto-js';
@Injectable({
  providedIn: 'root'
})
export class LocalService {
  key: string
   value: string
  constructor() { }
  public saveData(key,value) {
    localStorage.setItem(key, value);
  }
  public getData(key) {
    return localStorage.getItem(key);
  }
  public removeData(key) {
    localStorage.removeItem(key);
  }
  public clearData() {
    localStorage.clear();
  }

  private encrypt(txt: string) : string{
    return CryptoJS.AES.encrypt(txt, this.key).toString()
  }
  private decrypt(txtToDecrypt:string){
    return CryptoJS.AES.decrypt(txtToDecrypt,this.key).toString(CryptoJS.enc.Utf8)
  }
}


import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommunicatorService {
  serviceData: string = null;

  constructor() { }

  get data():string { 
    return this.serviceData; 
  } 
  set data(value: string) { 
    this.serviceData = value; 
  } 
}

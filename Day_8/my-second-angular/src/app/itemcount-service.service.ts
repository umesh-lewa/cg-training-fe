import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemcountServiceService {

  constructor() { }

  data: Subject<Number>  = new Subject();
}

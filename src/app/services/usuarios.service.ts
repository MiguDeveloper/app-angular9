import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private httpClient: HttpClient) {
  }

  getUsuarios(): Observable<any> {
    return this.httpClient.get<any>('https://jsonplaceholder.typicode.com/users')
      .pipe(map(data => data))
  }
}

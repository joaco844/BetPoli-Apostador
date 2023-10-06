import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PartidosService {
  url ="http://172.16.255.204:6969/matches/docs";

 

  constructor(private http: HttpClient) { }

  
}

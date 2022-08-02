import { Injectable } from '@angular/core';
import { TPage } from 'src/app/core/models/page.model';
import { environment } from 'src/environments/environment';
import { TPageCommand } from '../models/page.command';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private endpoint = environment.api;
  constructor(private http: HttpClient) {}

  getPage(cmd: TPageCommand) {
    return this.http.get<TPage>(
      `${this.endpoint}/api/pokemon?limit=${cmd.limit}&offset=${cmd.offset}`
    );
  }
}

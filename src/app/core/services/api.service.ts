import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TPageCommand } from '../models/page.command';
import { HttpClient } from '@angular/common/http';
import { PokeApiPage } from '../models/pokeApiPage.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private endpoint = environment.api;
  constructor(private http: HttpClient) {}

  getPage(cmd: TPageCommand) {
    return this.http.get<PokeApiPage>(
      `${this.endpoint}/api/pokemon?limit=${cmd.limit}&offset=${cmd.offset}`
    );
  }

  getPokemon(cmd: {id: number}) {
    return this.http.get<any>(`${this.endpoint}/api/pokemon/${cmd.id}`);
  }
}

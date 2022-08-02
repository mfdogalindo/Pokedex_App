import { Injectable } from '@angular/core';
import { TPage } from 'src/app/shared/models/page';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private endpoint = environment.api;
  constructor() {}

  async getPage(limit: number, offset: number): Promise<TPage> {
    return fetch(`${this.endpoint}/api/pokemon?limit=${limit}&offset=${offset}`)
      .then((response) => response.json())
      .catch((error) => {
        alert(error);
      });
  }
}

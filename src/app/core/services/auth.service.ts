import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private endpoint = environment.auth;
  private token: string | null = null;

  constructor(private http: HttpClient) {}

  async login(user: { email: string; password: string }): Promise<boolean> {
    try {
      let query = this.http.post<any>(`${this.endpoint}/login`, user);
      let result = await firstValueFrom(query);
      this.token = result.accessToken;
      sessionStorage.setItem('control-session', btoa(JSON.stringify(result)));
      return true;
    } catch {
      return false;
    }
  }

  async validateToken(): Promise<boolean> {
    try {
      let tokenObject = this.getToken();
      let query = this.http.post<any>(`${this.endpoint}/validate`, null, {
        headers: {
          Authorization: `Bearer ${tokenObject?.accessToken}`,
        },
      });
      let result = await firstValueFrom(query);
      return result?.id != undefined;
    } catch {
      return false;
    }
  }

  logout() {
    sessionStorage.removeItem('control-session');
  }

  getToken(): { accessToken: string; expiresIn: number } | null {
    try {
      const data: any = sessionStorage.getItem('control-session');
      if (data == undefined) return null;
      const decoded = atob(data);
      const object: { expiresIn: number; accessToken: string } =
        JSON.parse(decoded);
      return object;
    } catch {
      return null;
    }
  }
}

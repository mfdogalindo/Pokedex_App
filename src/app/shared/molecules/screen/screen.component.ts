import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { TPage } from '../../models/page';

@Component({
  selector: 'mol-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.scss'],
})
export class ScreenComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  data: TPage = {
    count: 0,
    next: null,
    previous: null,
    results: [{ name: '', url: '' }],
  };

  ngOnInit(): void {
    this.refreshPage(10, 0);
  }

  async refreshPage(limit: number, offset: number) {
    this.data = await this.apiService.getPage(limit, offset);
    console.log(this.data);
  }

  public onClickItem(event: any) {
    console.log(event);
  }
}

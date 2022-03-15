import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-htmlalgolia',
  templateUrl: './htmlalgolia.component.html',
  styleUrls: ['./htmlalgolia.component.sass'],
})
export class HtmlalgoliaComponent implements OnInit {
  list: any = [];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getAlgoliaList();
  }

  handleSearch(input: any) {
    const value = input.value;
    if (value) this.getAlgoliaId(value);
    else this.getAlgoliaList();
  }

  async getAlgoliaList() {
    this.list = [];
    try {
      const { response }: any = await this.http
        .get(`http://localhost:3000/api/algolia`)
        .toPromise();

      this.list = response.hits;
    } catch (error) {
      throw error;
    }
  }

  async getAlgoliaId(value: any) {
    this.list = [];
    try {
      const { response }: any = await this.http
        .get(`http://localhost:3000/api/algolia/${value}`)
        .toPromise();

      this.list = [response.object];
    } catch (error) {
      throw error;
    }
  }
}

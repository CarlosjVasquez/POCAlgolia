import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directserver',
  templateUrl: './directserver.component.html',
  styleUrls: ['./directserver.component.sass'],
})
export class DirectserverComponent implements OnInit {
  list: any = [];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getServerList();
  }

  handleSearch(input: any) {
    const value = input.value;
    if (value) this.getServerId(value);
    else this.getServerList();
  }

  async getServerList() {
    this.list = [];
    try {
      const { response }: any = await this.http
        .get(`http://localhost:3000/api/server`)
        .toPromise();

      this.list = response;
    } catch (error) {
      throw error;
    }
  }

  async getServerId(value: any) {
    this.list = [];
    try {
      const { response }: any = await this.http
        .get(`http://localhost:3000/api/server/${value}`)
        .toPromise();

      this.list = [response];
    } catch (error) {
      throw error;
    }
  }
}

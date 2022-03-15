import { Component, OnInit } from '@angular/core';
import algoliasearch from 'algoliasearch/lite';

@Component({
  selector: 'app-widgetalgolia',
  templateUrl: './widgetalgolia.component.html',
  styleUrls: ['./widgetalgolia.component.sass'],
})
export class WidgetalgoliaComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  config = {
    indexName: 'poc_mages',
    searchClient: algoliasearch(
      'I2JCDIL0V7',
      '7d4bc2ed575d67ffb885ff97a5ddf887'
    ),
  };
}

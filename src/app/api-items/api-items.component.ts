import { Component, OnInit } from '@angular/core';
import { HttpService } from '@core/http.service';
import { ApiItemsService } from './api-items.service';
import { Item } from './item.model';
import { FormsModule } from '@angular/forms';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-api-items',
  imports: [FormsModule, NgIf, NgFor],
  templateUrl: './api-items.component.html',
  styleUrl: './api-items.component.css'
})
export class ApiItemsComponent implements OnInit {
  items: Item[] = [];
  updateCheked = false;
  updateItem!: Item;
  creationItem!: Item;

  constructor(private readonly httpService: HttpService, private readonly apiItemsService: ApiItemsService) { }

  ngOnInit(): void {
    this.updateItem = { id: 0, name: '', description: '' };
    this.creationItem = { id: 0, name: '', description: '' };
    this.apiItemsService.getAllItems().subscribe(items => this.items = items);
    this.apiItemsService.getUpdateItem().subscribe(item => {
      this.updateItem = item;
      this.updateCheked = true;
    });
    this.apiItemsService.getReadItem().subscribe(item => alert(item.id + ':' + item.name + ',' + item.description));
  }

  read(id: number) {
    this.apiItemsService.read(id);
  }

  delete(id: number) {
    this.apiItemsService.delete(id);
  }

  prepareUpdate(id: number) {
    this.apiItemsService.prepareUpdate(id);
  }

  save() {
    this.updateCheked = false;
    this.apiItemsService.update(this.updateItem);
  }

  create() {
    this.apiItemsService.create(this.creationItem);
  }

  cancel() {
    this.updateCheked = false;
  }
}

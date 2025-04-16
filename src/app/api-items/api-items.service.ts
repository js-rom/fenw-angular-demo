import { HttpService } from "@core/http.service";
import { Subject, Observable } from "rxjs";
import { Item } from "./item.model";
import { EndPoints } from "@core/end-points";
import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class ApiItemsService {

    private readItem: Subject<Item> = new Subject();

    private updateItem: Subject<Item> = new Subject();

    private allItems: Subject<Item[]> = new Subject();

    constructor(private readonly httpService: HttpService) { }

    getAllItems(): Observable<Item[]> {
        this.readAll();
        return this.allItems.asObservable();
    }

    getUpdateItem(): Observable<Item> {
        return this.updateItem.asObservable();
    }

    prepareUpdate(id: number) {
        this.httpService.get(EndPoints.ITEMS + '/' + id).subscribe({
            next: (itemValue: Item) => this.updateItem.next(itemValue)
        });
    }

    getReadItem(): Observable<Item> {
        return this.readItem.asObservable();
    }

    read(id: number) {
        this.httpService.get(EndPoints.ITEMS + '/' + id).subscribe({
            next: (itemValue: Item) => this.readItem.next(itemValue)
        });
    }

    private readAll() {
        this.httpService.get(EndPoints.ITEMS).subscribe({
            next: (itemsArray: Item[]) => this.allItems.next(itemsArray)
        });
    }

    delete(id: number) {
        this.httpService.delete(EndPoints.ITEMS + '/' + id).subscribe({
            next: () => this.readAll()
        });
    }

    create(item: Item) {
        this.httpService.post(EndPoints.ITEMS, item).subscribe({
            next: () => this.readAll()
        });
    }

    update(item: Item) {
        this.httpService.put(EndPoints.ITEMS + '/' + item.id, item).subscribe({
            next: () => this.readAll()
        });
    }
}
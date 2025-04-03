export class List<T> {
    items: Array<T> = new Array<T>();

    constructor() {
    }

    add(item: T) {
        this.items.push(item);
    }

    remove(item: T) {
        const INDEX = this.items.indexOf(item)
        const EXISTS = INDEX > -1;
        if (EXISTS) {
            this.items.splice(INDEX, 1);
        }
    }

    readAll(): Array<T>  {
        return this.items;
      }

}
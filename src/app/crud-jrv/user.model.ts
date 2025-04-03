export class User {
    id;
    name;

    constructor(id: number | undefined, name: string | undefined) {
        this.id = id;
        this.name = name;
    }

    isValid() {
        return this.id != undefined && this.name != '' && this.name != undefined;
    }


}
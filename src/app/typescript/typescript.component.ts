import { Component } from '@angular/core';
import { Color } from './color.model';
import { Employee } from '../shared/Employee.model';
import { Clazz } from './Clazz.model';

@Component({
  selector: 'app-typescript',
  imports: [],
  templateUrl: './typescript.component.html',
  styleUrl: './typescript.component.css'
})
export class TypescriptComponent {

  static readonly stat = 10; // readonly equivale a final de Java

  // title:string VS public String title
  title = 'Angular 4. Demo'; // Si se inicializa valor, se extrae su tipo

  isDone = false;                                      // boolean
  integer = 123;                                       // number
  decimal = 6.6;                                       // number
  hex = 0x000f;                                        // number
  binary = 0b1111;                                     // number
  color = 'blue';                                      // string
  composite = `Texto & valores: ${this.integer}`;      // string
  composite2 = 'Texto & valores: ' + this.integer;     // string
  notAccessible: string | null = null;                 // string
  valueLess: string | undefined = undefined;                       // string
  tuple: [string, number] = ['hello', 10];             // tuple
  enumColorValue: Color = Color.Green;                 // enum Color
  enumColorName: string = Color[this.enumColorValue];  // string
  notTyped1!: null;                                     // any
  notTyped2: undefined;                                // any
  notTyped3: any = 4;                                  // any
  notTyped4: any = 'a string';                         // any
  // const of instance
  readonly immutable = 123;                            // number

  employee1: Employee = { name: 'Jhon' };              // Employee
  employee2: Employee = { value: 10, name: 'Jhon' };   // Employee
  employee3: Employee = { name: 'JBB', checked: true }; // employee
  clazz: Clazz = new Clazz(1, 2, 3);                   // Clazz
  clazz2: Clazz = new Clazz(1, 2);                     // Clazz
  clazz3: Clazz = new Clazz(1);                        // Clazz
  list1: number[] = [1, 2, 3];                         // number[]
  list2: Array<number> = [1, 2, 3];                    // number[]
  name: string | undefined;
  whoMyName(): string | undefined {
    return this.name;
  }
  myNameIs() {
    this.name = "Aitor Bernal";
  }
  myNoName() {
    this.name = undefined;
  }

  various(): string {
    let var1: string;                              // Se define variable
    const var2 = 'constante';                        // Se define constante
    var1 = '...';
    const clazz1: Clazz = new Clazz(1, 2, 3);
    let var3: number = clazz1.getX();
    var3 = clazz1.value;                             // Se utiliza como publico
    clazz1.value = var3;                              // Se utiliza como publico
    return 'function various...';
  }

  fuctions(): void {
    const employees = new Array<Employee>();           // Employee[]
    for (const employee of employees) {              // For each
      // console.log(employee);
    }
  }

  showEmployee(employee: Employee): string {
    return '{name:' + employee.name + ',value:' + employee.value + ',chequed:' + employee.checked + '}';
  }

}

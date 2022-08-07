import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent{

  heroes: string[] = ['Spiderman', 'Hulk', 'Ironman', 'Thor', 'Flash  '];
  deletedHeroe: string = '';

  deleteHeroe(): void {
    this.deletedHeroe = this.heroes.pop() || '';
  }
}

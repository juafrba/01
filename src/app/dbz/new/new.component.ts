import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
})
export class NewComponent {

  @Input() new: Character = {
    name: '',
    power: 0,
  };

  constructor(
    private dbzService: DbzService,
  ) { }

  add(): void {
    if (this.new.name.trim().length === 0) {
      return;
    }

    this.dbzService.addCharacter(this.new);
    this.new = {
      name: '',
      power: 0,
    };
  }
}

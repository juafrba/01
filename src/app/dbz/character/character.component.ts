import { Component, Input } from '@angular/core';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
})
export class CharacterComponent {
  get characters() {
    return this.dbzService.characters;
  }

  constructor(
    private dbzService: DbzService
  ) { }
}

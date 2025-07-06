import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardComponent } from '../../card/card.component';
import { CopyTableService } from '../../services/copy-table.service';
import { ButtonComponent } from '../../buttons/button/button.component';

@Component({
  selector: 'app-extras',
  standalone: true,
  imports: [CommonModule, RouterModule, CardComponent, ButtonComponent],
  templateUrl: './extras.component.html'
})
export class ExtrasComponent {
  
  constructor(public copyTableService: CopyTableService) { }

  copyableTable1Data = [
    ['Jony', 'Ive'],
    ['Matias', 'Duarte']
  ];
}

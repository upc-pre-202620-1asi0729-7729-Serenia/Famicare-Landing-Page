import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-opensource-section',
  standalone: true,
  imports: [TranslatePipe, IconComponent],
  templateUrl: './opensource-section.component.html',
  styleUrls: ['./opensource-section.component.css'],
})
export class OpensourceSectionComponent {}

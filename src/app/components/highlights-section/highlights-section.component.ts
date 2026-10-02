import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-highlights-section',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './highlights-section.component.html',
  styleUrls: ['./highlights-section.component.css'],
})
export class HighlightsSectionComponent {
  items = [0, 1, 2].map(i => `highlights.items.${i}`);
}

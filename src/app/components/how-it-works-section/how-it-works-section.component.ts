import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-how-it-works-section',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './how-it-works-section.component.html',
  styleUrls: ['./how-it-works-section.component.css'],
})
export class HowItWorksSectionComponent {
  steps = [0, 1, 2].map(i => `howItWorks.steps.${i}`);
}

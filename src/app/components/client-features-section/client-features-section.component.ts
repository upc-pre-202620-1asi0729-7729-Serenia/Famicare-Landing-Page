import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-client-features-section',
  standalone: true,
  imports: [TranslatePipe, IconComponent],
  templateUrl: './client-features-section.component.html',
  styleUrls: ['./client-features-section.component.css']
})
export class ClientFeaturesSectionComponent {
  points = [0, 1, 2].map(i => `clientFeatures.points.${i}`);
}

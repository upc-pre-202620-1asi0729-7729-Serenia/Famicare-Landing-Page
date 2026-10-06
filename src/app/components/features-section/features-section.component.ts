import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { IconComponent, IconName } from '../icon/icon.component';

interface Feature {
  key: string;
  icon: IconName;
}

@Component({
  selector: 'app-features-section',
  standalone: true,
  imports: [TranslatePipe, IconComponent],
  templateUrl: './features-section.component.html',
  styleUrls: ['./features-section.component.css']
})
export class FeaturesSectionComponent {
  features: Feature[] = [
    { key: 'location',    icon: 'location' },
    { key: 'safeZones',   icon: 'shield' },
    { key: 'alerts',      icon: 'alert' },
    { key: 'careNetwork', icon: 'people' },
  ];
}

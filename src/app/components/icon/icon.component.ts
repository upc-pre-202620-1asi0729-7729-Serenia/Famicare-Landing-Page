import { Component, input } from '@angular/core';

export type IconName =
  | 'alert'
  | 'arrow'
  | 'battery'
  | 'check'
  | 'code'
  | 'heart'
  | 'location'
  | 'menu'
  | 'people'
  | 'shield'
  | 'watch'
  | 'x';

@Component({
  selector: 'app-icon',
  standalone: true,
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css'],
})
export class IconComponent {
  name = input.required<IconName>();
  size = input<number>(22);
}

import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-about-team-section',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './about-team-section.component.html',
  styleUrls: ['./about-team-section.component.css'],
})
export class AboutTeamSectionComponent {}

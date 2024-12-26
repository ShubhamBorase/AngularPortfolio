import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  standalone: true,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  imagePath: string = 'images/luffy_painting.png';
  educationImage: string = 'images/education.png';
}

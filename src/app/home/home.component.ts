// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-home',
//   standalone: true,
//   imports: [],
//   templateUrl: './home.component.html',
//   styleUrl: './home.component.css'
// })
// export class HomeComponent {

// }
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  profilePicture: string = 'images/MonkeyDLuffy.jpg';
  resumeLink: string = 'resources/Other/Shubham_Borse_Resume.pdf';
  linkedinIcon: string = 'images/linkedin.png';
  githubIcon: string = 'images/github.png';
location: any;
window: any;
}

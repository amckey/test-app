import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Text } from '@angular/compiler/src/render3/r3_ast';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = '';

  headerItems = [
    {
      logo: true,
      name: 'MyLogo'
    },
    {
      section: true,
      name: 'About us'
    },
    {
      section: true,
      name: 'Our cover'
    },
    {
      section: true,
      name: 'Contact us'
    },
    {
      section: true,
      name: 'Help us'
    },
    {
      button: true,
      name: 'Back to your policies'
    },
  ]

  passTitle(title: any): void {
    this.title = title.name;
    console.log(this.title);
  }
}

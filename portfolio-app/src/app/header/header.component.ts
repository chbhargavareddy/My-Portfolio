import { BreakpointObserver } from '@angular/cdk/layout';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {  
  constructor(private breakpointObserver: BreakpointObserver) {
  }
  ngOnInit(): void {}
}

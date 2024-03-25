import { Directive, ElementRef } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Directive({
  selector: '[appResponsivePcOrWeb]'
})
export class ResponsivePcOrWebDirective {
  constructor(
    private element: ElementRef,
    private breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver
      .observe([Breakpoints.HandsetPortrait, Breakpoints.WebLandscape])
      .subscribe({
        next: (result: any) => {
          const isHandsetPortrait = result.breakpoints[Breakpoints.HandsetPortrait];
          const isWebLandscape = result.breakpoints[Breakpoints.WebLandscape];
          
          if (isHandsetPortrait) {
            // Apply styles for handset (e.g., remove 'pc' class)
            this.element.nativeElement.classList.remove('pc');
          } else if (isWebLandscape) {
            // Apply styles for web landscape (e.g., add 'pc' class)
            this.element.nativeElement.classList.add('pc');
          } else {
            // Apply default styles if neither handset portrait nor web landscape
            // This part is optional based on your requirements
          }
        }
      });
  }
}

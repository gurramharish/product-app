import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

// attribute level
// <h1 appHighlight>
// h1 is the host elements
// no templates, no stylesUrl

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input()
  color = '#bfff00';

  constructor(private hostElement: ElementRef, private renderer: Renderer2) {
    console.log('highlight directive created');
  }

  @HostListener('mouseenter')
  onEnter() {
    console.log('Mouse enter');
    this.renderer.setStyle(this.hostElement.nativeElement, 'background', this.color);
    this.renderer.setStyle(this.hostElement.nativeElement, 'color', '#ffffff');
  }

  @HostListener('mouseleave')
  onLeave() {
    console.log('mouse leave');
    this.renderer.removeStyle(this.hostElement.nativeElement, 'background');
    this.renderer.removeStyle(this.hostElement.nativeElement, 'color');
  }

}

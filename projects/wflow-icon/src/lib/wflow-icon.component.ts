import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Inject,
  Input,
  Optional,
} from '@angular/core';
import { WflowIconRegistry } from './wflow-icon.registry';

@Component({
  selector: 'wflow-icon',
  template: ` <ng-content></ng-content> `,
  styles: [
    `
      :host::ng-deep svg {
        display: block;
        width: 1em;
        height: 1em;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WflowIconComponent {
  private _svgIcon: SVGElement;

  @Input()
  set name(name: string) {    
    if (this._svgIcon) {
      this._element.nativeElement.removeChild(this._svgIcon);
    }
    const svgData = this._registry.getIcon(name);
    this._svgIcon = this._svgElementFromString(svgData);
    this._element.nativeElement.appendChild(this._svgIcon);
  }

  constructor(
    private _element: ElementRef,
    private _registry: WflowIconRegistry,
    @Optional() @Inject(DOCUMENT) private _document: Document
  ) {}

  private _svgElementFromString(svgContent: string): SVGElement {
    const div = this._document.createElement('DIV');
    div.innerHTML = svgContent;
    return (
      div.querySelector('svg') ||
      this._document.createElementNS('http://www.w3.org/2000/svg', 'path')
    );
  }
}

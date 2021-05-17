import { Injectable } from '@angular/core';
import { WflowIcon } from './wflow-icon.models';

@Injectable({
  providedIn: 'root'
})
export class WflowIconRegistry {
  private registry = new Map<string, string>();

  public registerIcon(icons: WflowIcon[]): void {
    icons.forEach((icon: WflowIcon) => this.registry.set(icon.name, icon.data));
  }

  public getIcon(iconName: string | null): string | undefined {
    if (!iconName) {
      return undefined;
    } else if (!this.registry.has(iconName)) {
      console.warn(
        `We could not find the wflow-icon Icon with name ${iconName}, did you add it to the Icon registry?`
      );
    }
    return this.registry.get(iconName);
  }
}

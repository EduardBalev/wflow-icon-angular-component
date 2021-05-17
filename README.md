# WflowIcon (BETA)

## Preparetions

in your module:

```ts
export class YourModule {
  constructor(private _iconRegistry: WflowIconRegistry) {
    this._iconRegistry.registerIcon([
      // ... import icons you need here.
      wiconCoins,
    ]);
  }
}
```

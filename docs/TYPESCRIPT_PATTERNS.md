# TypeScript Patterns in This Project

## Import Extensions

### Why .js extensions in TypeScript imports?

You may notice that imports in TypeScript files use `.js` extensions even though the actual files are `.ts`:

```typescript
// In src/index.ts
export { ProfileCard } from './components/profile-card.js';
export { SkillBadge } from './components/skill-badge.js';
```

This is **intentional** and follows ES module standards for TypeScript projects:

### Rationale

1. **ES Module Compliance**: When TypeScript compiles to JavaScript, it preserves import paths exactly as written. Using `.js` extensions ensures the compiled output has valid import paths that work in browsers and Node.js ESM.

2. **TypeScript Resolution**: TypeScript's module resolution understands that `.js` extensions in imports should map to `.ts` files during compilation (with `moduleResolution: "node"` in tsconfig.json).

3. **Best Practice**: This pattern is recommended by the TypeScript team and used in modern TypeScript projects, especially those targeting ES modules.

### Example

Source file: `src/components/profile-card.ts`
```typescript
// profile-card.ts
import { LitElement, html } from 'lit';
```

Import from another file:
```typescript
// index.ts
import { ProfileCard } from './components/profile-card.js';  // Note .js extension
```

After compilation:
```javascript
// dist/index.js
import { ProfileCard } from './components/profile-card.js';  // Works correctly
```

### Configuration

This pattern works with our tsconfig.json settings:
```json
{
  "compilerOptions": {
    "module": "ES2020",
    "moduleResolution": "node",
    "esModuleInterop": true
  }
}
```

### References

- [TypeScript Handbook: ES Module Interop](https://www.typescriptlang.org/docs/handbook/esm-node.html)
- [Node.js ES Modules](https://nodejs.org/api/esm.html)
- [TypeScript Issue #16577](https://github.com/microsoft/TypeScript/issues/16577)

## Other TypeScript Patterns

### Decorators

We use TypeScript decorators extensively with Lit:

```typescript
import { customElement, property, state } from 'lit/decorators.js';

@customElement('my-element')
export class MyElement extends LitElement {
  @property({ type: String })
  name: string = '';
  
  @state()
  private _count: number = 0;
}
```

Required tsconfig.json settings:
```json
{
  "compilerOptions": {
    "experimentalDecorators": true,
    "useDefineForClassFields": false
  }
}
```

### Strict Type Checking

We enable strict mode for maximum type safety:

```json
{
  "compilerOptions": {
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true
  }
}
```

This helps catch errors early and improves code quality.

### Type Definitions for Custom Elements

Always define your custom elements in the global HTMLElementTagNameMap:

```typescript
@customElement('my-element')
export class MyElement extends LitElement {
  // ... component implementation
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement;
  }
}
```

This enables TypeScript autocomplete and type checking in JSX/TSX and provides better IDE support.

### Template Result Types

Use TemplateResult for render method return types:

```typescript
import { TemplateResult } from 'lit';

render(): TemplateResult {
  return html`<div>Content</div>`;
}
```

For conditional rendering that might return nothing:

```typescript
import { TemplateResult } from 'lit';

private _renderOptional(): TemplateResult | typeof nothing {
  if (this.show) {
    return html`<div>Content</div>`;
  }
  return nothing;
}
```

### Event Types

Define proper types for custom events:

```typescript
interface MyEventDetail {
  value: string;
  timestamp: number;
}

this.dispatchEvent(
  new CustomEvent<MyEventDetail>('my-event', {
    detail: { value: 'test', timestamp: Date.now() },
    bubbles: true,
    composed: true,
  })
);
```

### Property Validators

Use TypeScript types to validate property values:

```typescript
type ButtonVariant = 'primary' | 'secondary' | 'danger';

@property({ type: String })
variant: ButtonVariant = 'primary';
```

This ensures only valid values can be assigned at compile time.

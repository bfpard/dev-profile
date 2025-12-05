# Lit Element Best Practices Guide

This document outlines the best practices for developing web components with Lit Element in this project.

## Table of Contents

1. [Component Architecture](#component-architecture)
2. [TypeScript Integration](#typescript-integration)
3. [Properties and State](#properties-and-state)
4. [Template Rendering](#template-rendering)
5. [Styling](#styling)
6. [Lifecycle Methods](#lifecycle-methods)
7. [Event Handling](#event-handling)
8. [Accessibility](#accessibility)
9. [Performance](#performance)
10. [Testing](#testing)

## Component Architecture

### Single Responsibility Principle

Each component should have a single, well-defined purpose:

```typescript
// Good: Focused component
@customElement('user-avatar')
export class UserAvatar extends LitElement {
  @property() src: string = '';
  @property() alt: string = '';
}

// Bad: Component doing too much
@customElement('user-profile')
export class UserProfile extends LitElement {
  // Contains avatar, bio, posts, friends, etc.
}
```

### Component Composition

Build complex UIs by composing simpler components:

```typescript
@customElement('user-card')
export class UserCard extends LitElement {
  render() {
    return html`
      <user-avatar .src=${this.avatarUrl}></user-avatar>
      <user-info .name=${this.name}></user-info>
      <user-stats .stats=${this.stats}></user-stats>
    `;
  }
}
```

## TypeScript Integration

### Always Use Type Annotations

```typescript
// Good
@property({ type: String })
name: string = '';

@property({ type: Number })
count: number = 0;

// Bad
@property()
name = '';

@property()
count = 0;
```

### Define Custom Types

```typescript
interface UserData {
  id: string;
  name: string;
  email: string;
}

@customElement('user-list')
export class UserList extends LitElement {
  @property({ type: Array })
  users: UserData[] = [];
}
```

## Properties and State

### Public Properties with @property

Use `@property()` for public, reactive properties that can be set via attributes:

```typescript
@property({ type: String, reflect: true })
status: 'active' | 'inactive' = 'inactive';

@property({ type: Number, attribute: 'item-count' })
itemCount: number = 0;
```

### Internal State with @state

Use `@state()` for internal, reactive state:

```typescript
@state()
private _isOpen: boolean = false;

@state()
private _selectedIndex: number = -1;
```

### Property Configuration

```typescript
@property({
  type: String,           // Type converter
  reflect: true,          // Reflect to attribute
  attribute: 'user-name', // Custom attribute name
  converter: {            // Custom converter
    fromAttribute: (value) => value?.toLowerCase(),
    toAttribute: (value) => value?.toUpperCase(),
  },
})
userName: string = '';
```

## Template Rendering

### Use Directives Efficiently

```typescript
import { map } from 'lit/directives/map.js';
import { when } from 'lit/directives/when.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';

render() {
  return html`
    ${when(
      this.isLoading,
      () => html`<loading-spinner></loading-spinner>`,
      () => html`
        <ul>
          ${map(this.items, (item) => html`
            <li class=${classMap({ active: item.selected })}>
              ${item.name}
            </li>
          `)}
        </ul>
      `
    )}
  `;
}
```

### Extract Complex Templates

```typescript
render() {
  return html`
    <div>
      ${this._renderHeader()}
      ${this._renderContent()}
      ${this._renderFooter()}
    </div>
  `;
}

private _renderHeader() {
  return html`<header>${this.title}</header>`;
}
```

### Conditional Rendering

```typescript
// Good: Use when() directive or ternary
${when(this.showDetails, () => this._renderDetails())}
${this.isActive ? html`<span>Active</span>` : null}

// For simple cases, short-circuit is fine
${this.hasError && html`<error-message></error-message>`}
```

## Styling

### Use Shadow DOM Styles

```typescript
static styles = css`
  :host {
    display: block;
    padding: 16px;
  }

  :host([hidden]) {
    display: none;
  }

  :host([disabled]) {
    opacity: 0.5;
    pointer-events: none;
  }
`;
```

### CSS Custom Properties for Theming

```typescript
static styles = css`
  :host {
    --card-bg: #ffffff;
    --card-text: #333333;
  }

  .card {
    background-color: var(--card-bg);
    color: var(--card-text);
  }

  @media (prefers-color-scheme: dark) {
    :host {
      --card-bg: #2a2a2a;
      --card-text: #eeeeee;
    }
  }
`;
```

### Responsive Design

```typescript
static styles = css`
  .container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 16px;
  }

  @media (max-width: 768px) {
    .container {
      grid-template-columns: 1fr;
    }
  }
`;
```

## Lifecycle Methods

### connectedCallback

```typescript
connectedCallback() {
  super.connectedCallback();
  // Setup code (add event listeners, start timers, etc.)
  window.addEventListener('resize', this._handleResize);
}
```

### disconnectedCallback

```typescript
disconnectedCallback() {
  super.disconnectedCallback();
  // Cleanup code (remove listeners, clear timers, etc.)
  window.removeEventListener('resize', this._handleResize);
}
```

### firstUpdated

```typescript
firstUpdated() {
  // One-time setup after first render
  const input = this.shadowRoot?.querySelector('input');
  input?.focus();
}
```

### updated

```typescript
updated(changedProperties: Map<string, unknown>) {
  // React to property changes
  if (changedProperties.has('userId')) {
    this._fetchUserData();
  }
}
```

## Event Handling

### Dispatch Custom Events

```typescript
private _handleClick(): void {
  this.dispatchEvent(
    new CustomEvent('item-selected', {
      detail: { id: this.itemId, value: this.value },
      bubbles: true,
      composed: true,
    })
  );
}
```

### Event Naming Conventions

```typescript
// Good: Use kebab-case for event names
this.dispatchEvent(new CustomEvent('value-changed'));
this.dispatchEvent(new CustomEvent('user-logged-in'));

// Bad: CamelCase or other formats
this.dispatchEvent(new CustomEvent('valueChanged'));
this.dispatchEvent(new CustomEvent('UserLoggedIn'));
```

### Type-Safe Event Handling

```typescript
// Define event detail interface
interface ItemSelectedDetail {
  id: string;
  value: string;
}

// Dispatch with proper typing
private _handleClick(): void {
  this.dispatchEvent(
    new CustomEvent<ItemSelectedDetail>('item-selected', {
      detail: { id: this.itemId, value: this.value },
      bubbles: true,
      composed: true,
    })
  );
}
```

## Accessibility

### Semantic HTML

```typescript
render() {
  return html`
    <article>
      <header>
        <h2>${this.title}</h2>
      </header>
      <main>${this.content}</main>
      <footer>
        <button @click=${this._handleClick}>
          Learn More
        </button>
      </footer>
    </article>
  `;
}
```

### ARIA Attributes

```typescript
render() {
  return html`
    <button
      aria-label="Close dialog"
      aria-expanded=${this.isOpen}
      aria-controls="dialog-content"
      @click=${this._handleClose}
    >
      ×
    </button>
  `;
}
```

### Keyboard Navigation

```typescript
private _handleKeyDown(e: KeyboardEvent): void {
  switch (e.key) {
    case 'Enter':
    case ' ':
      e.preventDefault();
      this._handleActivate();
      break;
    case 'Escape':
      this._handleClose();
      break;
    case 'ArrowUp':
    case 'ArrowDown':
      e.preventDefault();
      this._handleNavigation(e.key);
      break;
  }
}
```

### Focus Management

```typescript
@query('#main-button')
private _mainButton!: HTMLElement;

firstUpdated() {
  this._mainButton.focus();
}
```

## Performance

### Optimize shouldUpdate

```typescript
shouldUpdate(changedProperties: Map<string, unknown>): boolean {
  // Only update if specific properties changed
  return changedProperties.has('data') || changedProperties.has('isActive');
}
```

### Use requestUpdate Wisely

```typescript
// Good: Let Lit handle updates automatically
@state()
private _count = 0;

// Only use requestUpdate for external state
private _externalData: unknown;

updateExternalData(data: unknown): void {
  this._externalData = data;
  this.requestUpdate();
}
```

### Lazy Loading

```typescript
private async _loadComponent(): Promise<void> {
  const module = await import('./heavy-component.js');
  this._heavyComponent = module.HeavyComponent;
  this.requestUpdate();
}
```

## Testing

### Unit Testing Example

```typescript
import { fixture, html, expect } from '@open-wc/testing';
import './profile-card.js';

describe('ProfileCard', () => {
  it('renders with name and title', async () => {
    const el = await fixture(html`
      <profile-card name="John Doe" title="Developer"></profile-card>
    `);

    expect(el.shadowRoot?.querySelector('.name')?.textContent).to.equal('John Doe');
    expect(el.shadowRoot?.querySelector('.title')?.textContent).to.equal('Developer');
  });

  it('dispatches event on click when clickable', async () => {
    const el = await fixture(html`
      <profile-card clickable></profile-card>
    `);

    let eventFired = false;
    el.addEventListener('profile-click', () => {
      eventFired = true;
    });

    el.shadowRoot?.querySelector('.container')?.dispatchEvent(new Event('click'));
    expect(eventFired).to.be.true;
  });
});
```

## Additional Resources

- [Official Lit Documentation](https://lit.dev/docs/)
- [Lit Best Practices](https://lit.dev/docs/components/best-practices/)
- [Web Components Best Practices](https://web.dev/custom-elements-best-practices/)
- [Open Web Components](https://open-wc.org/)

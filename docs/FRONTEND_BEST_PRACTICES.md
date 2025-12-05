# Frontend Development Best Practices

This document outlines general frontend development best practices followed in this project.

## Code Quality

### 1. Code Style and Formatting

- **Use ESLint**: Catch potential issues and enforce consistent code style
- **Use Prettier**: Maintain consistent formatting across the codebase
- **Configure Editor**: Use EditorConfig for consistent coding styles

### 2. TypeScript Best Practices

```typescript
// Always use strict mode
"strict": true,
"noUnusedLocals": true,
"noUnusedParameters": true,
"noImplicitReturns": true

// Use explicit types for function parameters and return types
function calculateTotal(items: Item[]): number {
  return items.reduce((sum, item) => sum + item.price, 0);
}

// Avoid 'any' type
// Bad
function process(data: any): any {}

// Good
function process(data: UserData): ProcessedData {}
```

### 3. Naming Conventions

- **Components**: PascalCase (`ProfileCard`, `SkillBadge`)
- **Variables/Functions**: camelCase (`userName`, `handleClick`)
- **Constants**: UPPER_SNAKE_CASE (`MAX_ITEMS`, `API_URL`)
- **Private members**: Prefix with underscore (`_internalState`)
- **CSS classes**: kebab-case (`profile-card`, `skill-badge`)
- **Custom events**: kebab-case (`value-changed`, `item-selected`)

## Project Structure

```
src/
├── components/          # UI components
│   ├── profile-card.ts
│   └── skill-badge.ts
├── utils/              # Utility functions
├── types/              # TypeScript type definitions
├── styles/             # Global styles
└── index.ts            # Entry point
```

## Performance

### 1. Bundle Optimization

- Use code splitting for large applications
- Lazy load components when possible
- Tree-shake unused code
- Minimize bundle size

### 2. Image Optimization

```html
<!-- Use loading="lazy" for images -->
<img src="image.jpg" alt="Description" loading="lazy" />

<!-- Use modern formats -->
<picture>
  <source srcset="image.webp" type="image/webp" />
  <source srcset="image.jpg" type="image/jpeg" />
  <img src="image.jpg" alt="Description" />
</picture>
```

### 3. Web Performance Metrics

Monitor and optimize:
- First Contentful Paint (FCP)
- Largest Contentful Paint (LCP)
- Cumulative Layout Shift (CLS)
- First Input Delay (FID)
- Time to Interactive (TTI)

## Accessibility (a11y)

### 1. Semantic HTML

```html
<!-- Good: Use semantic elements -->
<nav>
  <ul>
    <li><a href="#home">Home</a></li>
  </ul>
</nav>

<!-- Bad: Generic divs -->
<div class="nav">
  <div class="list">
    <div class="item"><a href="#home">Home</a></div>
  </div>
</div>
```

### 2. ARIA Attributes

```html
<!-- When semantic HTML isn't enough -->
<div role="button" aria-label="Close" tabindex="0">×</div>

<!-- Status updates -->
<div role="status" aria-live="polite">
  Loading...
</div>

<!-- Expanded/collapsed state -->
<button aria-expanded="false" aria-controls="menu">
  Menu
</button>
```

### 3. Keyboard Navigation

- All interactive elements must be keyboard accessible
- Use proper `tabindex` values
- Provide visible focus indicators
- Support standard keyboard shortcuts (Enter, Space, Escape, Arrow keys)

### 4. Color Contrast

- Maintain WCAG AA level contrast ratios (4.5:1 for normal text)
- Don't rely solely on color to convey information
- Support high contrast mode

## Security

### 1. Input Sanitization

```typescript
// Always sanitize user input
import { html } from 'lit';

// Good: Lit automatically escapes content
render() {
  return html`<div>${this.userInput}</div>`;
}

// Bad: Direct innerHTML
element.innerHTML = userInput;
```

### 2. Content Security Policy

```html
<!-- Set CSP headers -->
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; script-src 'self'">
```

### 3. Secure Dependencies

- Regularly update dependencies
- Use `npm audit` to check for vulnerabilities
- Review security advisories

## Responsive Design

### 1. Mobile-First Approach

```css
/* Base styles for mobile */
.container {
  padding: 8px;
}

/* Enhance for larger screens */
@media (min-width: 768px) {
  .container {
    padding: 16px;
  }
}

@media (min-width: 1024px) {
  .container {
    padding: 24px;
  }
}
```

### 2. Flexible Layouts

```css
/* Use CSS Grid and Flexbox */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
}

.flex {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}
```

### 3. Responsive Typography

```css
/* Use relative units */
body {
  font-size: clamp(1rem, 2vw, 1.25rem);
}

h1 {
  font-size: clamp(1.5rem, 4vw, 3rem);
}
```

## Version Control

### 1. Commit Messages

Follow Conventional Commits:

```
feat: add profile card component
fix: resolve avatar image loading issue
docs: update component documentation
style: format code with prettier
refactor: simplify event handling logic
test: add unit tests for skill badge
chore: update dependencies
```

### 2. Branch Strategy

- `main`: Production-ready code
- `develop`: Development branch
- `feature/*`: New features
- `fix/*`: Bug fixes
- `hotfix/*`: Critical fixes for production

## Documentation

### 1. Code Documentation

```typescript
/**
 * Calculate the total price of items
 * 
 * @param items - Array of items to calculate
 * @param taxRate - Tax rate to apply (default: 0)
 * @returns Total price including tax
 * 
 * @example
 * ```typescript
 * const total = calculateTotal([{ price: 10 }, { price: 20 }], 0.1);
 * console.log(total); // 33
 * ```
 */
function calculateTotal(items: Item[], taxRate: number = 0): number {
  const subtotal = items.reduce((sum, item) => sum + item.price, 0);
  return subtotal * (1 + taxRate);
}
```

### 2. Component Documentation

- Document all public properties and methods
- Include usage examples
- Describe emitted events
- Document CSS custom properties
- List available slots

### 3. Project Documentation

Maintain these files:
- `README.md`: Project overview and setup
- `CONTRIBUTING.md`: Contribution guidelines
- `CHANGELOG.md`: Version history
- `docs/`: Detailed documentation

## Testing

### 1. Test Coverage

Aim for high test coverage:
- Unit tests for business logic
- Component tests for UI components
- Integration tests for features
- End-to-end tests for critical flows

### 2. Test Structure

```typescript
describe('ComponentName', () => {
  describe('when initialized', () => {
    it('should have default values', () => {
      // Test
    });
  });

  describe('when user interacts', () => {
    it('should update state', () => {
      // Test
    });

    it('should emit events', () => {
      // Test
    });
  });
});
```

## Build and Deployment

### 1. Environment Variables

```typescript
// Use environment-specific configuration
const API_URL = import.meta.env.VITE_API_URL;
const IS_PRODUCTION = import.meta.env.PROD;
```

### 2. Production Optimization

```typescript
// vite.config.ts
export default defineConfig({
  build: {
    minify: 'terser',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['lit'],
        },
      },
    },
  },
});
```

### 3. Deployment Checklist

- [ ] Run linters and fix issues
- [ ] Run tests and ensure they pass
- [ ] Update version number
- [ ] Update CHANGELOG
- [ ] Build for production
- [ ] Test production build locally
- [ ] Deploy to staging
- [ ] Verify staging deployment
- [ ] Deploy to production
- [ ] Monitor for errors

## Browser Support

### 1. Define Target Browsers

```json
// .browserslistrc
> 0.5%
last 2 versions
Firefox ESR
not dead
not IE 11
```

### 2. Feature Detection

```typescript
// Check for feature support
if ('ResizeObserver' in window) {
  // Use ResizeObserver
} else {
  // Fallback
}
```

## Monitoring and Analytics

### 1. Error Tracking

- Implement error boundaries
- Log errors to monitoring service
- Track error patterns

### 2. Performance Monitoring

- Use Web Vitals
- Monitor bundle sizes
- Track loading times

### 3. User Analytics

- Track user interactions (with consent)
- Monitor feature usage
- Gather feedback

## Continuous Improvement

- Regular code reviews
- Refactor technical debt
- Stay updated with best practices
- Learn from mistakes
- Share knowledge with team

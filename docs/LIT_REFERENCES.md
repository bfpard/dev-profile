# Lit Element References and Resources

A curated collection of official documentation, tutorials, and resources for Lit Element development.

## Official Documentation

### Core Documentation
- [Lit Homepage](https://lit.dev/) - Official Lit website
- [Getting Started](https://lit.dev/docs/getting-started/) - Quick start guide
- [Components Overview](https://lit.dev/docs/components/overview/) - Component fundamentals
- [Templates](https://lit.dev/docs/templates/overview/) - Template syntax and features
- [Styles](https://lit.dev/docs/components/styles/) - Styling components
- [Lifecycle](https://lit.dev/docs/components/lifecycle/) - Component lifecycle
- [Reactive Properties](https://lit.dev/docs/components/properties/) - Managing component state
- [Events](https://lit.dev/docs/components/events/) - Handling and dispatching events

### Advanced Topics
- [Decorators](https://lit.dev/docs/components/decorators/) - Using TypeScript decorators
- [Shadow DOM](https://lit.dev/docs/components/shadow-dom/) - Understanding Shadow DOM
- [Directives](https://lit.dev/docs/templates/directives/) - Template directives
- [Custom Directives](https://lit.dev/docs/templates/custom-directives/) - Creating custom directives
- [Server-Side Rendering (SSR)](https://lit.dev/docs/ssr/overview/) - Rendering on the server
- [Localization](https://lit.dev/docs/localization/overview/) - Internationalizing components

### Tools and Testing
- [Development Tools](https://lit.dev/docs/tools/overview/) - IDE support and tools
- [Testing](https://lit.dev/docs/tools/testing/) - Testing Lit components
- [Publishing](https://lit.dev/docs/tools/publishing/) - Publishing components
- [Production Build](https://lit.dev/docs/tools/production/) - Optimizing for production

## Interactive Learning

### Playgrounds and Examples
- [Lit Playground](https://lit.dev/playground/) - Interactive code playground
- [Lit Examples](https://lit.dev/examples/) - Component examples
- [Tutorial: Intro to Lit](https://lit.dev/tutorials/intro-to-lit/) - Interactive tutorial
- [Tutorial: Building a Blog](https://lit.dev/tutorials/blog/) - Step-by-step tutorial
- [Tutorial: Word Viewer](https://lit.dev/tutorials/word-viewer/) - Advanced tutorial

### Sample Projects
- [Lit Starter Kits](https://lit.dev/docs/tools/starter-kits/) - Project templates
- [Lit Element Starter TypeScript](https://github.com/lit/lit-element-starter-ts) - TypeScript starter

## Web Components Standards

### Specifications
- [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components) - MDN Web Components
- [Custom Elements](https://html.spec.whatwg.org/multipage/custom-elements.html) - WHATWG spec
- [Shadow DOM](https://dom.spec.whatwg.org/#shadow-trees) - WHATWG spec
- [HTML Templates](https://html.spec.whatwg.org/multipage/scripting.html#the-template-element) - WHATWG spec

### Best Practices
- [Custom Elements Best Practices](https://web.dev/custom-elements-best-practices/) - Google Web.dev
- [Web Components Best Practices](https://web.dev/web-components-best-practices/) - Google Web.dev
- [Building Components](https://web.dev/building-components/) - Component design patterns

## TypeScript Integration

### TypeScript with Lit
- [TypeScript Guide](https://lit.dev/docs/components/typescript/) - Official TypeScript guide
- [Decorators](https://lit.dev/docs/components/decorators/) - Using decorators
- [TypeScript Handbook](https://www.typescriptlang.org/docs/) - TypeScript documentation

### Type Definitions
```typescript
// Common Lit types
import { LitElement, html, css, PropertyValues, TemplateResult } from 'lit';
import { customElement, property, state, query, queryAll } from 'lit/decorators.js';
import { ClassInfo, StyleInfo } from 'lit/directives/class-map.js';
```

## Accessibility

### Guidelines and Resources
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/) - Accessibility standards
- [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/) - ARIA patterns
- [WebAIM](https://webaim.org/) - Accessibility resources
- [A11y Project](https://www.a11yproject.com/) - Community-driven accessibility

### Testing Tools
- [axe DevTools](https://www.deque.com/axe/devtools/) - Accessibility testing
- [WAVE](https://wave.webaim.org/) - Web accessibility evaluation
- [Lighthouse](https://developers.google.com/web/tools/lighthouse) - Automated auditing

## Performance

### Resources
- [Web Performance](https://web.dev/performance/) - Performance guides
- [Web Vitals](https://web.dev/vitals/) - Core metrics
- [JavaScript Performance](https://developer.mozilla.org/en-US/docs/Web/Performance) - MDN guide

### Lit-Specific Performance
- [Performance Best Practices](https://lit.dev/docs/components/performance/) - Lit performance guide
- [Virtual Scroller](https://lit.dev/docs/components/virtual-scroller/) - Efficient list rendering

## Styling and Design

### CSS and Theming
- [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) - MDN guide
- [Constructable Stylesheets](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet) - MDN guide
- [Theming Lit Components](https://lit.dev/docs/components/styles/#theming) - Official guide

### Design Systems
- [Material Web Components](https://github.com/material-components/material-web) - Material Design in Lit
- [Shoelace](https://shoelace.style/) - Web component library
- [Lion](https://lion-web.netlify.app/) - Accessible component library

## Build Tools

### Vite
- [Vite Documentation](https://vitejs.dev/) - Official docs
- [Vite with Lit](https://vitejs.dev/guide/features.html#web-components) - Web Components support

### Other Tools
- [Rollup](https://rollupjs.org/) - Module bundler
- [esbuild](https://esbuild.github.io/) - Fast JavaScript bundler
- [Web Dev Server](https://modern-web.dev/docs/dev-server/overview/) - Development server

## Testing

### Testing Libraries
- [Open Web Components Testing](https://open-wc.org/docs/testing/testing-package/) - Testing package
- [@web/test-runner](https://modern-web.dev/docs/test-runner/overview/) - Test runner
- [Playwright](https://playwright.dev/) - End-to-end testing
- [Testing Library](https://testing-library.com/) - User-centric testing

### Testing Guides
- [Testing Lit Components](https://lit.dev/docs/tools/testing/) - Official guide
- [Web Component Testing](https://open-wc.org/guides/testing/) - Best practices

## Community and Support

### Official Channels
- [Lit Discord](https://lit.dev/discord/) - Community chat
- [Lit GitHub](https://github.com/lit/lit) - Source code
- [Lit Blog](https://lit.dev/blog/) - News and updates
- [Twitter: @buildWithLit](https://twitter.com/buildWithLit) - Official Twitter

### Community Resources
- [Awesome Lit](https://github.com/web-padawan/awesome-lit) - Curated resources
- [Stack Overflow](https://stackoverflow.com/questions/tagged/lit-element) - Q&A
- [dev.to #webcomponents](https://dev.to/t/webcomponents) - Articles and tutorials

## Packages and Extensions

### Core Packages
```bash
npm install lit                    # Core Lit package
npm install @lit/reactive-element  # Base class
npm install lit-html               # Template engine
npm install lit-element            # Legacy (use 'lit' instead)
```

### Useful Lit Packages
- [@lit/localize](https://www.npmjs.com/package/@lit/localize) - Localization
- [@lit/task](https://www.npmjs.com/package/@lit/task) - Async task management
- [@lit/context](https://www.npmjs.com/package/@lit/context) - Context API
- [@lit/react](https://www.npmjs.com/package/@lit/react) - React integration

### Development Tools
- [lit-plugin](https://github.com/runem/lit-analyzer) - VS Code extension
- [eslint-plugin-lit](https://www.npmjs.com/package/eslint-plugin-lit) - ESLint plugin
- [eslint-plugin-lit-a11y](https://www.npmjs.com/package/eslint-plugin-lit-a11y) - Accessibility linting

## Patterns and Recipes

### Common Patterns
- [Component Composition](https://lit.dev/docs/composition/component-composition/) - Building with components
- [Controllers](https://lit.dev/docs/composition/controllers/) - Reusable behavior
- [Mixins](https://lit.dev/docs/composition/mixins/) - Class mixins
- [Forms](https://lit.dev/docs/forms/overview/) - Working with forms

### Code Snippets
```typescript
// Lazy loading
private async _loadModule() {
  const module = await import('./heavy-component.js');
  this._component = module.HeavyComponent;
  this.requestUpdate();
}

// Debouncing
private _handleInput = debounce((e: Event) => {
  this._search((e.target as HTMLInputElement).value);
}, 300);

// Portal pattern
render() {
  return html`
    <div id="portal-root"></div>
    ${this._portalContent 
      ? createPortal(this._portalContent, this.renderRoot.querySelector('#portal-root'))
      : null}
  `;
}
```

## Video Tutorials

### Official
- [Lit Launch Event](https://www.youtube.com/watch?v=f1j7b696L-E) - Introduction to Lit 2.0
- [Chrome Dev Summit](https://www.youtube.com/results?search_query=lit+element+chrome+dev+summit) - Various talks

### Community
- [Lit Element Crash Course](https://www.youtube.com/results?search_query=lit+element+crash+course) - Beginner tutorials
- [Web Components with Lit](https://www.youtube.com/results?search_query=web+components+lit) - Various tutorials

## Migration Guides

### Upgrading
- [Upgrade Guide](https://lit.dev/docs/releases/upgrade/) - Version migration
- [From Polymer](https://lit.dev/docs/tools/polymer/) - Polymer to Lit
- [From LitElement 2.x](https://lit.dev/docs/releases/upgrade/#lit-2) - Upgrading from v2

## Books and Courses

### Learning Resources
- [Frontend Masters: Web Components](https://frontendmasters.com/courses/web-components/) - Comprehensive course
- [Udemy: Lit Courses](https://www.udemy.com/topic/lit-element/) - Various courses
- [Pluralsight: Web Components](https://www.pluralsight.com/search?q=web%20components) - Professional training

## Contributing to Lit

### Development
- [Contributing Guide](https://github.com/lit/lit/blob/main/CONTRIBUTING.md) - How to contribute
- [Development Guide](https://github.com/lit/lit/blob/main/docs/development.md) - Setting up development
- [Code of Conduct](https://github.com/lit/lit/blob/main/CODE_OF_CONDUCT.md) - Community guidelines

## Related Technologies

### Complementary Libraries
- [Lit Router](https://github.com/thepassle/app-tools/tree/master/router) - Routing
- [Pwa Helpers](https://github.com/thepassle/pwa-helpers) - PWA utilities
- [GraphQL](https://www.apollographql.com/docs/) - Data fetching
- [State Management](https://redux.js.org/) - Global state

### Alternative Frameworks
- [Stencil](https://stenciljs.com/) - Web component compiler
- [FAST](https://www.fast.design/) - Microsoft's web components
- [Hybrids](https://hybrids.js.org/) - UI library

## Stay Updated

### Release Notes
- [Lit Releases](https://github.com/lit/lit/releases) - GitHub releases
- [Changelog](https://github.com/lit/lit/blob/main/CHANGELOG.md) - Detailed changes
- [Blog](https://lit.dev/blog/) - Announcements and articles

### Following Best Practices
- Star and watch the [Lit GitHub repo](https://github.com/lit/lit)
- Join the [Lit Discord](https://lit.dev/discord/)
- Follow [@buildWithLit](https://twitter.com/buildWithLit) on Twitter
- Subscribe to the [Lit blog](https://lit.dev/blog/)

---

This reference list is maintained to provide quick access to the most relevant and up-to-date resources for Lit Element development. Bookmark this page for easy reference during development.

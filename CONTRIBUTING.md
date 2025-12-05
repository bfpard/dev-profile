# Contributing to Dev Profile

Thank you for your interest in contributing! This document provides guidelines for contributing to this project.

## Getting Started

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/YOUR_USERNAME/dev-profile.git
   cd dev-profile
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Development Workflow

### Running the Project

```bash
# Start development server
npm run dev

# Build the project
npm run build

# Preview production build
npm run preview
```

### Code Quality

Before committing, ensure your code passes all checks:

```bash
# Run linter
npm run lint

# Fix linting issues
npm run lint:fix

# Format code
npm run format

# Run tests (when available)
npm test
```

### Making Changes

1. **Follow the existing code style**: Use ESLint and Prettier configurations
2. **Write TypeScript**: Use proper types and interfaces
3. **Document your code**: Add JSDoc comments for public APIs
4. **Follow Lit best practices**: See [docs/LIT_BEST_PRACTICES.md](docs/LIT_BEST_PRACTICES.md)
5. **Ensure accessibility**: Follow WCAG guidelines
6. **Test your changes**: Manually test all changes

### Component Guidelines

When creating or modifying components:

- Use TypeScript with decorators
- Define all properties with proper types
- Include JSDoc documentation
- Implement accessibility features
- Support keyboard navigation
- Emit custom events with proper detail
- Use CSS custom properties for theming
- Support dark mode
- Write responsive CSS

Example component structure:

```typescript
import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

/**
 * Component description
 * 
 * @element my-component
 * @fires {CustomEvent} event-name - Event description
 * @slot - Slot description
 * @csspart part-name - Part description
 */
@customElement('my-component')
export class MyComponent extends LitElement {
  static styles = css`
    /* Component styles */
  `;

  @property({ type: String })
  myProp: string = '';

  render() {
    return html`
      <!-- Template -->
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-component': MyComponent;
  }
}
```

## Commit Messages

Use [Conventional Commits](https://www.conventionalcommits.org/) format:

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, no code change)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### Examples

```
feat(components): add user profile component
fix(profile-card): resolve avatar loading issue
docs(readme): update installation instructions
style: format code with prettier
refactor(skill-badge): simplify event handling
test(profile-card): add unit tests
chore: update dependencies
```

## Pull Request Process

1. **Update documentation**: If you add features, update README and relevant docs
2. **Follow code style**: Ensure ESLint and Prettier pass
3. **Write descriptive PR title**: Use conventional commit format
4. **Describe your changes**: Explain what, why, and how
5. **Link related issues**: Reference issues your PR addresses
6. **Request review**: Tag maintainers for review

### PR Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Changes Made
- Change 1
- Change 2

## Testing
How have you tested these changes?

## Checklist
- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex code
- [ ] Documentation updated
- [ ] No new warnings generated
- [ ] Tests added/updated (if applicable)
```

## Code Review

All submissions require review. We use GitHub pull requests for this purpose.

Reviewers will check for:
- Code quality and style
- Best practices adherence
- Documentation completeness
- Test coverage (when applicable)
- Accessibility compliance
- Performance considerations

## Questions or Issues?

- Open an issue for bugs or feature requests
- Use discussions for questions
- Be respectful and constructive

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

## Thank You!

Your contributions help make this project better for everyone! 🙏

# Dev Profile - Lit Element Base Repository

Professional Profile web components built with Lit Element. This repository serves as a base for creating custom agents that understand Lit Element best practices and modern frontend development.

## 📚 Overview

This repository provides:
- ✅ Complete Lit Element development setup with TypeScript
- ✅ Sample components demonstrating best practices
- ✅ Comprehensive documentation and guidelines
- ✅ Custom agent configuration for Lit Element expertise
- ✅ ESLint and Prettier configuration for code quality
- ✅ Vite for fast development and building

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm 9+

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📦 Project Structure

```
dev-profile/
├── .github/
│   └── agents/              # Custom agent configurations
│       └── lit-element-agent.md
├── docs/                    # Documentation
│   ├── LIT_BEST_PRACTICES.md
│   └── FRONTEND_BEST_PRACTICES.md
├── src/
│   ├── components/          # Lit components
│   │   ├── profile-card.ts
│   │   └── skill-badge.ts
│   └── index.ts             # Entry point
├── .eslintrc.json           # ESLint configuration
├── .prettierrc.json         # Prettier configuration
├── tsconfig.json            # TypeScript configuration
├── vite.config.ts           # Vite configuration
└── package.json
```

## 🧩 Components

### ProfileCard

A professional profile card component with customizable appearance.

```html
<profile-card
  name="John Doe"
  title="Frontend Developer"
  avatar="https://example.com/avatar.jpg"
  clickable
>
  <p>Additional content goes here</p>
</profile-card>
```

**Properties:**
- `name`: string - The person's name
- `title`: string - Professional title
- `avatar`: string - Avatar image URL
- `clickable`: boolean - Whether the card is clickable

**Events:**
- `profile-click`: Dispatched when the card is clicked (if clickable)

### SkillBadge

A badge component for displaying skills with proficiency levels.

```html
<skill-badge skill="TypeScript" level="advanced"></skill-badge>
<skill-badge skill="Lit" level="expert" clickable></skill-badge>
```

**Properties:**
- `skill`: string - The skill or tag name
- `level`: 'beginner' | 'intermediate' | 'advanced' | 'expert'
- `clickable`: boolean - Whether the badge is clickable

**Events:**
- `badge-click`: Dispatched when the badge is clicked (if clickable)

## 🎨 Styling and Theming

Components use CSS custom properties for theming:

```css
profile-card {
  --profile-bg-color: #ffffff;
  --profile-border-color: #e0e0e0;
  --profile-accent-color: #0066cc;
  --profile-text-primary: #1a1a1a;
  --profile-text-secondary: #666666;
}

skill-badge {
  --skill-advanced-bg: #e8f5e9;
  --skill-advanced-text: #388e3c;
}
```

Components automatically adapt to dark mode using `prefers-color-scheme`.

## 🤖 Custom Agent

This repository includes a custom agent configuration for Lit Element development. The agent has expertise in:

- Lit Element architecture and reactive properties
- Web Components best practices
- TypeScript integration with decorators
- Accessibility (a11y) guidelines
- Performance optimization
- Testing strategies
- Modern frontend development

The agent configuration is located in `.github/agents/lit-element-agent.md`.

## 📖 Documentation

- **[Lit Best Practices](docs/LIT_BEST_PRACTICES.md)**: Comprehensive guide to Lit Element development
- **[Frontend Best Practices](docs/FRONTEND_BEST_PRACTICES.md)**: General frontend development guidelines

## 🛠️ Development

### Code Quality

```bash
# Lint code
npm run lint

# Lint and fix
npm run lint:fix

# Format code
npm run format
```

### TypeScript

This project uses TypeScript with strict mode enabled for type safety.

### ESLint Configuration

- ESLint with TypeScript support
- Lit-specific rules (`eslint-plugin-lit`)
- Accessibility rules (`eslint-plugin-lit-a11y`)
- Prettier integration

## 🎯 Best Practices Followed

### Lit Element
- ✅ TypeScript decorators (@customElement, @property, @state)
- ✅ Shadow DOM styling with CSS custom properties
- ✅ Semantic HTML and ARIA attributes
- ✅ Custom event dispatching
- ✅ Keyboard navigation support
- ✅ Responsive design
- ✅ Dark mode support

### Frontend Development
- ✅ Code linting and formatting
- ✅ Strict TypeScript configuration
- ✅ Component composition
- ✅ Accessibility compliance
- ✅ Performance optimization
- ✅ Documentation

## 📚 Learning Resources

### Official Documentation
- [Lit Documentation](https://lit.dev/docs/)
- [Lit Playground](https://lit.dev/playground/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

### Best Practices
- [Web Components Best Practices](https://web.dev/custom-elements-best-practices/)
- [Open Web Components](https://open-wc.org/)
- [WCAG Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

### Community
- [Lit Discord](https://lit.dev/discord/)
- [Web Components Community Group](https://www.w3.org/community/webcomponents/)

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes following the project's best practices
4. Lint and format your code (`npm run lint:fix && npm run format`)
5. Commit your changes with conventional commits
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

## 📄 License

MIT License - see LICENSE file for details

## 🙏 Acknowledgments

- [Lit Team](https://lit.dev/) for the amazing framework
- Web Components community
- All contributors to this project

---

Built with ❤️ using [Lit](https://lit.dev/)

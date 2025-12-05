# Custom Agent Usage Guide

This repository includes a custom agent configuration specifically designed for Lit Element development. This guide explains how to use the agent effectively.

## Agent Overview

The Lit Element Custom Agent is an expert in:
- Lit 3.x framework and architecture
- Web Components best practices
- TypeScript with decorators
- Frontend development patterns
- Accessibility (a11y) standards
- Performance optimization
- Testing strategies

## Agent Configuration

The agent configuration is located at `.github/agents/lit-element-agent.md`.

## Using the Agent

### When to Use the Agent

The agent is designed to help with:

1. **Creating New Components**
   - Generating Lit components with proper structure
   - Implementing best practices from the start
   - Ensuring type safety and proper decorators

2. **Code Review**
   - Identifying anti-patterns
   - Suggesting improvements
   - Ensuring accessibility compliance

3. **Refactoring**
   - Modernizing legacy components
   - Improving performance
   - Enhancing maintainability

4. **Problem Solving**
   - Debugging component issues
   - Implementing complex features
   - Optimizing rendering

5. **Learning**
   - Understanding Lit concepts
   - Exploring best practices
   - Getting code examples

### Example Prompts

#### Creating a New Component

```
Create a new Lit component called 'notification-toast' that displays 
temporary notifications. It should:
- Accept message, type (success, error, info, warning), and duration
- Auto-dismiss after the specified duration
- Support manual dismissal
- Be accessible and keyboard navigable
- Emit events when dismissed
- Support theming with CSS custom properties
```

#### Code Review

```
Review this Lit component and suggest improvements following best practices:
[paste your component code]

Focus on:
- TypeScript typing
- Accessibility
- Performance
- Code organization
- Event handling
```

#### Refactoring

```
Refactor this component to use Lit 3.x best practices:
[paste legacy code]

Ensure:
- Proper use of decorators
- Type safety
- Modern template patterns
- Shadow DOM styling
```

#### Problem Solving

```
I have a Lit component that re-renders too frequently. How can I optimize it?
The component updates whenever any property changes, even unrelated ones.
[paste problematic code]
```

## Best Practices for Working with the Agent

### 1. Be Specific

Instead of:
```
Make this component better
```

Use:
```
Improve this component's accessibility by adding proper ARIA attributes 
and keyboard navigation for the dropdown menu
```

### 2. Provide Context

Include:
- Relevant code snippets
- Component requirements
- Constraints or limitations
- Existing patterns in your codebase

### 3. Ask for Explanations

Don't just ask for code, understand why:
```
Explain why using @state() is better than @property() for internal state,
and show examples of when to use each
```

### 4. Request Best Practices

```
What are the best practices for handling form validation in Lit components?
Show me a complete example with proper error handling and accessibility.
```

### 5. Iterate

Start simple and refine:
```
First: Create a basic button component
Then: Add loading state and disabled functionality
Finally: Make it fully accessible with ARIA attributes
```

## Agent Capabilities

### Code Generation

The agent can generate:
- Complete component files
- Template structures
- Style definitions
- Type definitions
- Event handlers
- Lifecycle methods

### Code Analysis

The agent can analyze:
- Component structure
- Performance bottlenecks
- Accessibility issues
- Type safety problems
- Best practice violations

### Documentation

The agent can create:
- JSDoc comments
- Usage examples
- API documentation
- Integration guides

## Examples

### Example 1: Creating a Data Table Component

**Prompt:**
```
Create a Lit component for displaying data in a table with these features:
- Generic type support for row data
- Column configuration (header, accessor, formatter)
- Sorting by clicking column headers
- Row selection with checkboxes
- Accessible with proper ARIA attributes
- Responsive design
- Support for custom cell rendering
```

**Expected Output:**
- Complete TypeScript component file
- Proper type definitions
- Accessible markup
- Event handling for sorting and selection
- Responsive CSS with custom properties

### Example 2: Form Component with Validation

**Prompt:**
```
Create a form component that:
- Manages multiple form fields
- Validates on blur and submit
- Shows error messages
- Supports disabled state
- Emits form-submit event with validated data
- Uses proper ARIA for error announcements
- Follows Lit best practices
```

**Expected Output:**
- Form component with validation logic
- Error handling and display
- Accessibility features
- Type-safe event dispatching
- Comprehensive documentation

### Example 3: Review and Optimize

**Prompt:**
```
Review this component for performance issues:
[paste component that re-renders frequently]

Specifically check:
- Unnecessary re-renders
- Property configuration
- Template complexity
- Event listener efficiency
```

**Expected Output:**
- Analysis of performance issues
- Specific recommendations
- Refactored code examples
- Explanation of changes

## Agent Limitations

The agent:
- Cannot access external APIs or services
- Cannot run or test code
- Cannot modify files directly (requires user action)
- Works best with Lit-specific questions

For best results:
- Focus on Lit Element and web component questions
- Provide complete code context
- Be specific about requirements
- Ask follow-up questions for clarification

## Learning Resources

The agent's knowledge is based on:
- [Official Lit Documentation](https://lit.dev/docs/)
- [Web Components Best Practices](https://web.dev/custom-elements-best-practices/)
- [WCAG Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- Modern frontend development patterns

For deeper learning, refer to these resources in addition to using the agent.

## Feedback and Improvements

If you find areas where the agent could be improved:
1. Document the issue or limitation
2. Provide examples of expected vs actual behavior
3. Suggest improvements to the agent configuration
4. Share with the community

## Conclusion

The Lit Element Custom Agent is a powerful tool for developing high-quality web components. Use it throughout your development process:
- Planning new components
- Writing code
- Reviewing changes
- Refactoring
- Learning best practices

By following this guide and the best practices outlined in the repository documentation, you can create maintainable, accessible, and performant Lit components.

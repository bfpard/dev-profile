import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

/**
 * A badge component for displaying skills or tags
 *
 * @element skill-badge
 * @fires {CustomEvent} badge-click - Dispatched when badge is clicked
 * @csspart badge - The badge element
 *
 * @example
 * ```html
 * <skill-badge skill="TypeScript" level="advanced"></skill-badge>
 * <skill-badge skill="Lit" level="intermediate"></skill-badge>
 * ```
 */
@customElement('skill-badge')
export class SkillBadge extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
    }

    .badge {
      display: inline-flex;
      align-items: center;
      padding: 6px 12px;
      border-radius: 16px;
      font-size: 0.875rem;
      font-weight: 500;
      cursor: default;
      transition: transform 0.2s ease;
      user-select: none;
    }

    .badge.clickable {
      cursor: pointer;
    }

    .badge.clickable:hover {
      transform: scale(1.05);
    }

    .badge.beginner {
      background-color: var(--skill-beginner-bg, #e3f2fd);
      color: var(--skill-beginner-text, #1976d2);
    }

    .badge.intermediate {
      background-color: var(--skill-intermediate-bg, #f3e5f5);
      color: var(--skill-intermediate-text, #7b1fa2);
    }

    .badge.advanced {
      background-color: var(--skill-advanced-bg, #e8f5e9);
      color: var(--skill-advanced-text, #388e3c);
    }

    .badge.expert {
      background-color: var(--skill-expert-bg, #fff3e0);
      color: var(--skill-expert-text, #f57c00);
    }

    @media (prefers-color-scheme: dark) {
      .badge.beginner {
        background-color: var(--skill-beginner-bg-dark, #0d47a1);
        color: var(--skill-beginner-text-dark, #bbdefb);
      }

      .badge.intermediate {
        background-color: var(--skill-intermediate-bg-dark, #4a148c);
        color: var(--skill-intermediate-text-dark, #e1bee7);
      }

      .badge.advanced {
        background-color: var(--skill-advanced-bg-dark, #1b5e20);
        color: var(--skill-advanced-text-dark, #c8e6c9);
      }

      .badge.expert {
        background-color: var(--skill-expert-bg-dark, #e65100);
        color: var(--skill-expert-text-dark, #ffe0b2);
      }
    }
  `;

  /**
   * The skill or tag name
   */
  @property({ type: String })
  skill: string = '';

  /**
   * The proficiency level
   */
  @property({ type: String })
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert' = 'intermediate';

  /**
   * Whether the badge is clickable
   */
  @property({ type: Boolean })
  clickable: boolean = false;

  render(): unknown {
    const classes = {
      badge: true,
      [this.level]: true,
      clickable: this.clickable,
    };

    return html`
      <span
        class=${classMap(classes)}
        part="badge"
        role="${this.clickable ? 'button' : 'status'}"
        tabindex="${this.clickable ? '0' : '-1'}"
        aria-label="${this.skill} - ${this.level} level"
        @click=${this._handleClick}
        @keydown=${this._handleKeyDown}
      >
        ${this.skill}
      </span>
    `;
  }

  private _handleClick(): void {
    if (this.clickable) {
      this.dispatchEvent(
        new CustomEvent('badge-click', {
          detail: { skill: this.skill, level: this.level },
          bubbles: true,
          composed: true,
        })
      );
    }
  }

  private _handleKeyDown(e: KeyboardEvent): void {
    if (this.clickable && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      this._handleClick();
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'skill-badge': SkillBadge;
  }
}

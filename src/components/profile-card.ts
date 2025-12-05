import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * A professional profile card component
 *
 * @element profile-card
 * @slot - Default slot for additional content
 * @csspart container - The card container
 * @csspart header - The card header section
 * @fires {CustomEvent} profile-click - Dispatched when the card is clicked
 *
 * @example
 * ```html
 * <profile-card
 *   name="John Doe"
 *   title="Frontend Developer"
 *   avatar="https://example.com/avatar.jpg"
 * ></profile-card>
 * ```
 */
@customElement('profile-card')
export class ProfileCard extends LitElement {
  static styles = css`
    :host {
      display: block;
      font-family:
        system-ui,
        -apple-system,
        sans-serif;
    }

    .container {
      border: 1px solid var(--profile-border-color, #e0e0e0);
      border-radius: var(--profile-border-radius, 8px);
      padding: var(--profile-padding, 24px);
      background: var(--profile-bg-color, #ffffff);
      box-shadow: var(--profile-shadow, 0 2px 4px rgba(0, 0, 0, 0.1));
      transition:
        transform 0.2s ease,
        box-shadow 0.2s ease;
    }

    .container:hover {
      transform: translateY(-2px);
      box-shadow: var(--profile-shadow-hover, 0 4px 8px rgba(0, 0, 0, 0.15));
    }

    .header {
      display: flex;
      align-items: center;
      gap: 16px;
      margin-bottom: 16px;
    }

    .avatar {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      object-fit: cover;
      border: 2px solid var(--profile-accent-color, #0066cc);
    }

    .info {
      flex: 1;
    }

    .name {
      margin: 0;
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--profile-text-primary, #1a1a1a);
    }

    .title {
      margin: 4px 0 0;
      font-size: 1rem;
      color: var(--profile-text-secondary, #666666);
    }

    .content {
      color: var(--profile-text-primary, #1a1a1a);
      line-height: 1.6;
    }

    @media (prefers-color-scheme: dark) {
      .container {
        background: var(--profile-bg-color-dark, #2a2a2a);
        border-color: var(--profile-border-color-dark, #404040);
      }

      .name {
        color: var(--profile-text-primary-dark, #ffffff);
      }

      .title {
        color: var(--profile-text-secondary-dark, #b0b0b0);
      }

      .content {
        color: var(--profile-text-primary-dark, #ffffff);
      }
    }
  `;

  /**
   * The name of the person
   */
  @property({ type: String })
  name: string = '';

  /**
   * The professional title
   */
  @property({ type: String })
  title: string = '';

  /**
   * The URL of the avatar image
   */
  @property({ type: String })
  avatar: string = '';

  /**
   * Whether the card is clickable
   */
  @property({ type: Boolean })
  clickable: boolean = false;

  render(): unknown {
    return html`
      <div
        class="container"
        part="container"
        role="${this.clickable ? 'button' : 'article'}"
        tabindex="${this.clickable ? '0' : '-1'}"
        @click=${this._handleClick}
        @keydown=${this._handleKeyDown}
      >
        <div class="header" part="header">
          ${this.avatar
            ? html`<img
                class="avatar"
                src=${this.avatar}
                alt="Avatar of ${this.name}"
                loading="lazy"
              />`
            : null}
          <div class="info">
            <h2 class="name">${this.name}</h2>
            ${this.title ? html`<p class="title">${this.title}</p>` : null}
          </div>
        </div>
        <div class="content">
          <slot></slot>
        </div>
      </div>
    `;
  }

  private _handleClick(): void {
    if (this.clickable) {
      this.dispatchEvent(
        new CustomEvent('profile-click', {
          detail: { name: this.name, title: this.title },
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
    'profile-card': ProfileCard;
  }
}

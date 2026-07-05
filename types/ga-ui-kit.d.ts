// JSX typings for the GA UI Kit web components (@gaarutyunov/ui-kit).
//
// The kit ships framework-agnostic custom elements; these declarations teach
// TSX about the `<ga-*>` tags we use and their documented attributes. Boolean
// attributes are typed as `"" | boolean` — pass them as an empty string
// (e.g. `interactive=""`) so React deterministically renders the attribute as
// present, which is what the components check with `hasAttribute()`.
import type { DetailedHTMLProps, HTMLAttributes } from "react";

type GaProps<Extra = Record<string, never>> = DetailedHTMLProps<
  HTMLAttributes<HTMLElement>,
  HTMLElement
> &
  Extra;

type GaFlag = "" | boolean;

// React 19 resolves intrinsic elements from the `react` module's JSX
// namespace, so the custom-element tags must be augmented there.
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "ga-badge": GaProps<{
        color?: "default" | "blue" | "green" | "amber" | "purple" | "red";
        solid?: GaFlag;
        size?: "sm" | "md";
      }>;
      "ga-card": GaProps<{
        interactive?: GaFlag;
        href?: string;
        padding?: "none" | "sm" | "md" | "lg";
      }>;
      "ga-button": GaProps<{
        variant?: "primary" | "secondary" | "ghost" | "danger";
        size?: "sm" | "md" | "lg";
        href?: string;
        disabled?: GaFlag;
        loading?: GaFlag;
        block?: GaFlag;
      }>;
      "ga-note": GaProps<{
        tone?: "info" | "success" | "warning" | "error" | "neutral";
        title?: string;
      }>;
      "ga-kbd": GaProps;
      "ga-avatar": GaProps<{ src?: string; alt?: string; size?: string }>;
      "ga-alert": GaProps<{ tone?: string; title?: string }>;
      "ga-spinner": GaProps<{ size?: string }>;
      "ga-tabs": GaProps;
      "ga-switch": GaProps<{ checked?: GaFlag; disabled?: GaFlag }>;
      "ga-icon": GaProps<{ name?: string; size?: string }>;
    }
  }
}

export {};

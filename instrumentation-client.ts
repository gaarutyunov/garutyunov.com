// Registers the GA UI Kit web components (`<ga-*>`) on the client.
//
// This file runs after the HTML document loads but BEFORE React hydration,
// so the custom elements upgrade as early as possible (minimizing any flash
// of unstyled content). It only ever executes in the browser, which is why
// the side-effect import lives here rather than in a server component — the
// kit calls `customElements.define()` at module load and would crash under
// SSR / the static export build.
import "@gaarutyunov/ui-kit";

'use client';

import React from 'react';
import { CustomButton as WCCustomButton } from '@wattanx/web-components-vue';

customElements.define('custom-button', WCCustomButton);

export default function CustomButton({ children }: { children: React.ReactNode }) {
  return <custom-button>{children}</custom-button>;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'custom-button':
        | React.DetailedHTMLProps<React.HTMLAttributes<typeof WCCustomButton>, typeof WCCustomButton>
        | Partial<typeof WCCustomButton>;
    }
  }
}

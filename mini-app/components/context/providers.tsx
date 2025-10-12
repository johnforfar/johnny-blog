"use client";

import { MiniAppProvider } from "./miniapp-provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MiniAppProvider>
      {children}
    </MiniAppProvider>
  );
}

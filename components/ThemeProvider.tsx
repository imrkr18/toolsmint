'use client';
import { ThemeProvider as NextThemeProvider } from 'next-themes';

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemeProvider
      attribute="class"       // adds class="dark" or class="light" to <html>
      defaultTheme="system"   // respects OS preference by default
      enableSystem={true}     // auto-detect prefers-color-scheme
      disableTransitionOnChange={false}
    >
      {children}
    </NextThemeProvider>
  );
}

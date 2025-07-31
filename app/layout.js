// app/layout.js
import { Providers } from './providers';

export const metadata = {
  title: 'My App',
  description: 'Google Auth Example',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

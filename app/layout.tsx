import type { Metadata } from 'next';
import './globals.css';

const isGitHubPages = process.env.GITHUB_PAGES === 'true';
const publicOrigin = isGitHubPages
  ? 'https://jomage89-jpg.github.io/gemma-antuzzi-portfolio'
  : 'https://gemma-antuzzi-portfolio.jomage.chatgpt.site';
const ogImage = `${publicOrigin}/og.png`;

export const metadata: Metadata = {
  title: 'Gemma Antuzzi — Visual & Multimedia Designer',
  description: 'Portfolio e CV di Gemma Antuzzi: visual design, video, animazione e progetti multimediali.',
  metadataBase: new URL(publicOrigin),
  icons: {
    icon: [{ url: `${publicOrigin}/favicon.png`, type: 'image/png', sizes: '512x512' }],
    apple: [{ url: `${publicOrigin}/favicon.png`, type: 'image/png', sizes: '512x512' }],
  },
  openGraph: {
    title: 'Gemma Antuzzi — Visual & Multimedia Designer',
    description: 'Portfolio e CV: visual design, video, animazione e progetti multimediali.',
    images: [{ url: ogImage, width: 1200, height: 630, alt: 'Gemma Antuzzi — Visual & Multimedia Designer' }],
    locale: 'it_IT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gemma Antuzzi — Visual & Multimedia Designer',
    description: 'Portfolio e CV: visual design, video, animazione e progetti multimediali.',
    images: [ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}

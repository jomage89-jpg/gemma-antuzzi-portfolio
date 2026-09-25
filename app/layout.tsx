import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Gemma Antuzzi — Visual & Multimedia Designer',
  description: 'Portfolio e CV di Gemma Antuzzi: visual design, video, animazione e progetti multimediali.',
  metadataBase: new URL('https://gemma-antuzzi-portfolio.flowy-aphid-6587.chatgpt.site'),
  openGraph: {
    title: 'Gemma Antuzzi — Visual & Multimedia Designer',
    description: 'Portfolio e CV: visual design, video, animazione e progetti multimediali.',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Gemma Antuzzi — Visual & Multimedia Designer' }],
    locale: 'it_IT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gemma Antuzzi — Visual & Multimedia Designer',
    description: 'Portfolio e CV: visual design, video, animazione e progetti multimediali.',
    images: ['/og.png'],
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

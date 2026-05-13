import './globals.css';

export const metadata = {
  title: 'Eric Bell | Performance Systems',
  description: 'Former athlete, development coach, and technology founder building elite performance systems.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

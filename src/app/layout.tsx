// app/layout.tsx
import './globals.css'
import Navbar from '@/components/Navbar'

export const metadata = {
  title: 'My Portfolio',
  description: 'Peyton Jeffrey Smith Portfolio',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="p-6">{children}</main>
      </body>
    </html>
  )
}

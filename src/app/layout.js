import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body cz-shortcut-listen="false">
        {children}
      </body>
    </html>
  )
}

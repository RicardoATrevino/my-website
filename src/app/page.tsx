import 'tailwindcss/tailwind.css'
import { PropsWithChildren } from 'react';
import Sidebar from '@/app/sidebar'
import {montserrat} from '@/app/layout'

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <main>
      <html lang='en'>
       <body className={`${montserrat.className} antialiased`}>
       <h1 className="text-center text-color:blue ">My name is Ricardo and this is my website! welcome!</h1>

       <Sidebar />

      </body>

    </html>
    </main>
  )
}
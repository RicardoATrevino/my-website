import 'tailwindcss/tailwind.css'
import { PropsWithChildren } from 'react';
import Sidebar from '@/app/sidebar'
import {montserrat} from '@/app/layout'

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
      <html lang='en'>
   
       <body className={`${montserrat.className} antialiased`}>
        <main>
        <Sidebar />
          <h1 className="text-center text-color:blue ">My name is Ricardo and this is my website! welcome!</h1>

         </main>
      </body>

      </html>
  )
}
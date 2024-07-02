import 'tailwindcss/tailwind.css'
import { PropsWithChildren } from 'react';
import Sidebar from '@/app/sidebar'
import {montserrat} from '@/app/layout'
import Image from 'next/image';

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
      <html lang='en'>
   
       <body className={`${montserrat.className} antialiased`}>
        <main>
        <Sidebar />
          <h1 className="text-center text-color:blue ">filler no longer index page</h1>

       
      

         </main>
      </body>

      </html>
  )
}
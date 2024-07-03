import 'tailwindcss/tailwind.css'
import { PropsWithChildren } from 'react';
import Sidebar from '@/app/sidebar'
import {montserrat} from '@/app/layout'
import Image from 'next/image';
import {links} from ".//components/links"


export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
      <html lang='en'>
   
       <body className={`${montserrat.className}`}>
        <main>
        <Sidebar />
          <h1 className="text-center mt-10 "> Hi! My is Ricardo and this is my website! welcome!</h1>

        <nav className='text-center mt-16' >
          <ul className="space-y-4">
            {links.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="block px-4 py-2 hover:bg-gray-700">{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      

         </main>
      </body>

      </html>
  )
}
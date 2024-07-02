import 'tailwindcss/tailwind.css'
import { PropsWithChildren } from 'react';
import Sidebar from '@/app/sidebar'
import {montserrat} from '@/app/layout'
import Image from 'next/image';

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
      <html lang='en'>
   
       <body className={`${montserrat.className}`}>
        <main>
        <Sidebar />
          <h1 className="text-center text-color:blue ">My name is Ricardo and this is my website! welcome!</h1>

        <nav className='text-center text-wrap hover:bg-gray-700' >
          <ul>
            <li > 
              <a href='/MyProjects/index' > 
                Introduction 
              </a>
            </li>
          </ul>
        </nav>
      

         </main>
      </body>

      </html>
  )
}
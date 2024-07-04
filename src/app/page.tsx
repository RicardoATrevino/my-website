
import 'tailwindcss/tailwind.css'
import { PropsWithChildren } from 'react';
import Sidebar from '@/app/sidebar'
import Image from 'next/image';
import {links} from "./components/links"

import Link from 'next/link'



export default function Page({children}: {children: React.ReactNode}) {

  const paragraphStyle = {
    color: 'blue',
    fontSize: '20px',
    textAlign: 'center' as 'center' // TypeScript requires explicit type assertion for some CSS properties
  };


  return (
     
        <div className=''>
        <main>
          <Sidebar />
          <h1 className="text-center mt-10 "> Hi! I&apos;m Ricardo <br/> Professional Software Engineer
          </h1>

        <nav className='text-center mt-16' >
          <ul className="space-y-4">
            {links.map((link, index) => (
              <li key={index}>
              
              <Link href="/">
                 <div>Home</div> {/* Use an anchor tag inside Link */}
              </Link>








              </li>
            ))}
          </ul>
        </nav>
      

         </main>
        </div>
     
  )
}
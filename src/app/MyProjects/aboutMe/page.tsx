import Sidebar from '@/app/sidebar'

export default function Page() {

return (
  <body>
    <Sidebar />
  <main className='text-center md:m-5 bg-custom-gradient min-h-screen'>
    
      <h1>More about me</h1>

      <p>My name is Ricardo! I also go by Rico, I have been a professional full-stack dev for 1 year (Ruby, JS,Typescript to name a few), I was born and raised around L.A.</p>
      <br/>
      <p>Here is my Contact info, I appreciate you taking the time to look through my website!  
        <br/> Phone: 818-935-9670   
        <br/>Email: RicardoATrevino2307@gmail.com</p>
  </main>
  </body>
)

}
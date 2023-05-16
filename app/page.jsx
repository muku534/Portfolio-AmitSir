import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex  items-center p-15 pl-10 " style={{marginLeft:'55px' , marginTop:'70px'}} >
      <div  style={{width:'50%' , display:'flex' , flexDirection:'column', }} >
        I'm Mr.Mukesh.
        <p><span>I'm a Victoria based Full Stack Software Engineer, currently working at Instant Domains helping build a
          modern, mobile-first, domain registrar and site builder.</span> </p>

        <p><span>In my free time time, you can catch me training in Muay Thai, plucking my banjo, or exploring beautiful
          Vancouver Island.</span></p>
      </div>
      <div className=" profile-picture">
        <div className="profile-picture-background">

        </div>
      </div>
    </main>
  )
}

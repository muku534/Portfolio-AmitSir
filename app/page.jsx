import About from '@/components/About'
import Education from '@/components/Education'
import Material from '@/components/Material'
import Image from 'next/image'

export default function Home() {
  return (
    <>

      <main className="flex  items-center p-15 pl-10 " style={{ marginLeft: '55px', marginTop: '70px' }} >
        <div style={{ width: '50%', display: 'flex', flexDirection: 'column', }} >
          <h5 style={{ fontSize: '25px' }}>
            I'm Mr.Mukesh.
          </h5>
          <p className='mt-5'><span>I'm a Victoria based Full Stack Software Engineer, currently working at Instant Domains helping build a
            modern, mobile-first, domain registrar and site builder.</span> </p>

          <p><span>In my free time time, you can catch me training in Muay Thai, plucking my banjo, or exploring beautiful
            Vancouver Island.</span></p>
          <div className='flex '>

            <button type='button' className='mt-5 outline_btn' style={{ width: '150px' }} >
              Sign Out
            </button>
            <button type='button' className='mt-5 ml-5 outline_btn' style={{ width: '150px' }} >
              Sign Out
            </button>
          </div>
        </div>
        <div className="profile-picture">
          {/* <div className="profile-picture-background"> */}
          <Image
            src="/assets/images/logo.svg"
            alt='logo'
            width={30}
            height={30}
            className='profile-picture-background'
          />
          {/* </div> */}
        </div>
      </main>
      <div className=' p-24'>
        <About />
        {/* <Material /> */}
      </div>
    </>
  )
}

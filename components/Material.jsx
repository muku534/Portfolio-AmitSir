import React from 'react'
import Image from 'next/image'

const Material = () => {
    return (
        <main className='flex items-center p-24 '>
            <div>
                <Image
                    src="/assets/images/logo.svg"
                    alt='logo'
                    width={30}
                    height={30}
                    className='profile-picture-background'
                />
            </div>
        </main>
    )
}

export default Material

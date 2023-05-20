import Link from "next/link"

const About = () => {
    return (
        <main className="flex items-center p-24 " >
            <div className="flex-center" style={{ flexDirection: "column" }}>
                <h2 class="mb-4 text-5xl lg:text-5xl tracking-tight font-extrabold text-gray-900 dark:text-gray">About</h2>
                {/* <p className="mt-5"><span>I'm a Victoria based Full Stack Software Engineer, currently working at Instant Domains helping build a
                    modern, mobile-first, domain registrar and site builder.</span> </p>

                <p><span>In my free time time, you can catch me training in Muay Thai, plucking my banjo, or exploring beautiful
                    Vancouver Island.</span></p> */}
                <div className="card-body p-4 p-lg-5 text-black ">
                    <div className="mb-5 font-Poppins text-gray-500 sm:text-xl dark:text-black-400 text-3sm  lg:text-3md  sm:text-xl" style={{marginBottom:'50'}} >
                        <h6> <span>Full Stack Web and mobile Developer with background
                            knowledge of MERN stacks with redux,along with a knack of
                            buliding application with utmost effciency. Storng
                            professional with a BCA willing to be an asset for an
                            organization.
                        </span></h6>
                        <h6> <span>Full Stack Web and mobile Developer with background
                            knowledge of MERN stacks with redux,along with a knack of
                            buliding application with utmost effciency. Storng
                            professional with a BCA willing to be an asset for an
                            organization.
                        </span></h6>
                    </div>
                    <div className="mt-4 text-gray-500 sm:text-xl dark:text-black-400 text-3sm  lg:text-3md  sm:text-xl">
                        <h2 class="mt-5 p-4 mb-5 text-3xl lg:text-4xl tracking-tight  text-gray-500 sm:text-xl dark:text-black-400 ">My Educations </h2>
                        <ol class="relative text-gray-500 border-l border-gray-200 dark:border-gray-700 dark:text-gray-400">
                            <li class="mb-10 ml-6">
                                <span class=" absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
                                    <svg aria-hidden="true" class="w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                </span>
                                <h3 class="text-3xl leading-tight font-bold text-gray-900 dark:text-gray pl-5">S.S.C</h3>
                                <p class="text-sm font-bold text-gray-900 dark:text-gray pl-5">T. & T. V. SARVAJANIK HIGH SCHOOL</p>
                            </li>
                            <li class="mb-10 ml-6">
                                <span class="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
                                    <svg aria-hidden="true" class="w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                </span>
                                <h3 class="text-3xl leading-tight font-bold text-gray-900 dark:text-gray pl-5">H.S.C</h3>
                                <p class="text-sm font-bold text-gray-900 dark:text-gray pl-5">T. & T. V. SARVAJANIK HIGH SCHOOL</p>
                            </li>
                            <li class="mb-10 ml-6">
                                <span class="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
                                    <svg aria-hidden="true" class="w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                </span>
                                <h3 class="text-3xl leading-tight font-bold text-gray-900 dark:text-gray pl-5">BSC</h3>
                                <p class="text-sm font-bold text-gray-900 dark:text-gray pl-5">Galgotias University.</p>
                            </li>
                            <li class="ml-6">
                                <span class="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
                                    <svg aria-hidden="true" class="w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                </span>
                                <h3 class="text-3xl leading-tight font-bold text-gray-900 dark:text-gray pl-5">MCA</h3>

                                <p class="text-sm font-bold text-gray-900 dark:text-gray pl-5">Galgotias University.</p>

                            </li>
                        </ol>

                    </div>
                </div>
            </div>
        </main>

    )
}

export default About
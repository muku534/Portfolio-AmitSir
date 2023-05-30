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
                <div className="card-body p-4  text-black ">
                    <div className="mb-5 font-Poppins text-gray-500 sm:text-xl dark:text-black-400 text-3sm  lg:text-3md  sm:text-xl" style={{ marginBottom: '50' }} >
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
                    {/* <div className="mt-4 text-gray-500 sm:text-xl dark:text-black-400 text-3sm  lg:text-3md  sm:text-xl">
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

                    </div> */}
                    <h2 class="mt-5  text-3xl lg:text-4xl tracking-tight  text-gray-500 sm:text-xl dark:text-black-400 ">My Educations </h2>
                    <section class=" body-font">
                        <div class="container py-10 mx-auto flex flex-wrap justify-flex-start align-item-start">
                            <div class="flex relative pt-10 pb-20 sm:items-center ">
                                <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                                    <div class="h-full w-1 bg-gray-900 pointer-events-none"></div>
                                </div>
                                <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-gray-900 text-white relative z-10 title-font font-medium text-sm">1</div>
                                <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                                    <div class="flex-shrink-0 w-24 h-24 bg-gray-300 rounded-full inline-flex items-center justify-center">
                                        {/* <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M479-120 189-279v-240L40-600l439-240 441 240v317h-60v-282l-91 46v240L479-120Zm0-308 315-172-315-169-313 169 313 172Zm0 240 230-127v-168L479-360 249-485v170l230 127Zm1-240Zm-1 74Zm0 0Z" /></svg> */}
                                        <img src="/assets/icons/icons8-education-90.png" className="round w-13 h-12  " alt="" />

                                    </div>
                                    <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                        <h2 class="font-medium title-font text-white mb-1 text-xl">Shooting Stars</h2>
                                        <p class="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="flex relative pb-20 sm:items-center">
                                <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                                    <div class="h-full w-1 bg-gray-900 pointer-events-none"></div>
                                </div>
                                <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-gray-900 text-white relative z-10 title-font font-medium text-sm">2</div>
                                <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">

                                    <div class="flex-shrink-0 w-24 h-24 bg-gray-300 rounded-full inline-flex items-center justify-center">
                                        {/* <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M479-120 189-279v-240L40-600l439-240 441 240v317h-60v-282l-91 46v240L479-120Zm0-308 315-172-315-169-313 169 313 172Zm0 240 230-127v-168L479-360 249-485v170l230 127Zm1-240Zm-1 74Zm0 0Z" /></svg> */}
                                        <img src="/assets/icons/icons8-education-90.png" className="round w-13 h-12  " alt="" />

                                    </div>
                                    <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                        <h2 class="font-medium title-font text-white mb-1 text-xl">The Catalyzer</h2>
                                        <p class="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="flex relative pb-20 sm:items-center ">
                                <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                                    <div class="h-full w-1 bg-gray-900 pointer-events-none"></div>
                                </div>
                                <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-gray-900 text-white relative z-10 title-font font-medium text-sm">3</div>
                                <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                                    <div class="flex-shrink-0 w-24 h-24 bg-gray-300 rounded-full inline-flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M479-120 189-279v-240L40-600l439-240 441 240v317h-60v-282l-91 46v240L479-120Zm0-308 315-172-315-169-313 169 313 172Zm0 240 230-127v-168L479-360 249-485v170l230 127Zm1-240Zm-1 74Zm0 0Z" /></svg>
                                        {/* <img src="/assets/icons/icons8-diploma-100.png" className="round w-13 h-12  " alt="" /> */}

                                    </div>
                                    <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                        <h2 class="font-medium title-font text-white mb-1 text-xl">The 400 Blows</h2>
                                        <p class="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="flex relative pb-10 sm:items-center ">
                                <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                                    <div class="h-full w-1 bg-gray-900 pointer-events-none"></div>
                                </div>
                                <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-gray-900 text-white relative z-10 title-font font-medium text-sm">4</div>
                                <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                                    <div class="flex-shrink-0 w-24 h-24 bg-gray-300 rounded-full inline-flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="50" viewBox="0 -960 960 960" width="48"><path d="M479-120 189-279v-240L40-600l439-240 441 240v317h-60v-282l-91 46v240L479-120Zm0-308 315-172-315-169-313 169 313 172Zm0 240 230-127v-168L479-360 249-485v170l230 127Zm1-240Zm-1 74Zm0 0Z" /></svg>
                                        {/* <img src="/assets/icons/icons8-diploma-100.png" className="round w-13 h-12  " alt="" /> */}

                                    </div>
                                    <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                        <h2 class="font-medium title-font text-white mb-1 text-xl">Neptune</h2>
                                        <p class="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </main>

    )
}

export default About
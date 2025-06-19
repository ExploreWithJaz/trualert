import React from 'react'

function footer() {
  return (
    <div className='px-20'>
        <div className='mx-[232.5px] pb-20'>
            <div className='px-10 py-8 bg-[#292929] rounded-[10px]'>
                <div className='flex flex-row justify-between items-center'>
                    <div className='flex flex-row items-center gap-2.5'>
                        <img className='w-12 h-auto' src="https://trualert.com/wp-content/uploads/2024/08/LogoMark-Dark-Mode.svg" alt="TRUalert Logo" />
                        <img className='w-32.5' src="https://trualert.com/wp-content/uploads/2024/08/Wordmark-Dark-Mode.svg" alt="TRUalert Logo Text" />
                    </div>
                    <div className='flex flex-row justify-center items-center gap-5'>
                        <img className='w-auto h-[35.3px]' src="/App-Store.png" alt="App Store Button" />
                        <img className='w-auto h-[35.3px]' src="/Google-Play.png" alt="Google Play Button" />
                    </div>
                </div>
                
                <div className='border-b border-b-[#525252] border-solid my-5'></div>
                
                <div className='flex flex-row gap-5'>
                    <div className='flex flex-col justify-between items-start w-max-full h-max-full w-[384px] h-[300px] text-sm'>
                        <div>
                            <p className='mb-[14.4px]'>Address</p>
                            <p className='text-[#9c9c9c]'>Orange County, CA</p>
                        </div>
                        <p className='text-xs text-[#6d6d6d] font-bold'>@ 2025 TRUalert</p>
                    </div>

                    <div className='flex flex-col justify-between items-start w-max-full h-max-full w-[384px] h-[300px] text-sm'>
                        <div>
                            <div>
                                <p className='mb-[14.4px]'>Pages</p>
                            </div>
                            <div className='flex flex-col gap-1.5 text-[#9c9c9c]'>
                                <a href="">About</a>
                                <a href="">Terms</a>
                                <a href="">Privacy and Security</a>
                                <a href="">Blogs</a>
                            </div>
                        </div>
                        <div className='flex flex-row text-xs text-[#6d6d6d] font-bold'>
                            <a className='mr-4.5' href="">Privacy & Security</a>
                            <a className='ml-4.5' href="">Terms</a>
                        </div>
                    </div>

                    <div className='flex flex-row justify-between items-start w-max-full h-max-full w-[384px] h-[300px] gap-5 text-sm'>
                        <div>
                            <div>
                                <p className='mb-[14.4px]'>Contact Us</p>
                            </div>
                            <div className='text-[#9c9c9c]'>
                                <p>support@trualert.com</p>
                            </div>
                        </div>
                        
                        <div className='flex flex-col justify-between items-end w-full h-full'>
                            <div className='flex flex-row justify-center items-center gap-2'>
                                <a className='bg-[#333333] w-10 h-10 rounded-full flex justify-center items-center' href=""><svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="#ffffff"></path> <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="#ffffff"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z" fill="#ffffff"></path> </g></svg></a>
                                <a className='bg-[#333333] w-10 h-10 rounded-full flex justify-center items-center' href=""><svg fill="#ffffff" width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 2.03998C6.5 2.03998 2 6.52998 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.84998C10.44 7.33998 11.93 5.95998 14.22 5.95998C15.31 5.95998 16.45 6.14998 16.45 6.14998V8.61998H15.19C13.95 8.61998 13.56 9.38998 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5878 18.0622 20.3855 19.6099 18.57C21.1576 16.7546 22.0054 14.4456 22 12.06C22 6.52998 17.5 2.03998 12 2.03998Z"></path> </g></svg></a>
                                <a className='bg-[#333333] w-10 h-10 rounded-full flex justify-center items-center' href=""><svg width="20px" height="20px" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>youtube-filled</title> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="icon" fill="#ffffff" transform="translate(42.666738, 106.667236)"> <path d="M214.304705,0.000543068834 C226.424729,0.0216871426 348.414862,0.444568619 380.010595,8.90219814 C398.378595,13.7775234 412.821262,28.1915286 417.749262,46.6329765 C426.309902,78.5811951 426.652328,143.739282 426.666025,148.900811 L426.666025,149.553735 C426.652328,154.730893 426.309902,220.084332 417.749262,252.032551 C412.821262,270.473998 398.378595,284.888004 380.010595,289.763329 C347.417102,298.488042 218.629945,298.662536 213.491496,298.666026 L213.175003,298.666026 C208.035726,298.662536 79.2276622,298.488042 46.6132622,289.763329 C28.2665955,284.888004 13.8025955,270.473998 8.89592883,252.032551 C0.355768832,220.084332 0.014162432,154.730893 0.000498176,149.553735 L0.000498176,148.900811 C0.014162432,143.739282 0.355768832,78.5811951 8.89592883,46.6329765 C13.8025955,28.1915286 28.2665955,13.7775234 46.6132622,8.90219814 C78.2292622,0.444568619 200.239662,0.0216871426 212.361662,0.000543068834 Z M169.685262,86.2714908 L169.685262,212.394036 L281.215929,149.226778 L169.685262,86.2714908 Z" id="Shape"> </path> </g> </g> </g></svg></a>
                            </div>
                            <div>
                                <a className='flex justify-center items-center bg-[#FF0F0F] w-[47px] h-[44.75px] rounded-full' href=""><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z"/></svg></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default footer
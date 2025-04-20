


const WhatWeDoCard = ({image, title}) => {
  return (
   <>
   <div style={{backgroundImage: `url(${image})`, backgroundSize: 'cover'}} className='bg-tan h-[30rem] w-[100%] lg:w-[20rem] flex justify-start items-end px-2 py-4 hover:bg-white hover:scale-[1.02] trasition-all duration-800 ease-initial'>
        <p className='text-xl font-semibold  text-dark-brown'>{title}</p>
   </div>
   </>
  )
}

export default WhatWeDoCard
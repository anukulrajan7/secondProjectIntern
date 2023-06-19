import React from 'react'

function Card({imgUrl}) {
  return (
    <div className='md:w-[80%] w-[90%] mx-auto flex flex-col gap-5 justify-center py-7 hove px-7 md:mx-3 bg-white shadow-purple-700 text-purple-700  first-letter:capitalize shadow-xl rounded-sm hover:translate-y-1 transition-all duration-150 hover:translate-x-1 '> 
       <div className="img w-[90%] md:w-full  md:h-full h-[250px] px-2 py-3">
        <img src={imgUrl} alt=" " className='object-fill w-[90%] h-[90%]' />
       </div>
       <div className="text text-xl font-semibold mt-4 px-3 py-3">
          <p>
            Lorem ipsum dolor sit amet consectetur 
          </p>
       </div>
    </div>
  )
}

export default Card
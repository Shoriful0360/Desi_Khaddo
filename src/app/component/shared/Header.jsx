import React from 'react'
import { IoIosMenu } from "react-icons/io";
import { TiThMenu } from "react-icons/ti";
import { RxCaretDown } from "react-icons/rx";
function Header() {
  return ( 
    <>
<header className='flex w-11/12 flex-col lg:flex-row   lg:w-9/12 mx-auto gap-2 mt-10'>

    <section className='flex lg:block justify-center'>    
            <menu className='flex items-center bgNature  justify-center sm:w-fit w-full  px-6 py-2 text-white font-medium rounded-3xl gap-4'>
              <TiThMenu />
             
                <h3 className=''>All Departments</h3>
                <RxCaretDown className='text-3xl '/>
            </menu>
    </section>
    {/* right section */}
  <div className="flex flex-col  sm:flex-row items-center sm:border-1   sm:flex-1 sm:border-gray-300 sm:rounded-3xl sm:overflow-hidden space-y-4 sm:space-y-0">
  {/* select with 1/3 width and green background */}
  <div className="sm:w-1/3 w-full  sm:flex items-center sm:px-6 ">
    <select
      defaultValue="Choose a Category"
      className="  outline-none w-full border-1 py-2 px-5  text-gray-500 sm:px-0 sm:py-0 sm:border-0 border-gray-300 rounded-3xl  "
    >
      <option disabled={true}>Choose a Category</option>
      <option>Crimson</option>
      <option>Amber</option>
      <option>Velvet</option>
    </select>
  </div>

  {/* divider */}
 <div className='bg-gray-400 hidden sm:block sm:w-px sm:h-8 sm:my-2'></div>

  {/* input takes remaining space */}
  <div className="flex-1 w-full flex items-center sm:px-3">
    <input
      type="text"
      placeholder="What do you want?"
      className="w-full outline-none border-1 sm:border-none rounded-3xl border-gray-300 px-6  py-2"
    />
  </div>

  {/* button  */}
  <button className=" bgNature  text-white lg:h-full md:py-3  w-full sm:w-auto rounded-3xl sm:rounded-none   py-2 sm:py-0  sm:mt-0  px-6 ">Submit</button>
</div>

</header>

</>
  )
}

export default Header
import Image from "next/image"


export const Navbar = () => {



  const LinkListcontent:LinkList=[{
    id:1,
    tagName:"YOUR INFO",
    linkUrl:""
  },{
    id:2,
    tagName:"SELECT PLAN",
    linkUrl:""
  }, {
    id:3,
    tagName:"ADD-ONS",
    linkUrl:""
  },
  {
    id:4,
    tagName:"SUMMARY",
    linkUrl:""
  }]

  const sidebar=(
    <div  className="pt-0 mt-0 bg-cover border border-blue-900 flex items-center justify-center  bg-no-repeat w-full h-64 bg-[url('/images/bg-sidebar-mobile.svg')] md:items-start md:justify-normal md:pt-10 md:bg-contain md:w-80 md:h-full md:bg-[url('/images/bg-sidebar-desktop.svg')]">
      <ul className="flex flex-row gap-1 md:flex-col md:ml-3 md:items-start pl-2">
       { LinkListcontent.map((navitem:LinkType)=>{
       return (<li key ={navitem.id}>
       <div   className="border-black-500 border  flex gap-3 flex-row mb-8  " >
            <span className="grid  rounded-full place-content-center w-8 h-8 border border-white text-white ">{navitem.id}</span>
          <div className=" hidden md:flex md:flex-col  h-8 border border-red-600 py-0  my-0">
        <p className=" text-xs font-thin text-white">STEP {navitem.id}</p>
        <p  className=" text-xs font-bold  text-white">{ navitem.tagName}</p>
         </div>
         </div></li>
         )})
         }
         </ul>
        </div>
  )

  const firstForm= ( <>
    <div className="w-4/6  h-full border flex items-center justify-center pt-6 text-grey-900 ">
            <div className="w-4/6  h-full border flex flex-col ">
            <p className="text-3xl font-bold text-blue-900 font-sans">Personal Info</p>
            <p className="text-base text-slate-500">Please Provide your name , email address, and Phone</p>
<form>
  <div className="border border-red-500">
  
  <div className="border border-green-500">
    <div className="mb-6 mt-12">
   
    <label htmlFor="email" className="block mb-2 text-sm font-normal text-blue-900 dark:text-white">Name</label>
    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required/>
  </div>
  <div className="mb-6">
    <label htmlFor="password" className="block mb-2 text-sm font-normal text-blue-900 dark:text-white">Email Address</label>
    <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
  </div>
  <div className="mb-24">
    <label htmlFor="password" className="block mb-2 text-sm font-normal text-blue-900 dark:text-white">Phone Number</label>
    <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
  </div>
  </div>
 <div className="grid justify-items-end pt-4">
  <button type="submit" className="text-white  bg-blue-900 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
  </div>
  </div>
</form>
</div> 
</div></>)
  return (
    //className="bg-[url('/images/bg-sidebar-desktop.svg')]  "
    <div className="h-screen flex items-center justify-center border border-red-700 bg-sky-50" >
      <div className=" w-full  md:h-5/6 md:p-2 md:w-9/12 border  border-green-900 bg-white flex flex-col md:flex-row shadow-2xl rounded-lg">
          {sidebar}
          {firstForm}
          {/* <div className="w-4/6  h-full border flex items-center justify-center pt-6 text-grey-900 ">
            <div className="w-4/6  h-full border flex flex-col ">
            <p className="text-3xl font-bold text-blue-900 font-sans">Personal Info</p>
            <p className="text-base text-slate-500">Please Provide your name , email address, and Phone</p>
            {firstForm}
            </div>
          </div> */}
      </div>
   
    </div>
  )
}

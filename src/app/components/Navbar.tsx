import Image from "next/image"


export const Navbar = () => {

  const Linkcontent2:LinkListItemForm2=[
    {
      id:1,
      subTopic:"Arcade",
      IconimageSrc:"/images/icon-arcade.svg",
      priceTage:90,
      subscriptionAmountTag:"2 months free"
    },
    {
      id:2,
      subTopic:"Advanced",
      IconimageSrc:"/images/icon-advanced.svg",
      priceTage:120,
      subscriptionAmountTag:"2 months free"
    },
    {
      id:3,
      subTopic:"Pro",
      IconimageSrc:"/images/icon-pro.svg",
      priceTage:150,
      subscriptionAmountTag:"2 months free"
    },
  ]

  const LinkPickAddOn:LinkListItemForm3=[{
    id:1,
    mainTopic: "Online service",
    subTopic:"Access to multiplayer game",
    PriceTag:1
  },
  {
    id:2,
    mainTopic: "Larger Storage",
    subTopic:"Extra 1TB of cloud save",
    PriceTag:2
  },
  {
    id:3,
    mainTopic: "Cutomizable profile",
    subTopic:"custom theme on your profile",
    PriceTag:2
  }
]

  const LinkListcontent:LinkListItemForm1=[{
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
    <div  className="pt-0 mt-0 bg-cover justify-center items-center flex  bg-no-repeat w-full h-64 bg-[url('/images/bg-sidebar-mobile.svg')] md:items-start md:justify-normal md:pt-10 md:bg-contain md:w-80 md:h-full md:bg-[url('/images/bg-sidebar-desktop.svg')]">
      <ul className="flex flex-row gap-6 md:flex-col  md:ml-1 md:items-start  pl-7">
       { LinkListcontent.map((navitem:LinkForm1Type)=>{
       return (<li key ={navitem.id}>
       <div   className="  flex gap-3 flex-row mb-3  " >
            <span className="grid  rounded-full place-content-center w-8 h-8 border border-white text-white ">{navitem.id}</span>
          <div className=" hidden md:flex md:flex-col  h-8 borderpy-0  my-0">
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
    <div className=" w-full h-full flex items-center justify-center pt-8 text-grey-900 md:mt-0 md:w-4/6 ">
            <div className="  rounded-lg w-full h-full flex flex-col  md:w-5/6 ">      
<form  className="h-full   w-full">
<div className="  h-full grid content-between md:pt-0 md:mt-0">
  <div className=" grid -mt-5  justify-center  md:justify-normal md:w-full">
<div className=" m-0 -mt-14 justify-self-center rounded-lg   p-4 pt-6 md:w-11/12  bg-white md:rounded-none md:pt-6 md:mt-0">
<p className="text-3xl font-bold text-blue-900 font-sans pb-2">Personal Info</p>
            <p className=" text-lg md:text-sm text-slate-500">Please Provide your name , email address, and Phone</p>
    <div className="mb-6 mt-12">
   
    <label htmlFor="name" className="block mb-2 text-sm font-bold text-blue-900 dark:text-white">Name</label>
    <input type="text" id="name"  name="Name" className="bg-gray-50 border border-gray-300 text-blue-900 font-semibold text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Mandela Aondohemba Akosu" required/>
  </div>
  <div className="mb-6">
    <label htmlFor="email" className="block mb-2 text-sm font-bold text-blue-900 dark:text-white">Email Address</label>
    <input type="email" id="email" name="email" className="bg-gray-50 border border-gray-300 text-blue-900 font-semibold text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="mandelaakosu@gmail.com" required/>
  </div>
  <div className="">
    <label htmlFor="password" className="block mb-2 text-sm font-bold text-blue-900 dark:text-white">Phone Number</label>
    <input type="text" id="password" name="password" className="bg-gray-50 border border-gray-300 font-semibold text-blue-900  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="+2348130760315" required/>
  </div>
  </div>
  </div>
 <div className=" grid justify-items-center border bg-white py-6  md:border-none ">

  <div className="grid justify-items-stretch w-10/12   md:w-10/12">
    <div  className="justify-self-end">
  <button type="submit"   className="text-white grid justify-self-end bg-indigo-950 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Next Step</button>
  </div>
  </div>
  </div>
  </div>
</form>
</div> 
</div></>)


const form3=(
  <>
  <div className=" w-full h-full flex items-center justify-center pt-8 text-grey-900 md:mt-0 md:w-4/6 ">
          <div className="  rounded-lg w-full h-full flex flex-col  md:w-5/6 ">      
<form  className="h-full   w-full">
<div className="  h-full grid content-between md:pt-0 md:mt-0">
<div className=" grid -mt-5  justify-center  md:justify-normal md:w-full">
<div className=" m-0 -mt-14 justify-self-center rounded-lg   p-4 pt-6 md:w-11/12  bg-white md:rounded-none md:pt-6 md:mt-0">
<p className="text-3xl font-bold text-blue-900 font-sans pb-2">Select Your Plan</p>

          <p className=" text-lg md:text-sm text-slate-500">You have the option of monthly and Yearly billing.</p>
          <div className="  mt-6 ">
  <div className=" h-50 w-full  flex gap-1  flex-col md:flex-col">
    {

LinkPickAddOn.map((content)=>{
  return (<>
  <div  className=" flex justify-between w-full border items-center py-6 rounded-lg px-4 m-1 border-blue-700">
  <div className=" flex  gap-4 flex-row">
  <div className=""><span>
    <input type="checkbox" className="h-8 w-5  accent-blue-900" /></span></div> 
   <div className="">
    <span className=" leading-9 ">
   <p className="m-0 p-0 text-sm leading-4 font-bold text-blue-900">{content.mainTopic}</p>
   <p className=" m-0 p-0 text-sm leading-4 text-slate-500">{content.subTopic}</p>
   </span>
   </div>
   </div>
   <div>
  <span><p className="text-sm leading-4 text-blue-900"> + ${content.PriceTag}/mo</p></span>
  </div>
</div>
</>)
})
    }
</div>

  </div>
 
</div>

</div>
<div className=" grid justify-items-center border bg-white py-6  md:border-none ">

<div className="grid justify-items-stretch w-10/12   md:w-10/12">
  <div  className="justify-self-end">
<button type="submit"   className="text-white grid justify-self-end bg-indigo-950 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Next Step</button>
</div>
</div>
</div>
</div>
</form>
</div> 
</div></>
)


const form2=(
  <>
  <div className=" w-full h-full flex items-center justify-center pt-8 text-grey-900 md:mt-0 md:w-4/6 ">
          <div className="  rounded-lg w-full h-full flex flex-col  md:w-5/6 ">      
<form  className="h-full   w-full">
<div className="  h-full grid content-between md:pt-0 md:mt-0">
<div className=" grid -mt-5  justify-center  md:justify-normal md:w-full">
<div className=" m-0 -mt-14 justify-self-center rounded-lg   p-4 pt-6 md:w-11/12  bg-white md:rounded-none md:pt-6 md:mt-0">
<p className="text-3xl font-bold text-blue-900 font-sans pb-2">Select Your Plan</p>

          <p className=" text-lg md:text-sm text-slate-500">You have the option of monthly and Yearly billing.</p>
          <div className="  mt-6 ">
  <div className=" h-50 w-full  flex gap-8  flex-col md:flex-row">
  
{
    Linkcontent2.map((content:LinkForm2Type)=>{
      return(<>
      <div className="  h-50 border border-slate-300 py-4 pl-4 grid rounded-lg content-between w-1/3 ">
<Image src={`${content.IconimageSrc}`} width={40} alt="icon pro" height={40}  />
<div className="mt-10 "  key={content.id}>
<p className="text-lg  font-semibold text-blue-900"> {content.subTopic}</p>
<p className="text-base font-medium text-slate-400">$  {content.priceTage}</p>
<p className="text-sm  font-medium text-blue-800">{content.subscriptionAmountTag}</p>
</div>
</div></>)} )}
</div>
  </div>
  <div className="mt-8 flex justify-center gap-3 flex-row items-center border p-2 bg-sky-50  rounded-sm">
    <span className="text-slate-500">Monthly</span>  
<label className="relative inline-flex items-center cursor-pointer">
  <input type="checkbox" value="" className="sr-only peer"/>
  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-900">
  </div>
  <span className="  font-medium text-gray-900 dark:text-gray-300"></span>
</label>
 <span className="text-sky-900 font-bold">Yearly</span></div>
</div>

</div>
<div className=" grid justify-items-center border bg-white py-6  md:border-none ">

<div className="grid justify-items-stretch w-10/12   md:w-10/12">
  <div  className="justify-self-end">
<button type="submit"   className="text-white grid justify-self-end bg-indigo-950 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Next Step</button>
</div>
</div>
</div>
</div>
</form>
</div> 
</div></>
)



  return (
    //className="bg-[url('/images/bg-sidebar-desktop.svg')]  "
    <div className="h-screen  w-screen flex md:items-center md:justify-center bg-sky-50 " >
      <div className="  bg-sky-50 w-full relative  md:h-5/6 md:p-2 md:w-9/12  md:bg-white flex flex-col md:flex-row shadow-2xl rounded-lg">
          {sidebar}
        {form3}
          
      </div>
   
    </div>
  )
}

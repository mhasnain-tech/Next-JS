import Link from 'next/link';
import React from 'react'

const Navbar = () => {
  return (
    <div  >
      <ul className={"flex justify-between items-center p-3"}>
        <Link href={"/Home/about"}>About</Link>
        <Link href={"/Home/contact"}>Contact</Link>
        <Link href={"/Home/analytics"}>Analytics</Link>
        <Link href={"/Home/progress"}>Progress</Link>
        
      </ul>
    </div>
  )
}

export default Navbar

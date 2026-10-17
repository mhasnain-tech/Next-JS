import Link from 'next/link';
import React from 'react'

const Navbar = () => {
  return (
    <div  >
      <ul className={"flex justify-between items-center p-3"}>
        <Link href={"/about"}>About</Link>
        <Link href={"/contact"}>Contact</Link>
        <Link href={"/analytics"}>Analytics</Link>
        <Link href={"/progress"}>Progress</Link>
        
      </ul>
    </div>
  )
}

export default Navbar

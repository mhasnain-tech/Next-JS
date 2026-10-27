const Navbar = () => {
  let lists = [{name : "Home"},{name : "About"},{ name : "Contact"},{ name : "Services"}]

  return (
    <nav className="p-3 bg-black flex justify-around items-center">
    <div><h1 className="text-3xl font-bold">NEXT APPLICATION</h1></div>
    <div>
        <ul className="flex gap-20">
    {lists ? lists.map((li,idx) => (<li className="text-lg hover:cursor-pointer hover:text-red-600" key={idx}>{li.name}</li>)) : ""}
        </ul>
    </div>
    </nav>
  )
}

export default Navbar

import Nav from "./nav"

const Header = () => {
  return <header className="h-14 flex justify-between items-center px-3">
    <div className="font-bold text-xl tracking-wider font-mono">Idid</div>
    <Nav />
  </header>
}

export default Header
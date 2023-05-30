import logo from 'assets/header-logo.png'

export default function Header() {
  return (
    <header className="bg-zinc-900 px-8 py-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <img className="w-8 mr-4 " src={logo} alt="patneal.codes super nifty logo." />
            Cool stuff
          </div>
        </div>
    </header>
  )
}
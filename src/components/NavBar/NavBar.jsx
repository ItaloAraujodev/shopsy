import logo from '../../assets/logo.png'
import { IoMdSearch } from 'react-icons/io'
import { FaCaretDown, FaCartShopping } from 'react-icons/fa6'
import { DarkMode } from './DarkMode'

const Menu = [
  {
    id: 1,
    name: 'Inicio',
    link: '/#',
  },
  {
    id: 2,
    name: 'Mais votado',
    link: '/#services',
  },
  {
    id: 3,
    name: 'Roupas infantis',
    link: '/#',
  },
  {
    id: 3,
    name: 'Roupas masculinas',
    link: '/#',
  },
  {
    id: 3,
    name: 'Eletrônicos',
    link: '/#',
  },
]

const DropdownLinks = [
  {
    id: 1,
    name: 'Produtos em alta',
    link: '/#',
  },
  {
    id: 2,
    name: 'Mais vendido',
    link: '/#',
  },
  {
    id: 3,
    name: 'Mais votado',
    link: '/#',
  },
]

function NavBar() {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* upper NavBar */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={logo} alt="Logo" className="w-10 uppercase" />
              Shopsy
            </a>
          </div>
          {/* search bar and order button */}
          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Pesquisa..."
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800"
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>
            {/* order button */}
            <div className="flex items-center gap-4">
              <button
                className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
                onClick={() => alert('Ordering not available yet')}
              >
                <span className="group-hover:block hidden transition-all duration-200">
                  Peça agora
                </span>
                <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
              </button>
              {/* Darkmode Switch */}
              <div>
                <DarkMode />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* lower NavBar */}

      <div className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((item, index) => (
            <li key={index}>
              <a
                href={item.link}
                className="inline-block px-4 hover:text-primary duration-200"
              >
                {item.name}
              </a>
            </li>
          ))}
          <li className="group relative cursor-pointer">
            <a href="" className="flex items-center gap-[2px] py-2">
              Tendência
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                {DropdownLinks.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.link}
                      className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar

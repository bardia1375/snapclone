import { useState } from 'react'
import snappIcon from './assets/snappfood.svg'
import { CgProfile } from 'react-icons/cg'
import { CiLocationOn } from 'react-icons/ci'
import { RiFileList2Line } from 'react-icons/ri'

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <div className="bg-primary dark:bg-slate-800 flex justify-between items-center border-[3px] rounded-s-xl p-4">
        {/* دکمه برای تغییر حالت Dark/Light */}

        <div className="py-5 px-4 flex items-center gap-[5px]">
          <p>سفارش</p>
          <RiFileList2Line />
          <div className="translate-y-0.4 translate-x-6">
            <CgProfile />
          </div>
        </div>

        <div dir="rtl" className=" grow">
          <input
            className="p-[5px] w-96 border-2"
            type="text"
            placeholder="جستجو در جهان فود"
          />
        </div>

        <div className="flex items-center gap-2.5 pr-2.5">
          <div className="pr-[55px] text-xs flex text-secondary items-center">
            دولت آباد فلکه 3 خیابان 47
            <CiLocationOn />
          </div>
          <img src={snappIcon} alt="snapp Logo" />
        </div>
      </div>{' '}
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="mb-4 p-2 bg-gray-200 dark:bg-gray-700 rounded"
      >
        Toggle Dark Mode
      </button>
    </div>
  )
}

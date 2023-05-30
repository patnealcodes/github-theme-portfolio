import me from 'assets/me.jpeg'
import ie6 from 'assets/badge-ie6.png'
import vim from 'assets/badge-quit-vim.png'
import gif from 'assets/badge-gif.png'
import projects from 'assets/badge-switch-projects.png'
import deptLogo from 'assets/dept-logo.png'

import './index.css'

import { BuildingOffice2Icon, MapPinIcon } from "@heroicons/react/24/outline";

export default function Sidebar() {
  return (
    <aside className="w-64 -translate-y-8">
      <div className="sidebar-info-section flex flex-col">
        <img className="rounded-full" src={me} alt="Me! patnealcodes" />
        <div className="flex flex-col py-4">
          <strong className="text-2xl">Patrick Bisghuttis</strong>
          More cool stuff
        </div>
        <p className="text-base">Hi. I'm Pat Neal. I codes.</p>
        <button className="bg-zinc-800 border border-zinc-700 my-4 px-2 py-1 rounded-md text-sm">Follow</button>
        <div className="items-center flex mb-4 text-sm">
          <BuildingOffice2Icon className="mr-2 text-zinc-500 w-6" />
          <p className="font-semibold">1 <span className="text-zinc-500">employer</span> · 0 <span className="text-zinc-500">side projects</span></p>
        </div>
        <div className="items-center flex text-sm">
          <MapPinIcon className="mr-2 text-zinc-500 w-6" /> <strong>United States</strong>
        </div>
      </div>
      <div className="sidebar-section sidebar-accomplishments">
        <strong className="block mb-3 text-base">Accomplishments</strong>
      </div>
      <div className="sidebar-section sidebar-current-job">
        <strong className="block mb-3 text-base">Organizations</strong>
        <img className="rounded-md w-8" src={deptLogo} alt="DEPT&reg;" />
      </div>
    </aside>
  )
}
import './nav.css'

import {
  ChartBarSquareIcon, DocumentTextIcon
} from '@heroicons/react/24/outline'

export default function Nav() {
  return (
    <nav className="nav">
      <div className="flex gap-4 width-container">
        <div className="nav-sidebar-spacer" />
        <div className="flex gap-2">
          <a href="#todo-react-router" className="nav-item nav-item-active">
            <ChartBarSquareIcon className="mr-2 w-6 text-zinc-500" />
            <strong>Overview</strong>
          </a>
          <a href="#todo-react-router" className="nav-item">
            <DocumentTextIcon className="mr-2 w-6 text-zinc-500" />
            <strong>Resume</strong>
          </a>
        </div>
      </div>
    </nav>
  )
}
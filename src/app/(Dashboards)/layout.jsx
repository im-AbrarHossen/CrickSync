import React from 'react'

export default function DashboardLayout({ children }) {
  return (
    <div className=''>
      <div className='grid grid-cols-12'>
        {/* left side navbar */}
        <div className='col-span-3'>
          <ul>
            <li>goood</li>
          </ul>
        </div>

        {/* Dashboard Content */}
        <div className='col-span-9'>
          {children}
        </div>
      </div>
    </div>
  )
}

import React from 'react'

export default function Servicecard({title,disc,src:Component}) {
    return (
        <div className="flex">
        <div className="flex-shrink-0">
          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
            <Component  className="h-6 w-6" />
          </div>
        </div>
        <div className="ml-4">
          <dt className="text-lg leading-6 font-medium text-gray-900 capitalize">
            {title}
          </dt>
          <dd className="mt-2 text-base text-gray-500">
            {disc}
          </dd>
        </div>
      </div>
    )
}

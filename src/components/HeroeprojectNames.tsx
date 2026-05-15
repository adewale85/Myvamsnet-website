import React from 'react'

function HeroeprojectNames() {

    const projectNames = [
     {name: "Miitas"},
     {name: "Eliad Investment"},
     {name: "SEI Africa"},
     {name: "AngyCare UK"},
     {name: "Mtrackr"},
    ]

  return (
    <div className='flex items-center justify-between'>
        {projectNames.map((project) => (
            <h1 key={project.name} className='text-[24px] font-bold leading-15.5 text-white'>
                {project.name}
            </h1>
        ))}
    </div>
  )
}

export default HeroeprojectNames
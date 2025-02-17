import React from 'react'

export default function SkillsComponent({img, title}) {
  return (
    <div className='flex flex-col items-center justify-between gap-y-2 border p-1 w-28 h-52'>
      <section className=' h-3/4 flex justify-center items-center'>
        <img src={img} alt={title} width={120}/> 
      </section>
      <section className='h-1/4'>
        <p className='text-center'>{title}</p>
      </section>
    </div>
  )
}

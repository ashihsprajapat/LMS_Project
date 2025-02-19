

import React from 'react'
import Button from '@mui/material/Button';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export default function CallToAction() {
  return (
    <div className='flex flex-col items-center gap-4 pt-10 pb-24 px-8 md:px-0' >
      <h1 className='text-xl md:text-4xl text-gray-800 font-semibold '>Learn anything, anytime, anywhere </h1>
      <p className='text-gray-500 sm:text-sm'>Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur commodo do ea.</p>
      <div className='flex items-center font-medium gap-6 mt-4'>
        <Button variant='contained' sx={{ textTransform: 'none', }} >Get started </Button> &nbsp;
        <Button variant='text' sx={{textTransform: 'none', color:"black"}}>Learn more  <ArrowRightAltIcon />  </Button>
      </div>

    </div>
  )
}

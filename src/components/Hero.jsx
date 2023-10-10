import React from 'react'
import { logo, github } from '../assets'

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
        <nav className='flex justify-between items-center w-full mb-10 pt-3'>
            <img src={logo} alt="sumz_logo" className='w-32 object-contain' />
            <button 
              type="button"
              onClick={() => window.open('https://github.com/Alimzade/ai_summarizer')}
              className='black_btn flex items-center justify-center group'
            >
              <p className='font-semibold font-inter'>Github</p> &nbsp;
              <img src={github} className='w-8 invert-0 group-hover:invert' />
                
            </button>
            
        </nav>

        <h1 className='head_text'>Summarize Articles with <br className='max-md:hidden' /><span className='orange_gradient'>OpenAI GPT-4</span></h1>
        <h2 className='desc'>Shortly is an open-source article summarizer that uses artificial intelligence to break down long articles into clear and concise summaries, highlighting the most important points. </h2>
    </header>
  )
}

export default Hero
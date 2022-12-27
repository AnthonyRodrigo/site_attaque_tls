import React from 'react'
import { useEffect,useState } from 'react'
import { BiArrowFromBottom } from 'react-icons/bi'

const ScrollToTop = props => {
    const [isVisible,setIsVisible] = useState(false);

    const classNames =(...classes) => {
        return classes.filter(Boolean).join(' ');
    }

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else{
            setIsVisible(false);
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    useEffect(()=> {
        window.addEventListener('scroll',toggleVisibility);
        
        return () => {
            window.removeEventListener('scroll',toggleVisibility);
        }

    },[])

  return (
    <div className='fixed bottom-7 right-4'>
        <button type='button' onClick={scrollToTop} 
        className={classNames(isVisible ? 'opacity-100' : 'opacity-0',
        'inline-flex items-center p-3 rounded-full shadow-sm text-bgFooter bg-white transition-opacity hover:bg-colorGris focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-bgFooter'
        )}>
            <BiArrowFromBottom className='h-5 w-5' aria-hidden='true'/>
        </button>
    </div>
  )
}

export default ScrollToTop
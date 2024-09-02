import  { useEffect, useState } from 'react'
import classes from '../styles/goTopButton.module.css'


const GoTopButton = () => {

const [ showGoTop, setShowGoTop ] = useState( true )

const handleVisibleButton = () => {
    const pos=(window.pageYOffset > 50 )
    console.log(pos);
    setShowGoTop(  pos   )
}

const handleScrollUp = () => {
    window.scrollTo( { left: 0, top: 0, behavior: 'smooth' } )
}

useEffect( () => {
    window.addEventListener( 'scroll', handleVisibleButton )
}, [] )

return (
    <div className={ showGoTop ? '' : classes.goTopHidden } onClick={ handleScrollUp }>
        <button type={'button'} className={ classes.goTop }>
        {/* <i className=" fas fa-chevron-up" /> */}
            up
        </button>
    </div>
) 
} 

export default  GoTopButton ; 
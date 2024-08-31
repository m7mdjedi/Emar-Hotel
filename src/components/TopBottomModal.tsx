import { Link } from 'react-router-dom'
import classes from '../styles/topBottomModal.module.css'
const TopBottomModal = (props:any) => {
  return (
    <div className={classes.modalParent}> 
     <Link to= {`/${props.link}`} >
    <div className={classes.modal}> 
        {props.text}
    </div>
     </Link>
  
    </div>
  )
}

export default TopBottomModal


import classes from '../styles/dropMenu.module.css'
const DropMenu = (props:any) => {
  return (
        <ul className={classes.dropMenu }> 
            {props.items.map((ele:any)=><li>{ele}</li>)}
        </ul>
  )
}

export default DropMenu

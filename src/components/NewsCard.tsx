
import classes from '../styles/news.module.css'
const NewsCard = (props:any) => {
  return (
    <div className={classes.news_card}>
        <div> 
            <img src={props.image}/>
        </div> 
        <div> 
            <h3> 
                {props.title}
            </h3> 
            <p> 
                {props.summary}
            </p>
        </div>
    </div>
  )
}

export default NewsCard

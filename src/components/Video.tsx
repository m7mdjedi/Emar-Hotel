const Video = (props:any) => {
  return (
   
  <video id="bannerVideo" autoPlay width={props.width} min-height={props.height} muted loop>
          <source src={props.video} type="video/mp4" />
        </video>
 
  )
}

export default Video

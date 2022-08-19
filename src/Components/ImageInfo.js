const ImageInfo = ({showInfo,copy,images}) => {
  return (
    <div>
      {
        showInfo===true ?
        <div>
        <h1 className='info-header'>{copy.toUpperCase()}</h1>
        <p className='info-details'>{images.length} images have been found</p></div>
        :<div />
      }
    </div>
  )
}

export default ImageInfo

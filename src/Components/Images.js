const Images = ({images,counter}) => {
  return (
    <div className='collection'>
    {
      images.map((image,index)=>{
        if(index<counter){  
          return(
          <img key={image.id} src={image.urls.regular} alt={image.alt_description} className='single'/>);
        }
        else
         return null;
      })
    }
    </div>
  )
}

export default Images

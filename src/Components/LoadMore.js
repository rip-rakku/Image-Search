const LoadMore = ({counter,increaseCounter,images}) => {
  return (
    <div>
      {counter>0&&counter<images.length?<button className='btn-load' onClick={increaseCounter}>Load More</button>:<div />}
    </div>
  )
}

export default LoadMore

import basketball from './basketball-graphic.png'

const Loader = () => {
 return (
  <div className='col-span-full' style={{ height: '65vh' }}>
   <div className='flex-1 h-full flex justify-center items-center'>
    <img src={basketball} alt="" className='animate-bounce h-20' />
   </div>
  </div>
 )
}

export default Loader
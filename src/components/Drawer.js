function Drawer(){
    return(
        <div style={{display:'none'}} className='overlay' >
        <div className='drawer' >
      <h2 className=' d-flex justify-between mb-30 '>Корзина            <img className=' cu-p' src='/img/btnRemove.svg'alt='Remove'/>
</h2>
      <div className='items'>

          <div className='cartItem d-flex align-center mb-20'>
            <div style={{backgroundImage:'url(/img/t_shirt.jpg)'}} ></div>
            <img className='mr-20' width={70} height={70}  src='/img/t_shirt.jpg'alt='T-shirt'/>
              <div className='mr-20'>
                <p className='mb-5'>Мужские футболки вапа</p>
                <b>12999uah</b>
              </div>
            
            <img className='removeBtn' src='/img/btnRemove.svg'alt='Remove'/>

          </div>

      <div className='cartItem d-flex align-center mb-20'>
          <img className='mr-20' width={70} height={70}  src='/img/t_shirt.jpg'alt='T-shirt'/>
            <div className='mr-20'>
              <p className='mb-5'>Мужские футболки вапа</p>
              <b>12999uah</b>
            </div>
            
          <img className='removeBtn' src='/img/btnRemove.svg'alt='Remove'/>
      </div>

      
      
      </div>
      
      <div  className='cartTotalBlock'>
          <ul >
              <li className='d-flex'>
                <span className='mr-25 mb-30' >К оплате:</span>
                <div></div>
                <b>12999UAH</b>
              </li>
          </ul>
          <button className='greenButton'>Oформить заказ</button>  
            
      </div>

    </div>
    </div>

    )
}

export default Drawer;

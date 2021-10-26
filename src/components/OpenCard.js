import Card from "./Card";

function OpenCard(props){
    return(
         <div style={{display:'none'}}  className='more'>
        <div className ='picture'>
            
        <img width={170} height={170}   src={props.imageUrl} alt='t_shirt'/>

        </div>
        <div className ='moreInfo'>
        <img className='removeBtn' src='/img/btnRemove.svg'alt='Remove'/>

        <h5></h5>
        <select className='size'>
            <option value='value1'>1</option>
            <option value='value2'>2</option>
            <option value='value3'>3</option>
            <option value='value4'>4</option>
            <option value='value5'>5</option>
        </select>
        
            <div>
                Таблица розмеров
            </div>

             <select className='color'>
            <option value='color1'>black</option>
            <option value='color2'>white</option>
            <option value='color3'>red</option>
            <option value='color4'>green</option>
            <option value='color5'>pink</option>
        </select>
        <button className='greenButton'> добавить в корзину</button> 
        </div>
        
       


   
         </div>
         


    )

}

export default OpenCard;
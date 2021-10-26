import OpenCard from "./OpenCard";

function Card(props){
    return(
        <div className='card' >
     <div className='favorite' >
        <img src='/img/heardW.svg' alt='unliked'/>
     </div>
     <img width={170} height={170}   src={props.imageUrl} alt='t_shirt'/>
     <h5>{props.title}</h5>
     <div className='d-flex justify-between align-center' >
       <div className='d-flex flex-column ' >
         <span>Цена:</span>
         <b>{props.price}uah</b>
       </div>
       <button className='button' onClick={()=>OpenCard} >подробнее</button>
       {/* <button  width={11} height={11} className='button' >
         <img  width={11} height={11} src='/img/Vector.svg' alt='plus'/>
       </button> */}
     </div>
   </div>
    );
}

export default Card;
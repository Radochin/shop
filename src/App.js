import logo from './logo.svg';
import './App.css';
import Card from './components/Card'
import Menu from './components/Menu';
import Header from './components/Header';
import Drawer from './components/Drawer';
import OpenCard from './components/OpenCard';


const arr=[
  {title:'Мужские футболки вапа',price:12999, imageUrl:'/img/t_shirt.jpg'},
  {title:'Женская футболка ципа',price:16999, imageUrl:'/img/t_shirt.jpg'},
  ];


function App() {
  return <div className='wrapper clear'>
    <Drawer/>
    
    <Header/>
    <OpenCard/>


  <div className='content p-40' ></div>
  <div className='d-flex align-center justify-between mb-40 ml-40 mr-40'>
   <h1>VSE T-SHIRTS</h1>
    <div className='search-block d-flex'>
      <img src='/img/search.svg' alt='search'/>
      <input placeholder='Поиск...'/>

      </div>      
    </div>
   
   <div className='d-flex justify-between ml-25'  >
     {arr.map((obj)=>(
       
       <Card
       title={obj.title}
       price={obj.price}
       imageUrl={obj.imageUrl}
       />
     ))}
       
 
      
     </div>
   </div>





      
  
}

export default App;

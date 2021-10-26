import Menu from './Menu'
function Header(){
    return(
<header className ='d-flex justify-between align-center p-40 ' >
<div className='d-flex align-center' >
  <img width ={40} height={40} src='/img/pepsi.png' />
  <div>

    <h3 className='text-uppercase' >magaz t/shirt</h3>
    <p>super t-shirts</p>
  </div>
</div>

<Menu/>
<Menu/>
<Menu/>
<Menu/>
<Menu/>
<ul className='d-flex' >
    <li className='mr-30' >
    <img width ={18} height={18} src='/img/korzina.png' />
        <span>1205uah</span>
    </li>
  <li>
  <img width ={20} height={20} src='/img/korzina.png' />
  </li>
</ul>
</header>
    )
}
export default Header
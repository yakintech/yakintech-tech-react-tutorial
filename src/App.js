import { useContext } from "react"
import { Link, Route, Routes } from "react-router-dom"
import AutocompleteSample from "./materialSample/AutocompleteSample"
import DataDisplay from "./materialSample/DataDisplay"
import ProductDataGrid from "./materialSample/ProductDataGrid"
import IdHooksSample from "./otherHooks/IdHooksSample"
import LayoutHookSample from "./otherHooks/LayoutHookSample"
import RefHookSample from "./otherHooks/RefHookSample"
import AboutPage from "./routerSample/AboutPage"
import CartPage from "./routerSample/CartPage"
import ContactPage from "./routerSample/ContactPage"
import HomePage from "./routerSample/HomePage"
import NoMatch from "./routerSample/NoMatch"
import ProductDetail from "./routerSample/ProductDetail"
import ProductList from "./routerSample/ProductList"
import { cartContext } from "./store/cartContext"

function App() {

  const {cart, setCart } = useContext(cartContext)

  let totalPrice = 0;

  cart.forEach(element => {
    totalPrice = totalPrice + (element.price * element.quantity) 
  });

  return (<>
    <h1>Site Header</h1>
    <h1>Cart Count: {cart.length}</h1>
    <h1>Total Price: {totalPrice.toFixed(2)}</h1>

    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/hakkimizda'>About</Link></li>
      <li><Link to='/iletisim'>Contact</Link></li>
      <li><Link to='/urunler'>Products</Link></li>
      <li><Link to='/datadisplay'>Material Data Display</Link></li>
      <li><Link to='/productdatagrid'>Product Data Grid</Link></li>
      <li><Link to='/autocomplete'>Autocomplete Sample</Link></li>
      <li><Link to='/cart'>Cart Sample</Link></li>
      <li><Link to='/refsample'>Ref Sample</Link></li>
      <li><Link to='/layouthook'>Layout Hook Sample</Link></li>
      <li><Link to='/idhook'>Id Hook Sample</Link></li>



    </ul>

    <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='/hakkimizda' element={<AboutPage />}></Route>
      <Route path='/iletisim' element={<ContactPage />}></Route>
      <Route path='/urunler' element={<ProductList/>}></Route>
      <Route path='/urunler/:id' element={<ProductDetail/>}></Route>
      <Route path='/datadisplay' element={<DataDisplay/>}></Route>
      <Route path='/productdatagrid' element={<ProductDataGrid/>}></Route>
      <Route path='/autocomplete' element={<AutocompleteSample/>}></Route>
      <Route path='/cart' element={<CartPage/>}></Route>
      <Route path="/refsample" element={<RefHookSample/>}></Route>
      <Route path="/layouthook" element={<LayoutHookSample/>}></Route>
      <Route path="/idhook" element={<IdHooksSample/>}></Route>



      <Route path='*' element={<NoMatch />}></Route>
    </Routes>
    <h1> Site Footer</h1>
  </>
  )
}

export default App

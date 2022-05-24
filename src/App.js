import { Link, Route, Routes } from "react-router-dom"
import AutocompleteSample from "./materialSample/AutocompleteSample"
import DataDisplay from "./materialSample/DataDisplay"
import ProductDataGrid from "./materialSample/ProductDataGrid"
import AboutPage from "./routerSample/AboutPage"
import ContactPage from "./routerSample/ContactPage"
import HomePage from "./routerSample/HomePage"
import NoMatch from "./routerSample/NoMatch"
import ProductDetail from "./routerSample/ProductDetail"
import ProductList from "./routerSample/ProductList"

function App() {


  return (<>
    <h1>Site Header</h1>

    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/hakkimizda'>About</Link></li>
      <li><Link to='/iletisim'>Contact</Link></li>
      <li><Link to='/urunler'>Products</Link></li>
      <li><Link to='/datadisplay'>Material Data Display</Link></li>
      <li><Link to='/productdatagrid'>Product Data Grid</Link></li>
      <li><Link to='/autocomplete'>Autocomplete Sample</Link></li>


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

      <Route path='*' element={<NoMatch />}></Route>
    </Routes>
    <h1> Site Footer</h1>
  </>
  )
}

export default App
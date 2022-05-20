import { Route, Routes } from "react-router-dom"
import AddCategory from "./fetchSample/AddCategory"
import AddCategoryWithAxios from "./fetchSample/AddCategoryWithAxios"
import UserList from "./fetchSample/UserList"
import AboutPage from "./routerSample/AboutPage"
import ContactPage from "./routerSample/ContactPage"
import HomePage from "./routerSample/HomePage"

function App() {


  return (<>
<h1>Site Header</h1>
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/hakkimizda' element={<AboutPage/>}></Route>
      <Route path='/iletisim' element={<ContactPage/>}></Route>
    </Routes>
<h1> Site Footer</h1>
  </>
  )
}

export default App
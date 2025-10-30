import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './ui/Home'
import Menu,{loader as menuLoader} from './features/menu/Menu'
import Cart from './features/cart/Cart'
import CreateOrder from './features/order/CreateOrder'
import Order,{loader as orderLoader} from './features/order/Order'
import AppLayout from './ui/AppLayout'
import Error from './ui/Error'

//new way of implementing routes,
//array of object each object is a route
const router = createBrowserRouter([
  {
    element: <AppLayout />,    //layput router no path
    errorElement : <Error />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/menu',
        element: <Menu />,
        loader : menuLoader,
        errorElement : <Error />,
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/order/new',
        element: <CreateOrder />
      },
      {
        path: '/order/:orderId',
        element: <Order />,
        loader : orderLoader,
        errorElement : <Error />,
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />
}

export default App;

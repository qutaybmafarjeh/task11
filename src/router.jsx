import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/home/Home";
import Users from "./pages/users/Users";
import UserDetails from "./pages/users/UserDetails";
import Create from "./pages/users/Create";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
        
    },
    {
        path: 'users',
        element: <Users />
    },
    {
        path: 'users/create',
        element: <Create />
    },
    {
        path: 'users/:id',
        element: <UserDetails />
    }

]
}
]);
export default router;
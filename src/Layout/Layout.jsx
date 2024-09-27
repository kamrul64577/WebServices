import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <div>
           
                <Link to="/">Home</Link>
            
            <Outlet />
        </div>

    )
}

export default Layout; 
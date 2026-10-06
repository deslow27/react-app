import { NavLink, Outlet } from "react-router-dom";
import "../styles/index.css";

function RootLayout() {
    return (
        <>
            <NavLink className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "")} to="/">
                Home
            </NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <Outlet />
        </>
    );
}

export default RootLayout;

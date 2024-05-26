/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const PrivateRoutes = ({children}) => {

    const {user, loading} = useAuth()
    const location = useLocation()
if(loading){
    return <p className="text-center py-8">
    <span className="loading loading-dots loading-lg"></span>
    <span className="loading loading-dots loading-lg"></span>
    <span className="loading loading-dots loading-lg"></span>
    <span className="loading loading-dots loading-lg"></span></p>
}
    if(user){
        return children;
    }
    return <Navigate to={'/login'} state={{from:location}} replace />
};

export default PrivateRoutes;
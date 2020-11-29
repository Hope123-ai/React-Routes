import {Route, Redirect} from "react-router-dom";
const RedirectRoute = (Component, props) => {
    function isUserAuthenticated()
    {
        let token=localStorage.getItem("token")
        if(token){
            return true
        }else{
            return false
        }
    }
    if(isUserAuthenticated()){
        return (
            <Component {...props} />
        )
    }
    else {
            return (
                <Redirect to={{
                    pathname: '/login',
                    state: {from: props.location}
                }}/>
            );
        }
};

 function AuthenticatedRoute({component: Component, ...rest}) {
return(
    <Route {...rest} render={(props) => (
         RedirectRoute(Component, props)
    )}/>)
};
    
export default AuthenticatedRoute;
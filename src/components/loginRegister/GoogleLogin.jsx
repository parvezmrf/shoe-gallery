import useAuth from "../../hooks/useAuth";

const GoogleLogin = () => {
    const {googleLogin}= useAuth()
    const handleGoogleSignIn = ()=>{
        googleLogin()
    }
  return (
    
      <button onClick={handleGoogleSignIn} className="btn m-8 w-80 btn-primary ">With Google</button>
    
  );
};

export default GoogleLogin;

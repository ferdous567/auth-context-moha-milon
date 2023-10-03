import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Home = () => {
    const authInfo = useContext(AuthContext);
    console.log(authInfo)
    return (
        <div>
           <h3 className="text-3xl">This is home.</h3> 
 
        </div>
    );
};

export default Home;
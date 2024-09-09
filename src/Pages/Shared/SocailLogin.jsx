import { FaGoogle } from "react-icons/fa6";
import useAuth from "../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const SocailLogin = () => {
  const { googleSignIn } = useAuth()
  const axiosPublic = useAxiosPublic()
const navigate = useNavigate()
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
              console.log(result.user);
              const userInfo = {
                email: result.user?.email,
                name:result.user?.displayName
              }
              axiosPublic.post('/users', userInfo)
                .then(res => {
                  console.log(res.data);
                  navigate('/')
              })
        })
    }
  return (
    <div>
      <button onClick={handleGoogleSignIn} className="btn">
        <FaGoogle></FaGoogle>
        Google
      </button>
    </div>
  );
};

export default SocailLogin;

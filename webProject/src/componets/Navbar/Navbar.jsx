import logo from "../../assets/logo.svg"
import { IoSearchOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
    return (
        <div className='Navbar'>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="navlinks">
                <span>Home</span>
                <span>AboutUs</span>
                <span>Products <IoIosArrowDown /> </span>
                <span>Services <IoIosArrowDown /> </span>
                <span>ContactUs</span>
            </div>
            <div className="auth">
                <IoSearchOutline />
                <FiUser />
                <p>Account</p>
            </div>
        </div>
    )
}

export default Navbar
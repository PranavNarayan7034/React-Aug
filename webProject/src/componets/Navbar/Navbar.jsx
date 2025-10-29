import logo from "../../assets/logo.svg"
import { IoSearchOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import './Navbar.scss'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from "react";
const Navbar = () => {
    const [dropDown, setDropdown] = useState(false)
    // console.log("dropdown",dropDown)
    return (
        <div className='Navbar'>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="navlinks">
                <span>Home</span>
                <span>AboutUs</span>
                <div className="dropdown"
                    onMouseEnter={() => setDropdown(true)}
                    onMouseLeave={() => setDropdown(false)}>

                    <span>Products <IoIosArrowDown /> </span>
                    <AnimatePresence>
                        {dropDown && (
                            <motion.div className="dropdown-menu"
                                initial={{opacity:0,y:-100}}
                                animate={{opacity:1,y:0}}
                                exit={{opacity:0,y:-100}}
                                transition={{duration:0.5}}
                            >
                                <span>Electronics</span>
                                <span>Clothing</span>
                                <span>Accessories</span>
                                <span>Groceries</span>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <span>ContactUs</span>
            </div>
            <div className="auth">
                <IoSearchOutline />
                <p> <FiUser /> Account</p>
            </div>
        </div>
    )
}

export default Navbar
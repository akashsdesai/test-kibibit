import { Routes, Route, useLocation, Link } from "react-router-dom";
import Login from "./pages/login/login";
import Home from "./pages/home/home";
import Other from "./pages/others/other";
import styles from './App.module.scss';
import { useEffect, useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { SiOpensearch } from "react-icons/si";
import { FaRegFileAlt } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { MdOutlineVerifiedUser } from "react-icons/md";

function App() {
  const location = useLocation();
  const [show, setShow] = useState(false);
  const [current, setCurrent]=useState("/home")
  useEffect(() => {
    setShow(location.pathname !== '/');
    
  }, [location]);

  return (
    <div className={styles.app}>
      {show && (
        <div className={styles.bottomBar}>
          <Link to="/home" ><IoHomeOutline onClick={()=>{setCurrent("/home")}} color={current==="/home"? "BF77F6":""} size={28}/></Link>
          <Link to="/other" ><SiOpensearch onClick={()=>{setCurrent("/other")}}  color={current==="/other"? "BF77F6":""} size={28}/></Link>
          <Link to="/other1" ><FaRegFileAlt onClick={()=>{setCurrent("/other1")}} color={current==="/other1"? "BF77F6":""} size={28}/></Link>
          <Link to="/other2" ><FaRegCircleUser onClick={()=>{setCurrent("/other2")}} color={current==="/other2"? "BF77F6":""} size={28}/></Link>
          <Link to="/" ><MdOutlineVerifiedUser onClick={()=>{setCurrent("/home")}} color={current==="/other3"? "BF77F6":""} size={28}/></Link>
        </div>
      )}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/other" element={<Other />} />
        <Route path="*" element={<Other />} />

      </Routes>
    </div>
  );
}

export default App;

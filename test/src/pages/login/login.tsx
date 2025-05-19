
import styles from './login.module.scss';
import loginImage from '../../assets/login.svg'
import { ColorButton } from '../../util/btn';
import { Link } from 'react-router-dom';
  
function Login() {

  return (
    <div className={styles.mainConatiner}>
        <img src={loginImage}/>
        <p className={styles.head}>Choose a<br/>place for your<br/>work</p>
        <p className={styles.random}>lorem ipsum dolor</p>
        <Link to="/home">
        <ColorButton
            textColor="white"
            bgColor="#BF77F6"
            fontSize="1rem"
            padding="0.8rem 2rem"
            sx={{
                textTransform: 'none',
                borderRadius:"12px"
            }}
        >
            Get Started
        </ColorButton></Link>
    </div>
  )
}

export default Login
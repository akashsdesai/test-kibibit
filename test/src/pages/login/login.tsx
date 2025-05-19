
import styles from './login.module.scss';
import loginImage from '../../assets/login.svg'
import { ColorButton } from '../../util/btn';
import { Link } from 'react-router-dom';
  
function Login() {

  return (
    <div className={styles.mainConatiner}>
        <img src={loginImage}/>
        <p className={styles.head}>Choose a place for your work</p>
        <p className={styles.random}>lorem ipsum dolor</p>
        <Link to="/home">
        <ColorButton
            textColor="white"
            bgColor="#BF77F6"
            fontSize="1rem"
            padding="0.3rem 1.5rem"
            sx={{
                textTransform: 'none',
            }}
        >
            Get Started
        </ColorButton></Link>
    </div>
  )
}

export default Login
import { Web3Button, Web3NetworkSwitch } from "@web3modal/react";
import { useWeb3ModalTheme } from '@web3modal/react'
import CustomButton from '@/components/CustomButton';
import styles from '../styles/Home.module.css'
import Link  from 'next/link';

const Navbar = () => {
    const { theme, setTheme } = useWeb3ModalTheme();
    setTheme({
        themeMode: 'dark',
        themeVariables: {
          '--w3m-font-family': 'Roboto, sans-serif',
          '--w3m-accent-color': '#F5841F'
          // ...
        }
      });

    return ( 
        <nav>
        <ul className={styles.menu} >
         <Link href="/"><li className={styles.a} ><a>Home</a></li> </Link> 
         <Link href="/about"><li className={styles.a} ><a>About</a></li> </Link> 
        <Link href="/contect"><li className={styles.a} ><a>Contact</a></li> </Link> 
          <li className={styles.custom}><CustomButton /></li>
        </ul>
      </nav>
     );
}
 
export default Navbar;

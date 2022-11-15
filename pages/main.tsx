import type { AppProps } from 'next/app'
import Image from "next/image";
import styles from 'styles/main.module.css';
import axios from 'axios';

function Main({}) {
  return <>
    <div className={styles.background}>
      <div className={styles.overlay}>
      </div>
      
      <form method="get" action="https://testapi.openbanking.or.kr/oauth/2.0/authorize" target="_blank">
        <input type="hidden" name="response_type" value="code"/>
        <input type="hidden" name="client_id" value="eb821e42-3410-4dec-98f2-f2a8cc40af5d"/>
        <input type="hidden" name="redirect_uri" value="http://localhost:3000/"/>
        <input type="hidden" name="scope" value="login inquiry transfer"/>
        <input type="hidden" name="state" value="b80BLsfigm9OokPTjy03elbJqRHOfGSY"/>
        <input type="hidden" name="auth_type" value="0"/>
        <input type="submit" value="requestAuth"/>
      </form>
      <Image
        className={styles.backgoundImage}
        src="/images/blockchain_back.jpg"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
    </div>
  </>
}

export default Main

export const getStaticProps = async () => {
};

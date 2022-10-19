import type { AppProps } from 'next/app'
import Image from "next/image";
import styles from 'styles/main.module.css';

function Main({ Component, pageProps }: AppProps) {
  return <>
    <div className={styles.background}>
      <div className={styles.overlay}>
        <h2>코딩 마차</h2>
        <h3>이미지 컴포넌트로 배경처리하기</h3>
      </div>
      <Image
        src="/images/blockchain_back.jpg"
        alt="메인 배경 이미지"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
    </div>
  </>
}

export default Main

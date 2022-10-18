import type { AppProps } from 'next/app'

function Main({ Component, pageProps }: AppProps) {
  return <>
  <div className="container">
  <svg id="circle-nav-services" width="100%" height="100%" viewBox="0 0 650 550">
    <svg x="224" y="50" width="200" height="200" viewBox="0 0 500 500">
      <linearGradient id="a" gradientUnits="userSpaceOnUse" x1="250.2542" y1="496.283" x2="250.2542" y2="-.2102">
        <stop offset="0" stopColor="#0F68A9"/>
        <stop offset="1" stopColor="#3DDEED" stopOpacity="0"/>
      </linearGradient>
      <path fill="url(#a)" d="M250.3 0c137 0 248.1 111.1 248.1 248.1S387.3 496.2 250.3 496.2 2.2 385.1 2.2 248.1 113.2 0 250.3 0C112.5 0 .8 111.7.8 249.5S112.5 499 250.3 499s249.5-111.7 249.5-249.5S388 0 250.3 0z"/>
    </svg>
    
    <circle cx="325" cy="150" r="80" className="center"/>
  </svg>
</div>
  </>
}

export default Main

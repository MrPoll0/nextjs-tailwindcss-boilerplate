import '../styles/globals.css'

// https://nextjs.org/docs/advanced-features/custom-app

export function reportWebVitals(metric){
  console.log(metric);
}

function MyApp({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  )
}

export default MyApp

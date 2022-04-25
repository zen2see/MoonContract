import Head from 'next/head'
import SectionWrapper from '../components/SectionWrapper'

export const Home = (): JSX.Element => {

  return (
    <>
      <Head>
        <title>MoonContract</title>
        <meta name="description" content="MoonContract for LearnWeb3" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
   
      <SectionWrapper
        title="The MoonContract"
        description="Is your fuel on HODL?"
        banner="banner"
      />
      {/* <SectionWrapper
        title="The title"
        description="The description"
        banner="banner"
        reverse
      /> */}
    </>
  )
}
export default Home



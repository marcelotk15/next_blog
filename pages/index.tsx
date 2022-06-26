import HeadSEO from 'components/Head'
import Main from 'components/Main'
import Songs from 'components/Songs'
import type { NextPage } from 'next'
import Spacer from 'ui/Spacer'

const Home: NextPage = () => {
  return (
    <div>
      <HeadSEO />

      <Main />
      <Spacer size="lg"/>
      <Spacer size="lg"/>
      <Spacer size="lg"/>
      <Spacer size="lg"/>
      <Songs />
    </div>
  )
}

export default Home

import { Footer, Header } from "../components/layout"

const BaseLayout = ({children, type}) => {
  return (
    <>
      <Header type={type} />
      <main>
        { children } 
      </main>
      <Footer />
    </>
  )
}

export default BaseLayout

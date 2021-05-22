import { Footer, Header } from "../components/layout"

const BaseLayout = ({children}) => {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          { children } 
        </div>
      </main>
      <Footer />
    </>
  )
}

export default BaseLayout

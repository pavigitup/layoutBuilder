import ConfigurationContext from '../../context/ConfigurationContext'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      const leftNavbarMenu = () => (
        <div>
          <h1>Left Navbar Menu</h1>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
          </ul>
        </div>
      )

      const rightNavbarMenu = () => (
        <div>
          <h1>Right Navbar Menu</h1>
          <p>Ad 1</p>
          <p>Ad 2</p>
        </div>
      )

      const contentMenu = () => (
        <div>
          <h1>Content</h1>
          <p>Lorem ipsum hgdfuhsdkfjsdsoiajs</p>
        </div>
      )

      return (
        <div>
          <div>{showLeftNavbar && leftNavbarMenu()}</div>
          <div>{showContent && contentMenu()}</div>
          <div>{showRightNavbar && rightNavbarMenu()}</div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body

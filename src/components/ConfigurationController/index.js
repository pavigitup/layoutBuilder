import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onClickContent = () => {
        onToggleShowContent(showContent)
      }
      const onClickRightNavbar = () => {
        onToggleShowLeftNavbar(showLeftNavbar)
      }
      const onClickLeftNavbar = () => {
        onToggleShowRightNavbar(showRightNavbar)
      }

      return (
        <div>
          <h1>Layout</h1>
          <div>
            <input
              id="content"
              type="checkbox"
              className="input-box"
              onChange={onClickContent}
              checked={showContent}
            />
            <label htmlFor="content">Content</label>
          </div>
          <div>
            <input
              id="content"
              type="checkbox"
              className="input-box"
              onChange={onClickRightNavbar}
              checked={showLeftNavbar}
            />
            <label htmlFor="content">Left Navbar</label>
          </div>
          <div>
            <input
              id="content"
              type="checkbox"
              className="input-box"
              onChange={onClickLeftNavbar}
              checked={showRightNavbar}
            />
            <label htmlFor="content">Right Navbar</label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController

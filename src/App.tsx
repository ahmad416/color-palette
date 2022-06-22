/** Containers **/
import { GlobalContainer } from "./containers/global.container";

/**
 * Components
 */
import { MiniPalette } from "./components/MiniPalette";
import { ColorPalette} from "./data/color-data";

/** Styles **/
import './App.css';


function App() {

  return (
      // Container Component
      <GlobalContainer>
          <section className='app'>
              <div className='inner-section'>
                  <div className="palette-list">
                      { ColorPalette.map((color) => (
                          <MiniPalette paletteName={ color.paletteName }  id={color.id} emoji={ color.emoji } colors={ color.colors}/>
                      ))}
                  </div>
              </div>
          </section>
      </GlobalContainer>

  )
}

export default App

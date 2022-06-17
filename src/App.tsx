import { ColorPalette} from "./data/color-data";
import {Palette} from "./pages/Pallete";

function App() {

  return (
    <Palette {...ColorPalette[2]}/>
  )
}

export default App

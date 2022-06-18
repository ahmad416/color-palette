import { ColorUtils} from "./utils/color-utils";
import { ColorPalette} from "./data/color-data";
import {Palette} from "./pages/Pallete";

function App() {
  const generateNewPalette = new ColorUtils(ColorPalette[2])
  return (
    <Palette {...generateNewPalette.generatePalette()}/>
  )
}

export default App

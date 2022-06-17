import {IPalette} from "../../interfaces/palette.interface";
import {IColor} from "../../interfaces/colors.interface";
import { PaletteContainer, PaletteColor} from "./palette.style";
import {ColorBox} from "../../components/ColorBox";



export const Palette = (colorPalette: IPalette) => {
    const {paletteName, id, emoji, colors} = colorPalette;

    // Rendering Color Boxes
    const ColorBoxes = colors.map((color:IColor) => {
        {/* ColorBox Component */}
        return <ColorBox background={color.color} name={color.name} key={ color.name } />
    })

    return (
        // div element using styled component
        <PaletteContainer>
            {/* div element*/}
            <PaletteColor>
                { ColorBoxes }
            </PaletteColor>
        </PaletteContainer>
    );
}

import {useState} from "react";


import { PaletteContainer, PaletteColor} from "./palette.style";
import { ColorBox } from "../../components/ColorBox";


import { INewColor, INewPalette } from "../../interfaces/new-palette.interface";
import { Header } from "../../shared/components/Header/Header";
import { Footer } from "../../shared/components/Footer/Footer";


export const Palette = (colorPalette: INewPalette) => {
    const [colorLevel, setColorLevel] = useState<number>(600)
    const { colors } = colorPalette;

    // Rendering Color Boxes
    const ColorBoxes = colors[colorLevel].map((color: INewColor) => {
        {/* ColorBox Component */}
        return <ColorBox background={color.hex} name={color.name} key={ color.name } />
    })

    return (
        // div element using styled component
        <PaletteContainer>
            {/* Header Component */}
            <Header changeColorLevel={(value: number| number[]) => setColorLevel(value as number)} value={colorLevel}/>
            {/* div element*/}
            <PaletteColor>
                { ColorBoxes }
            </PaletteColor>
            {/*  Footer Component  */}
            <Footer/>
        </PaletteContainer>
    );
}

/**
 *  Third Party Imports
 */
import {useState} from "react";

/**
 *  Styled Components
 */
import {PaletteColor, PaletteContainer} from "./palette.style";

/**
 * Components
 */
import {ColorBox} from "../ColorBox";
import {Header} from "../../shared/components/Header/Header";
import {Footer} from "../../shared/components/Footer/Footer";


/**
 * Interfaces and Enums
 */
import {INewColor, INewPalette} from "../../interfaces/new-palette.interface";
import {ColorFormatEnum} from "../../enums/color-format.enum";


export const Palette = (colorPalette: INewPalette) => {
    /** Props */
    const { colors } = colorPalette;

    /** States */
    const [colorLevel, setColorLevel] = useState<number>(600);
    const [format, setFormat] = useState<ColorFormatEnum>(ColorFormatEnum.RGB);


    /** Changing Color Format (HEX, RGB, RGBA) */
    const ChangeColorFormat = (event: any) => {
        setFormat(event.target.value as ColorFormatEnum)
    }

    /** Rendering Color Boxes */
    const ColorBoxes = colors[colorLevel].map((color: INewColor) => {
        {/* ColorBox Component */}
        return <ColorBox background={color[format]} name={color.name} key={ color.name } />
    })

    return (
        /** div element using styled component */
        <PaletteContainer>
            {/* Header Component */}
            <Header
                changeColorLevel={(value: number| number[]) => setColorLevel(value as number)}
                value={ colorLevel }
                changeFormat={ ChangeColorFormat}
                format={format}
            />
            {/* div element*/}
            <PaletteColor>
                { ColorBoxes }
            </PaletteColor>
            {/*  Footer Component  */}
            <Footer/>
        </PaletteContainer>
    );
}

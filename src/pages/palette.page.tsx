import { useParams } from "react-router-dom";
/**
 * Global Container
 */
import { GlobalContainer } from "../containers/global.container";

/** Utilities **/
import { findPalette} from "../services/palette.service";

/** Components **/
import {Palette} from "../components/Pallete";

export const PalettePage = () => {
    let params = useParams();
    const generatePalette = findPalette(params.paletteId!)

    return (
        <GlobalContainer>
            <Palette { ...generatePalette }/>
        </GlobalContainer>

    );
}

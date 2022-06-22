import { ColorPalette} from "../data/color-data";
import { ColorUtils} from "../utils/color-utils";
import {IPalette} from "../interfaces/palette.interface";
import {INewPalette} from "../interfaces/new-palette.interface";

export const findPalette = (paletteId: string): INewPalette => {
    const palette =  ColorPalette.find((palette: IPalette) => palette.id === paletteId);
    if (typeof palette !== 'undefined') {
        return new ColorUtils(palette).generatePalette();
    }
    return {} as INewPalette;

}

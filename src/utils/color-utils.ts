import chroma from "chroma-js";
import {IPalette} from "../interfaces/palette.interface";
import {INewPalette} from "../interfaces/new-palette.interface";

export class ColorUtils {
    levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
    palette: IPalette

    constructor(palette: IPalette) {
        this.palette = palette;
    }

    public generatePalette() {
        let newPalette: INewPalette = {
            paletteName: this.palette.paletteName,
            id: this.palette.id,
            emoji: this.palette.emoji,
            colors: {}
        };

        for (let level of this.levels) {
            newPalette.colors[level] = [];
        }

        for (let color of this.palette.colors) {
            let scale = ColorUtils.getScale(color.color, 10).reverse();
            for(let i in scale) {
                newPalette.colors[this.levels[i]].push({
                    name: `${color.name} ${this.levels[i]}`,
                    id: color.name.toLowerCase().replace(/ /g, "-"),
                    hex: scale[i],
                    rgb: chroma(scale[i]).css(),
                    rgba: chroma(scale[i]).css().replace('rgb', 'rgba').replace(')', ',1.0)')
                })
            }
        }

        return newPalette;

    }

    private static getRange(hexColor: string): string[] {
        return [chroma(hexColor).darken(1.4).hex(), hexColor, '#fff'];
    }

    private static getScale(hexColor: string, numberOfColors: number): string[] {
        return chroma.scale(ColorUtils.getRange(hexColor)).mode("lab").colors(numberOfColors);
    }
}



import {IColor} from "./colors.interface";

export interface IPalette {
    paletteName: string;
    id: string;
    emoji: string;
    colors: IColor[];
}

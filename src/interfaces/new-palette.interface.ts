export interface INewPalette {
    paletteName: string;
    id: string;
    emoji: string;
    colors: { [key: string]: INewColor[]}
}

export interface INewColor {
    name: string;
    id:   string;
    hex:  string;
    rgb:  string;
    rgba: string;
}

import { Link } from 'react-router-dom';
import './mini-palette.css';
import { IPalette} from "../../interfaces/palette.interface";
import {IColor} from "../../interfaces/colors.interface";


export const MiniPalette = ({ paletteName, id, emoji, colors}: IPalette) => {
    const MiniPaletteBoxes = colors.map((color: IColor) => {
        return <div className='mini-palette' style={{ background: `${color.color}`}}></div>
    })
    return (
        <Link to={`/palette/${id}`} style={{ textDecoration: 'none'}}>
            <div className='root'>
                <div className='mini-color'>
                    <div className="colors">
                        { MiniPaletteBoxes }
                    </div>
                    <h5 className="title">
                        { paletteName }
                        <span className="emoji"> { emoji }</span>
                    </h5>
                </div>
            </div>
        </Link>

    );
}

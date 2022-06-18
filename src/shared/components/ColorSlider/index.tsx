import Slider from "rc-slider";
import 'rc-slider/assets/index.css';
import '../../../assets/css/slider.css';
import {Fragment} from "react";

interface ColorSliderProps {
    changeColorLevel: (value: number) => void;
    value: number;
}

export const ColorSlider = ({ changeColorLevel, value }: ColorSliderProps) => {
    return(
        <Fragment>
            <div className='Color-Slider'>
                <Slider min={100} max={900} step={100} onChange={changeColorLevel} value={value}/>
            </div>
        </Fragment>
    );
}

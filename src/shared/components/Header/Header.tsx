import { Link } from "react-router-dom";
import { HeaderStyledComponent, TitleStyledComponent} from "./header.style";
import { ColorSlider} from "../ColorSlider";
import {SelectContainer} from "../../../components/SelectContainer/SelectContainer";

interface HeaderProps {
    changeColorLevel: (value: number| number[]) => void;
    value: number;
    changeFormat: (format: any) => void;
    format: any
}

export const Header = (props: HeaderProps) => {
    const { changeColorLevel, value, changeFormat, format } = props
    return (
        // Header
        <HeaderStyledComponent>
            <TitleStyledComponent>
                <Link to='/'>Color Palette</Link>
            </TitleStyledComponent>
            <ColorSlider changeColorLevel={changeColorLevel} value={value}/>
            <SelectContainer changeFormat={changeFormat} format={format}/>
        </HeaderStyledComponent>
    );
}

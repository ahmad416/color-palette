import { Link } from "react-router-dom";
import { HeaderStyledComponent, TitleStyledComponent} from "./header.style";
import { ColorSlider} from "../ColorSlider";

interface HeaderProps {
    changeColorLevel: (value: number| number[]) => void;
    value: number
}

export const Header = (props: HeaderProps) => {
    const { changeColorLevel, value } = props
    return (
        // Header
        <HeaderStyledComponent>
            <TitleStyledComponent>
                <Link to='/'>Color Palette</Link>
            </TitleStyledComponent>
            <ColorSlider changeColorLevel={changeColorLevel} value={value}/>
        </HeaderStyledComponent>
    );
}

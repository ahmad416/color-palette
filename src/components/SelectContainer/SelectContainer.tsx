import { Select, MenuItem} from "@mui/material";
import { SelectContainerComponent} from "./select-container.style";

import { ColorFormatEnum } from "../../enums/color-format.enum";

interface SelectContainerProps {
    format: any;
    changeFormat: (format: any) => void
}

export const SelectContainer = ({format, changeFormat}: SelectContainerProps) => {
    return (
        <SelectContainerComponent>
            <Select value={format} autoWidth  onChange={changeFormat}>
                <MenuItem value={ ColorFormatEnum.HEX }>HEX - #ffffff</MenuItem>
                <MenuItem value={ ColorFormatEnum.RGB }>RGB - rgb(255,255,255)</MenuItem>
                <MenuItem value={ ColorFormatEnum.RGBA }>RGBA - rgba(255,255,255,0.1)</MenuItem>
            </Select>
        </SelectContainerComponent>
    );
}

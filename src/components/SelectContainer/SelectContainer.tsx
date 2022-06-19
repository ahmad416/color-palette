import {Select, MenuItem, Snackbar, Alert} from "@mui/material";
import { SelectContainerComponent} from "./select-container.style";

import { ColorFormatEnum } from "../../enums/color-format.enum";
import {useState} from "react";

interface SelectContainerProps {
    format: any;
    changeFormat: (format: any) => void
}

export const SelectContainer = ({format, changeFormat}: SelectContainerProps) => {
    const [open, setOpen] = useState<boolean>(false);

    const onChangeFormat = (event: any) => {
        setOpen(true);
        changeFormat(event);
    }

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <SelectContainerComponent>
            <Select value={format} autoWidth  onChange={onChangeFormat}>
                <MenuItem value={ ColorFormatEnum.HEX }>HEX - #ffffff</MenuItem>
                <MenuItem value={ ColorFormatEnum.RGB }>RGB - rgb(255,255,255)</MenuItem>
                <MenuItem value={ ColorFormatEnum.RGBA }>RGBA - rgba(255,255,255,0.1)</MenuItem>
            </Select>
            <Snackbar open={open} autoHideDuration={2000} onClose={handleClose} anchorOrigin={ {vertical: 'bottom', horizontal: 'right'}} >
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Format change to { format.toUpperCase()}
                </Alert>
            </Snackbar>
        </SelectContainerComponent>
    );
}

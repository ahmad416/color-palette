import { Fragment, ReactNode} from "react";
/** Styles **/
import { GlobalStyle } from "../styles/globalStyle";


interface GlobalProps {
    children?: ReactNode
}

export const GlobalContainer =  ({ children }: GlobalProps) => {
    return (
        <Fragment>
            <GlobalStyle/>
            { children }
        </Fragment>
    );
}

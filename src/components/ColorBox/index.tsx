import {Fragment, useState} from "react";
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { ColorBoxContainer, CopyContainer, BoxContent, CopyButton, SeeMore, CopyOverlay, CopyMessage, CopyMessageText} from "./colorbox.style";


interface ColorBoxProps {
    background: string;
    name: string;
}

export const ColorBox = ({ background, name}: ColorBoxProps) => {
    const [copied, setCopied] = useState<boolean>(false);

    const UpdateCopyState = () => {
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 1000)
    }
    return (
        <Fragment>
            { copied && (
                <CopyOverlay background={background}>
                    <CopyMessage copied={copied}>
                        <CopyMessageText>Copied</CopyMessageText>
                    </CopyMessage>
                </CopyOverlay>)
            }
            <CopyToClipboard text={background} onCopy={ UpdateCopyState }>
                {/* div */}
                <ColorBoxContainer background={background}>
                    {/* div */}
                    <CopyContainer>
                        {/* span */}
                        <BoxContent>{ name }</BoxContent>
                        <CopyButton id='copy-button'>copy</CopyButton>
                        <SeeMore>More</SeeMore>
                    </CopyContainer>
                </ColorBoxContainer>
            </CopyToClipboard>
        </Fragment>
    );
}

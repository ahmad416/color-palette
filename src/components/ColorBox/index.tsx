import { ColorBoxContainer, CopyContainer, BoxContent, CopyButton, SeeMore} from "./colorbox.style";

interface ColorBoxProps {
    background: string;
    name: string;
}

export const ColorBox = ({ background, name}: ColorBoxProps) => {
    return (
        // div
        <ColorBoxContainer background={background}>
            {/* div */}
            <CopyContainer>
                {/* span */}
                <BoxContent>{ name }</BoxContent>
                <CopyButton id='copy-button'>copy</CopyButton>
                <SeeMore>More</SeeMore>
            </CopyContainer>
        </ColorBoxContainer>
    );
}

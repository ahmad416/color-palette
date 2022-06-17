import styled from "styled-components";

export const ColorBoxContainer = styled.div<{ background: string }>`
  background: ${props => props.background};
  width: 20%;
  height: 25%;
  display: inline-block;
  position: relative;
  cursor: pointer;
  margin-bottom: -4px;
  &:hover #copy-button{
    opacity: 1;
  }
`

export const CopyContainer = styled.div`
    
`

export const BoxContent = styled.span`
    position: absolute;
    left: 7px;
    bottom: 6px;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-size: 12px;
    
`

export const CopyButton = styled.button`
    width: 50%;
    height: 20%;
    position: absolute;
    border: none;
    outline: none;
    text-align: center;
    top: 40%;
    left: 25%;
    background: rgba(255, 255, 255, 0.3);
    font-size: 1rem;
    text-transform: uppercase;
    color: white;
    cursor: pointer;
    opacity: 0;
`

export const SeeMore = styled.span`
    width: 60px;
    height: 30px;
    position: absolute;
    bottom: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.3);
    color: white;
    text-transform: uppercase;
    
`

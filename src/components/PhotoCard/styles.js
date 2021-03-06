import styled, { css } from "styled-components";
import { fadeIn } from "../../styles/animations";
import { MdFavorite } from 'react-icons/md'

export const LikeIcon = styled(MdFavorite)`
  color:  #ff277a;
  ${fadeIn({ time: '250ms', type: 'ease-in' })}
`
export const ImgWrapper = styled.div`
    border-radius: 10px;
    display: block;
    height: 0;
    overflow: hidden;
    padding: 56.25% 0 0 0;
    position: relative;
    width: 100%;
`
export const Article = styled.article`
    min-height: 200px;
`

export const Img = styled.img`
    ${fadeIn({ time: '1.5s'})}
    box-shadow: 0 10px 14px rgba(0, 0, 0, .2);
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    width: 100%;
`

export const Button = styled.button`
    display: flex;
    align-items: center;
    padding-top: 8px;
    & svg {
        margin-right: 4px;
    }
    ${props => props.isOver &&
    css`
        color: red;
    `}
    background-color: transparent;
    border: 0px;
`
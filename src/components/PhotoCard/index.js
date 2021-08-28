import React from 'react'
import { ImgWrapper, Img, Button } from './styles'
import { MdFavoriteBorder } from "react-icons/md";

const DEFAULT_IMAGE = 'https://archive-media-1.nyafuu.org/w/image/1530/15/1530151764391.jpg'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE}) => {
    return (
        <article>
            <a href={`/detail/${id}`}>
                <ImgWrapper>
                    <Img src={src}/>
                </ImgWrapper>
            </a>
            <Button>
                <MdFavoriteBorder size='32px'/>{likes} likes!
            </Button>
        </article>
    )
}
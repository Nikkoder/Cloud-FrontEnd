import React, { useState } from 'react'
import { ImgWrapper, Img, Button, Article, LikeIcon } from './styles'
import { MdFavoriteBorder } from "react-icons/md";
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useNearScreen } from '../../hooks/useNearScreen';

const DEFAULT_IMAGE = 'https://archive-media-1.nyafuu.org/w/image/1530/15/1530151764391.jpg'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE}) => {
    const [show, element] = useNearScreen()
    const key = `like-${id}`
    const [liked, setLiked] = useLocalStorage(key, false)
    const [hover, setOver] = useState(false);


    const Icon = liked ? LikeIcon : MdFavoriteBorder // constante con Mayuscula porque es un COMPONENTE

    return (
        <Article ref={element}>
            {
                show && <>
                    <a href={`/detail/${id}`}>
                        <ImgWrapper>
                            <Img src={src}/>
                        </ImgWrapper>
                    </a>
                    <Button onClick={() => setLiked(!liked)}
                    onMouseEnter={() => setOver(true)}
                    onMouseLeave={() => setOver(false)}
                    isOver={hover}>
                        <Icon size='32px'/>{likes} likes!
                    </Button>
                </>
            }
        </Article>
    )
}
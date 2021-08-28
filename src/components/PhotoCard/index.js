import React, { useEffect, useRef, useState } from 'react'
import { ImgWrapper, Img, Button, Article } from './styles'
import { MdFavoriteBorder } from "react-icons/md";

const DEFAULT_IMAGE = 'https://archive-media-1.nyafuu.org/w/image/1530/15/1530151764391.jpg'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE}) => {
    const element = useRef(null)
    const [show, setShow] = useState(false)

    useEffect(() => { 
        Promise.resolve( // Cargamos solamente el import si lo necesitamos
            typeof window.IntersectionObserver !== 'undefined'
                ? window.IntersectionObserver
                : import('intersection-observer')
        ).then(() => {
            const observer = new window.IntersectionObserver((entries) => {
                const { isIntersecting } = entries[0]
                if (isIntersecting)
                {
                    setShow(true)
                    observer.disconnect()
                }
            })
            observer.observe(element.current)
        })
    }, [element])

    return (
        <Article ref={element}>
            {
                show && <>
                    <a href={`/detail/${id}`}>
                        <ImgWrapper>
                            <Img src={src}/>
                        </ImgWrapper>
                    </a>
                    <Button>
                        <MdFavoriteBorder size='32px'/>{likes} likes!
                    </Button>
                </>
            }
        </Article>
    )
}
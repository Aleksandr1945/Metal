import Image from 'next/image'

export const MarkIcons = ({href, width, height}) => {
    return (
        <>
            <Image 
                src = {href} 
                width={width}
                height={height}
                layout="intrinsic"
                   
            />
        </>
    )
}
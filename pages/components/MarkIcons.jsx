import Image from 'next/image'

export const MarkIcons = () => {
    return (
        <>
            <Image 
                src = {'/GalkaPreim.svg'} 
                width={100}
                height={25}
                layout="intrinsic"
                   
            />
        </>
    )
}
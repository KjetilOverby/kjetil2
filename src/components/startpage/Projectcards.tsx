import React from 'react'
import Image from 'next/image'
import ButtonComponent from '../common/ButtonComponent'
import Link from 'next/link'



interface CardProps {
     header: string,
     text: string,
     imgUrl: string;
     link?: string
}
const Projectcards = ({header, text, imgUrl, link}:CardProps) => {
return (
<>
<div className='container'>
    <div className='img-container'>

        <Image src={imgUrl} loader={() => imgUrl} layout='fill' objectFit='cover'  />
        <div className='header-container'>
            <h1 className='card-header'>{header}</h1>
        </div>
                <p className='text'>{text}</p>
            <div className='text-box'>
                <Link href={`${link}`}>
                <p className='button'>LES MER</p>
                </Link>
                
            </div>
    </div>
</div>
<style jsx>{`
.button {
 
}
.button:hover {
    cursor: pointer
}
.container {
   
 
}
.img-container {
    position: relative;
    width: 20rem;
    height: 30rem;
    box-shadow: 5px 5px 20px grey;
    border: 3px solid #f1f1f1;
  
    
}
.card-header {
    
    font-weight: bold;
    font-size: 1.5rem;
    padding: .3rem
  
}
.header-container {
    position: absolute;
    top: 1rem;
    left: 1rem;
    width: 90%;
    padding: 0 .5rem;
    background: rgba(260, 260, 260, .8)
}
.text {
    position: absolute;
    bottom: 4rem;
    left: 1rem;
    color: white;
    font-size: 1.5;
    font-weight: bold
}
.text-box {
    position: absolute;
    bottom: 1rem;
    left: 1rem;
    background: rgba(260, 260, 260, .8);
    width: 90%;
    padding:.5rem;

}
`}
</style>
</>
)
}

export default Projectcards
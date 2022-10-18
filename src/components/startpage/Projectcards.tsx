import React from 'react'
import Image from 'next/image'

const timber = 'https://media.istockphoto.com/photos/pile-of-boards-in-a-warehouse-stacked-wooden-beams-of-rectangular-picture-id1198231366?k=20&m=1198231366&s=612x612&w=0&h=Pp__P0ETveSTW64mU0fYvHcqEYBvGYp-SFonGtCpWWI='


const Projectcards = () => {
return (
<>
<div className='container'>
    <div className='img-container'>

        <Image src={timber} loader={() => timber} layout='fill' objectFit='cover' />
        <div className='header-container'>
            <h1 className='header'>POSTARKIV</h1>
        </div>
    </div>
</div>
<style jsx>{`
.container {
 
}
.img-container {
    position: relative;
    width: 20rem;
    height: 30rem;
    
}
.header {
    
    font-weight: bold;
  
}
.header-container {
    position: absolute;
    top: 1rem;
    left: 1rem;
    width: 90%;
    padding: 0 .5rem;
    background: rgba(260, 260, 260, .6)
}
`}
</style>
</>
)
}

export default Projectcards
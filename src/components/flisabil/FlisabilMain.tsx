import React from 'react'
import MarginLayout from '../common/MarginLayout'
import Appcards from '../common/postarkiv/appsection/Appcards'


const FlisabilMain = () => {
return (
<>
<MarginLayout>
<div className='content-margins'>

<h1 className='header mb'>Flisa Bil</h1>
<p className='mbl'>Flisa Bil hadde en veldig utdatert nettside som var nesten ubrukelig på mobil. Jeg bestemte meg for å lage en nettside for Flisa Bil for å trene litt på å lage nettside. Da jeg hadde laget min andre Flisa Bil nettside så spurte jeg de om de var interessert i en ny nettside. Det var de så jeg publiserte etterhvert en nettside på deres domene. Senere kom det nye versjoner og oppgraderinger.</p>
<div className='appcards-container'>

<Appcards title='Flisa Bil' text='Flisa Bil hadde en nettside som ikke var særlig tilpasset dagens skjermer. Jeg begynte å lage en nettside for Flisa Bil som ikke ble helt ferdig før jeg begynte på en ny.' img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc_oHqJvGW-sDRXZskFaxcaBAIBXJoRWNnxA&usqp=CAU' link='https://flisabil.vercel.app/' />
<Appcards title='Flisa Bil 2' text='Jeg begynte på en ny nettside for Flisa Bil. Denne ble publisert på Flisa Bil sitt domene etter at jeg presenterte siden for dem.' img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJm3D_uaHy_JON_G2Y5wCxkTRAVyRtcf-eVw&usqp=CAU' link='https://flisabil2.vercel.app' />
<Appcards title='Flisa Bil 3' text='En ny versjon ble laget for Flisa Bil med mere innhold i nettsiden.' img='https://ktldesign.net/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fassets%2Fprosjekter%2Fflisabil.14ee19596b466b88b1c837f8de9bcc8d.png&w=1920&q=75' link='https://flisabil3.vercel.app' />
<Appcards title='Flisa Bil 4' text='Da jeg ikke er helt fornøyd enda så oppgraderer jeg nettsiden til det den er idag. Det har kommet på mere bilder og text som gjør at nettsiden ser mer ferdig ut.' img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJm3D_uaHy_JON_G2Y5wCxkTRAVyRtcf-eVw&usqp=CAU' link='https://flisabil.no'/>
</div>
</div>
</MarginLayout>

<style jsx>{`

.container {
}
`}
</style>
</>
)
}

export default FlisabilMain
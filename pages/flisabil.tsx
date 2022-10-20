import React from 'react'
import FooterComponent from '../src/components/common/FooterComponent'
import HeaderComponent from '../src/components/common/HeaderComponent'
import MarginLayout from '../src/components/common/MarginLayout'
import FlisabilMain from '../src/components/flisabil/FlisabilMain'

import flisabildata from '../src/data/flisabildata'


const flisabil = () => {
return (
<>
<MarginLayout>

<HeaderComponent adr='Flisa Bil'/>
</MarginLayout>
<FlisabilMain />
<FooterComponent data={flisabildata} header='Flisa Bil' />

<style jsx>{`
.container {
}
`}
</style>
</>
)
}

export default flisabil
import React from 'react'
import FooterComponent from '../src/components/common/FooterComponent'
import HeaderComponent from '../src/components/common/HeaderComponent'
import MarginLayout from '../src/components/common/MarginLayout'
import StridsbergsMain from '../src/components/stridsbergs/StridsbergsMain'
import stridsbergsdata from '../src/data/stridsbergsdata'


const stridsbergs = () => {
return (
<>

<MarginLayout>
    <HeaderComponent adr='Stridsbergs' />
</MarginLayout>
<StridsbergsMain />
<FooterComponent data={stridsbergsdata} header='Stridsbergs' />

<style jsx>{`
.container {
}
`}
</style>
</>
)
}

export default stridsbergs
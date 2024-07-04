import {deploySite} from '@wix/wml-site-deployer'
import {siteInfo, token} from './mocks'

console.log('start deploy')
deploySite(siteInfo, token).then((res) => {
    debugger
    console.log(res)
}).catch(err => {
    debugger
    console.error(err)
})
console.log('ggggfffff')
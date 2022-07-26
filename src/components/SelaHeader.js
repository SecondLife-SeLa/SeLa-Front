import {
  Segment,
  Image,
  Icon
} from 'semantic-ui-react'

const SelaHeader = () => {
  return (
    <Segment basic vertical>
      <Image centered src={'selaEx.png'} size={'small'} href=''/>
      <a href='./components/loginex.js'><Icon  size='big' style={{
        float:'right',
        color:'#0F4C81',
        marginRight:'15px'}} name='user'></Icon></a>
      <Icon  size='big' style={{
        float:'left',
        color:'#0F4C81',
        marginLeft:'15px'}} name='bars'  link=''></Icon>
    </Segment>
  )
}


export default SelaHeader;
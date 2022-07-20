import {
  Segment,
  Image,
  Icon
} from 'semantic-ui-react'

const SelaHeader = () => {
  return (
    <Segment basic vertical>
      <Image centered src={'selaEx.png'} size={'small'} href={'홈화면으로 가는 링크'} />
      <Icon size='massive' name='user' style={{float:'right', color:'#0F4C81'}} link="로그인 전과 후 다른 링크"></Icon>
      <Icon size='massive' name='bars' style={{float:'left', color:'#0F4C81'}} link="로그인 전과 후 다른 링크"></Icon>
    </Segment>
  )
}


export default SelaHeader;
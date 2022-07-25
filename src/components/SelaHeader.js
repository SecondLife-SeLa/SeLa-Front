import {
  Segment,
  Image,
  Icon
} from 'semantic-ui-react'

const SelaHeader = () => {
  return (
    <Segment basic vertical>
      <Image centered src={'selaEx.png'} size={'small'} href={'홈화면으로 가는 링크'} />
      <Icon  size='big' style={{
        float:'right',
        color:'#0F4C81',
        marginRight:'20px'}} name='user'  link="로그인 전:로그인 페이지 , 로그인 후: 마이페이지"></Icon>
      <Icon  size='big' style={{
        float:'left',
        color:'#0F4C81',
        marginLeft:'15px'}} name='bars'  link="로그인 전:로그인 페이지 , 로그인 후: 마이페이지"></Icon>
    </Segment>
  )
}


export default SelaHeader;

import {
  Segment,
  Header,
  Image,
  Icon
} from 'semantic-ui-react'

const SelaHeader = ({}) => {
  return (
    <Segment basic inverted  vertical>
      <Image centered src={'selaEx.png'} size={'small'} href={'홈화면으로 가는 링크'} />
      <Icon size='big' name='user' corner='top right'></Icon>
    </Segment>
  )
}








export default SelaHeader;
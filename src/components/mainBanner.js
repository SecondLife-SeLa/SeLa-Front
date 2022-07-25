import { 
    Image, 
    List,
    Icon,
    Button
} from 'semantic-ui-react'

const Banner = () => (
  <List horizontal style={
    {margin:0,
    paddingRight:300,
    paddingLeft:300,
    paddingTop:100,
    paddingBottom:100,
    width:'100%',
    justifyContent:'space-between',
    display:'flex',
    backgroundColor:'#0F4C81'}}>

    <List.Item style={
        {borderRadius:'25%',
        backgroundColor:'white'}} >
      <List.Content style={
        {alignItems:'center',
        padding:'40px'}}>
        <Image style={
            {width:'100px',
            height:'100px'}} src='community.png' verticalAlign='top'/>
        <List.Header style={
            {marginTop:'10px',
            marginBottom:'10px'}}>커뮤니티</List.Header>
        <Button icon labelPosition='right'>입장<Icon name='right arrow' />
        </Button>
      </List.Content>
    </List.Item>

    <List.Item style={
        {borderRadius:'25%', 
        backgroundColor:'white'}}>
      <List.Content style={
        {alignItems:'center',
        padding:'40px'}}>
        <Image style={
            {width:'100px',
            height:'100px'}} src='talent.png' verticalAlign='top'/>
        <List.Header style={
            {marginTop:'10px',
            marginBottom:'10px'}}>재능기부</List.Header>
        <Button icon labelPosition='right'>입장<Icon name='right arrow' />
        </Button>
      </List.Content>
    </List.Item>

    <List.Item style={
        {borderRadius:'25%', 
        backgroundColor:'white'}}>
      <List.Content style={
        {alignItems:'center',
        padding:'40px'}}>
        <Image style={
            {width:'100px',
            height:'100px'}} src='lecture.png' verticalAlign='top'/>
        <List.Header style={
            {marginTop:'10px',
            marginBottom:'10px'}}>강연</List.Header>
        <Button icon labelPosition='right'>입장<Icon name='right arrow' />
        </Button>
      </List.Content>
    </List.Item>

    <List.Item style={
        {borderRadius:'25%', 
        backgroundColor:'white',
        padding:'40px'}}>
      <List.Content style={
        {alignItems:'center'}}>
        <Image style={
            {width:'100px',
            height:'100px'}} src='job.png' verticalAlign='top'/>
        <List.Header style={
            {marginTop:'10px',
            marginBottom:'10px'}}>재취업/부업</List.Header>
        <Button icon labelPosition='right'>입장<Icon name='right arrow' />
        </Button>
      </List.Content>
    </List.Item>

    <List.Item style={
        {borderRadius:'25%', 
        backgroundColor:'white',
        padding:'40px'}}>
      <List.Content style={
        {alignItems:'center'}}>
        <Image style={
            {width:'100px',
            height:'100px'}} src='finance.png' verticalAlign='top'/>
        <List.Header style={
            {marginTop:'10px',
            marginBottom:'10px'}}>재무설계</List.Header>
        <Button icon labelPosition='right'>입장<Icon name='right arrow' />
        </Button>
      </List.Content>
    </List.Item>
  </List>
)

export default Banner


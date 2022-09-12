import { 
    Segment,
    Grid,
    Header,
    Icon,
    List
 } from "semantic-ui-react"

 const Board = () => (
    <Segment style={{ 
        paddingRight: '10em',
        paddingLeft:'10em',
        width:'100%'}} vertical>
        <Grid celled='internally' columns='equal' stackable>
            <Grid.Row textAlign='center'>
            <Grid.Column style={{ 
                paddingBottom: '5em', 
                paddingTop: '5em' ,
                paddingRight: '12em',
                padding:'4em'}}>
                <Header as='h3' style={{ 
                    fontSize: '3em',
                    paddingBottom: '30px',
                    }}>
                인기글 TOP5
                </Header>
                <List horizontal style={{
                    width:'100%',
                    marginBottom:'15px'}}>
                    <List.Item style={{float:'left',fontSize:'1.5rem',fontWeight:'bold'}}>TOP 1</List.Item>
                    <List.Item>글 제목(링크 걸기)</List.Item>
                    <List.Item style={{float:'right'}}>
                        <Icon size='large' name="thumbs up"></Icon>
                    </List.Item>
                    <List.Item style={{float:'right',marginRight:'0.5em'}}>
                        <Icon size='large' name="comment alternate"></Icon>
                    </List.Item>
                </List>

                <List horizontal style={{
                    width:'100%',
                    marginBottom:'15px'}}>
                    <List.Item style={{float:'left',fontSize:'1.5rem',fontWeight:'bold'}}>TOP 2</List.Item>
                    <List.Item>글 제목(링크 걸기)</List.Item>
                    <List.Item style={{float:'right'}}>
                        <Icon size='large' name="thumbs up"></Icon>
                    </List.Item>
                    <List.Item style={{float:'right',marginRight:'0.5em'}}>
                        <Icon size='large' name="comment alternate"></Icon>
                    </List.Item>
                </List>

                <List horizontal style={{
                    width:'100%',
                    marginBottom:'15px'}}>
                    <List.Item style={{float:'left',fontSize:'1.5rem',fontWeight:'bold'}}>TOP 3</List.Item>
                    <List.Item>글 제목(링크 걸기)</List.Item>
                    <List.Item style={{float:'right'}}>
                        <Icon size='large' name="thumbs up"></Icon>
                    </List.Item>
                    <List.Item style={{float:'right',marginRight:'0.5em'}}>
                        <Icon size='large' name="comment alternate"></Icon>
                    </List.Item>
                </List>

                <List horizontal style={{
                    width:'100%',
                    marginBottom:'15px'}}>
                    <List.Item style={{float:'left',fontSize:'1.5rem',fontWeight:'bold'}}>TOP 4</List.Item>
                    <List.Item>글 제목(링크 걸기)</List.Item>
                    <List.Item style={{float:'right'}}>
                        <Icon size='large' name="thumbs up"></Icon>
                    </List.Item>
                    <List.Item style={{float:'right',marginRight:'0.5em'}}>
                        <Icon size='large' name="comment alternate"></Icon>
                    </List.Item>
                </List>

                <List horizontal style={{
                    width:'100%',
                    marginBottom:'15px'}}>
                    <List.Item style={{float:'left',fontSize:'1.5rem',fontWeight:'bold'}}>TOP 5</List.Item>
                    <List.Item>글 제목(링크 걸기)</List.Item>
                    <List.Item style={{float:'right'}}>
                        <Icon size='large' name="thumbs up"></Icon>
                    </List.Item>
                    <List.Item style={{float:'right',marginRight:'0.5em'}}>
                        <Icon size='large' name="comment alternate"></Icon>
                    </List.Item>
                </List>
            </Grid.Column>
            <Grid.Column style={{ 
                paddingBottom: '5em', 
                paddingTop: '5em' ,
                paddingLeft : '12em',
                padding:'4em',}}>
                <Header as='h3' style={{ 
                    fontSize: '3em',
                    paddingBottom: '30px',
                    }}>
                새로 올라온 구인정보
                </Header>

                <List horizontal style={{
                    width:'100%',
                    marginBottom:'15px'}}>
                    <List.Item style={{float:'left',fontSize:'1.5rem',fontWeight:'bold'}}>TOP 1</List.Item>
                    <List.Item>글 제목(링크 걸기)</List.Item>
                    <List.Item style={{float:'right'}}>
                        <Icon size='large' name="thumbs up"></Icon>
                    </List.Item>
                    <List.Item style={{float:'right',marginRight:'0.5em'}}>
                        <Icon size='large' name="comment alternate"></Icon>
                    </List.Item>
                </List>

                <List horizontal style={{
                    width:'100%',
                    marginBottom:'15px'}}>
                    <List.Item style={{float:'left',fontSize:'1.5rem',fontWeight:'bold'}}>TOP 2</List.Item>
                    <List.Item>글 제목(링크 걸기)</List.Item>
                    <List.Item style={{float:'right'}}>
                        <Icon size='large' name="thumbs up"></Icon>
                    </List.Item>
                    <List.Item style={{float:'right',marginRight:'0.5em'}}>
                        <Icon size='large' name="comment alternate"></Icon>
                    </List.Item>
                </List>

                <List horizontal style={{
                    width:'100%',
                    marginBottom:'15px'}}>
                    <List.Item style={{float:'left',fontSize:'1.5rem',fontWeight:'bold'}}>TOP 3</List.Item>
                    <List.Item>글 제목(링크 걸기)</List.Item>
                    <List.Item style={{float:'right'}}>
                        <Icon size='large' name="thumbs up"></Icon>
                    </List.Item>
                    <List.Item style={{float:'right',marginRight:'0.5em'}}>
                        <Icon size='large' name="comment alternate"></Icon>
                    </List.Item>
                </List>

                <List horizontal style={{
                    width:'100%',
                    marginBottom:'15px'}}>
                    <List.Item style={{float:'left',fontSize:'1.5rem',fontWeight:'bold'}}>TOP 4</List.Item>
                    <List.Item>글 제목(링크 걸기)</List.Item>
                    <List.Item style={{float:'right'}}>
                        <Icon size='large' name="thumbs up"></Icon>
                    </List.Item>
                    <List.Item style={{float:'right',marginRight:'0.5em'}}>
                        <Icon size='large' name="comment alternate"></Icon>
                    </List.Item>
                </List>

                <List horizontal style={{
                    width:'100%',
                    marginBottom:'15px'}}>
                    <List.Item style={{float:'left',fontSize:'1.5rem',fontWeight:'bold'}}>TOP 5</List.Item>
                    <List.Item>글 제목(링크 걸기)</List.Item>
                    <List.Item style={{float:'right'}}>
                        <Icon size='large' name="thumbs up"></Icon>
                    </List.Item>
                    <List.Item style={{float:'right',marginRight:'0.5em'}}>
                        <Icon size='large' name="comment alternate"></Icon>
                    </List.Item>
                </List>
            </Grid.Column>
            </Grid.Row>
        </Grid>
        </Segment>
 )

export default Board
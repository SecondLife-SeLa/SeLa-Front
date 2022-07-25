import { 
    Segment,
    Grid,
    Header,
    Image,
    List
 } from "semantic-ui-react"

 const Board = () => (
    <Segment style={{ padding: '0em' }} vertical>
        <Grid celled='internally' columns='equal' stackable>
            <Grid.Row textAlign='center'>
            <Grid.Column style={{ 
                paddingBottom: '5em', 
                paddingTop: '5em' ,
                padding:'85px'}}>
                <Header as='h3' style={{ 
                    fontSize: '3em',
                    paddingBottom: '30px',
                    }}>
                인기글 TOP5
                </Header>
                <List horizontal style={{
                    width:'100%',
                    marginBottom:'15px'}}>
                    <List.Item style={{float:'left'}}>TOP 2</List.Item>
                    <List.Item>글 제목(링크 걸기)</List.Item>
                    <List.Item style={{float:'right'}}>추천수</List.Item>
                    <List.Item style={{float:'right'}}>댓글수</List.Item>
                </List>

                <List horizontal style={{
                    width:'100%',
                    marginBottom:'15px'}}>
                    <List.Item style={{float:'left'}}>TOP 2</List.Item>
                    <List.Item>글 제목(링크 걸기)</List.Item>
                    <List.Item style={{float:'right'}}>추천수</List.Item>
                    <List.Item style={{float:'right'}}>댓글수</List.Item>
                </List>

                <List horizontal style={{
                    width:'100%',
                    marginBottom:'15px'}}>
                    <List.Item style={{float:'left'}}>TOP 2</List.Item>
                    <List.Item>글 제목(링크 걸기)</List.Item>
                    <List.Item style={{float:'right'}}>추천수</List.Item>
                    <List.Item style={{float:'right'}}>댓글수</List.Item>
                </List>

                <List horizontal style={{
                    width:'100%',
                    marginBottom:'15px'}}>
                    <List.Item style={{float:'left'}}>TOP 2</List.Item>
                    <List.Item>글 제목(링크 걸기)</List.Item>
                    <List.Item style={{float:'right'}}>추천수</List.Item>
                    <List.Item style={{float:'right'}}>댓글수</List.Item>
                </List>

                <List horizontal style={{
                    width:'100%',
                    marginBottom:'15px'}}>
                    <List.Item style={{float:'left'}}>TOP 2</List.Item>
                    <List.Item>글 제목(링크 걸기)</List.Item>
                    <List.Item style={{float:'right'}}>추천수</List.Item>
                    <List.Item style={{float:'right'}}>댓글수</List.Item>
                </List>
            </Grid.Column>
            <Grid.Column style={{ 
                paddingBottom: '5em', 
                paddingTop: '5em' ,
                padding:'85px',
                marginRight:'15px'}}>
                <Header as='h3' style={{ 
                    fontSize: '3em',
                    paddingBottom: '30px',
                    }}>
                새로 올라온 구인정보
                </Header>

                <List horizontal style={{
                    width:'100%',
                    marginBottom:'15px'}}>
                    <List.Item style={{float:'left'}}>TOP 2</List.Item>
                    <List.Item>글 제목(링크 걸기)</List.Item>
                    <List.Item style={{float:'right'}}>추천수</List.Item>
                    <List.Item style={{float:'right'}}>댓글수</List.Item>
                </List>

                <List horizontal style={{
                    width:'100%',
                    marginBottom:'15px'}}>
                    <List.Item style={{float:'left'}}>TOP 2</List.Item>
                    <List.Item>글 제목(링크 걸기)</List.Item>
                    <List.Item style={{float:'right'}}>추천수</List.Item>
                    <List.Item style={{float:'right'}}>댓글수</List.Item>
                </List>

                <List horizontal style={{
                    width:'100%',
                    marginBottom:'15px'}}>
                    <List.Item style={{float:'left'}}>TOP 2</List.Item>
                    <List.Item>글 제목(링크 걸기)</List.Item>
                    <List.Item style={{float:'right'}}>추천수</List.Item>
                    <List.Item style={{float:'right'}}>댓글수</List.Item>
                </List>

                <List horizontal style={{
                    width:'100%',
                    marginBottom:'15px'}}>
                    <List.Item style={{float:'left'}}>TOP 2</List.Item>
                    <List.Item>글 제목(링크 걸기)</List.Item>
                    <List.Item style={{float:'right'}}>추천수</List.Item>
                    <List.Item style={{float:'right'}}>댓글수</List.Item>
                </List>

                <List horizontal style={{
                    width:'100%',
                    marginBottom:'15px'}}>
                    <List.Item style={{float:'left'}}>TOP 2</List.Item>
                    <List.Item>글 제목(링크 걸기)</List.Item>
                    <List.Item style={{float:'right'}}>추천수</List.Item>
                    <List.Item style={{float:'right'}}>댓글수</List.Item>
                </List>
            </Grid.Column>
            </Grid.Row>
        </Grid>
        </Segment>
 )

export default Board
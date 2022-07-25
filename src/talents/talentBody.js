import _ from 'lodash'
import React from 'react'
import {  
    Icon,
    Menu,
    Container,
    Header,
    Table,
    Label,
    Image,} from 'semantic-ui-react'

    const colors = [
        'red',
        'orange',
        'yellow',
        'olive',
        'green',
        'teal',
        'blue',
        'violet',
        'purple',
        'pink',
        'brown',
        'grey',
        'black',
      ]

const style = {
    h1: {
      marginTop: '3em',
    },
    h2: {
      margin: '4em 0em 2em',
    },
    h3: {
      marginTop: '2em',
      padding: '2em 0em',
    },
    last: {
      marginBottom: '300px',
    },
}


const ResponseTable = () => (
    <div>
<Header as='h1' content='재능기부' style={style.h1} textAlign='center' />

<Container>
<Menu floated='right' style ={{marginBottom : '2em'}}>
             <Menu.Item as='a'>글쓰기</Menu.Item>
           </Menu>
  <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell width={1} textAlign='center'>글 번호</Table.HeaderCell>
        <Table.HeaderCell width={2} textAlign='center'>카테고리</Table.HeaderCell>
        <Table.HeaderCell width={7} textAlign='center'>제목</Table.HeaderCell>
        <Table.HeaderCell width={2} textAlign='center'>비용</Table.HeaderCell>
        <Table.HeaderCell width={2} textAlign='center'>상태</Table.HeaderCell>
        <Table.HeaderCell width={2} textAlign='center'>기간</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>1</Table.Cell>
        <Table.Cell textAlign='center'>
            <Label color='teal'>기부</Label>
        </Table.Cell>
        <Table.Cell>
            <Header as='h3' image>
                <Image rounded size='small' src='/images/wireframe/square-image.png' />
                <Header.Content>
                  집 지어드립니다.
                  <Header.Subheader>강아지 집</Header.Subheader>
                </Header.Content>
            </Header>
        </Table.Cell>
        <Table.Cell textAlign='center'>
            <Label color='blue'>
                1억
            </Label>
        </Table.Cell>
        <Table.Cell textAlign='center'>
            <Label color='teal'>
                모집 중
            </Label>
        </Table.Cell>
        <Table.Cell></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>2</Table.Cell>
        <Table.Cell textAlign='center'>
            <Label color='teal'>구해요</Label>
        </Table.Cell>
        <Table.Cell>
            <Header as='h3' image>
                <Image rounded size='small' src='/images/wireframe/square-image.png' />
                <Header.Content>
                  아이 돌봐주실 분 구해요
                  <Header.Subheader>25살 아이</Header.Subheader>
                </Header.Content>
            </Header>
        </Table.Cell>
        <Table.Cell textAlign='center'>
            <Label color='blue'>
                무료
            </Label>
        </Table.Cell>
        <Table.Cell textAlign='center'>
            <Label color='teal'>
                모집 중
            </Label>
        </Table.Cell>
        <Table.Cell></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>3</Table.Cell>
        <Table.Cell textAlign='center'>
            <Label color='teal'>구해요</Label>
        </Table.Cell>
        <Table.Cell>
            <Header as='h3' image>
                <Image rounded size='small' src='/images/wireframe/square-image.png' />
                <Header.Content>
                  대리
                  <Header.Subheader>골드</Header.Subheader>
                </Header.Content>
            </Header>
        </Table.Cell>
        <Table.Cell textAlign='center'>
            <Label color='blue'>
                무료
            </Label>
        </Table.Cell>
        <Table.Cell textAlign='center'>
            <Label color='teal'>
                모집완료
            </Label>
        </Table.Cell>
        <Table.Cell></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>4</Table.Cell>
        <Table.Cell textAlign='center'>
            <Label color='teal'>기부</Label>
        </Table.Cell>
        <Table.Cell>
            <Header as='h3' image>
                <Image rounded size='small' src='/images/wireframe/square-image.png' />
                <Header.Content>
                  집 지어드립니다.
                  <Header.Subheader>강아지 집</Header.Subheader>
                </Header.Content>
            </Header>
        </Table.Cell>
        <Table.Cell textAlign='center'>
            <Label color='blue'>
                1억
            </Label>
        </Table.Cell>
        <Table.Cell textAlign='center'>
            <Label color='teal'>
                모집 중
            </Label>
        </Table.Cell>
        <Table.Cell></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>5</Table.Cell>
        <Table.Cell textAlign='center'>
            <Label color='teal'>기부</Label>
        </Table.Cell>
        <Table.Cell>
            <Header as='h3' image>
                <Image rounded size='small' src='/images/wireframe/square-image.png' />
                <Header.Content>
                  집 지어드립니다.
                  <Header.Subheader>강아지 집</Header.Subheader>
                </Header.Content>
            </Header>
        </Table.Cell>
        <Table.Cell textAlign='center'>
            <Label color='blue'>
                1억
            </Label>
        </Table.Cell>
        <Table.Cell textAlign='center'>
            <Label color='teal'>
                모집 중
            </Label>
        </Table.Cell>
        <Table.Cell></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>6</Table.Cell>
        <Table.Cell textAlign='center'>
            <Label color='teal'>기부</Label>
        </Table.Cell>
        <Table.Cell>
            <Header as='h3' image>
                <Image rounded size='small' src='/images/wireframe/square-image.png' />
                <Header.Content>
                  집 지어드립니다.
                  <Header.Subheader>강아지 집</Header.Subheader>
                </Header.Content>
            </Header>
        </Table.Cell>
        <Table.Cell textAlign='center'>
            <Label color='blue'>
                1억
            </Label>
        </Table.Cell>
        <Table.Cell textAlign='center'>
            <Label color='teal'>
                모집 중
            </Label>
        </Table.Cell>
        <Table.Cell></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>7</Table.Cell>
        <Table.Cell textAlign='center'>
            <Label color='teal'>기부</Label>
        </Table.Cell>
        <Table.Cell>
            <Header as='h3' image>
                <Image rounded size='small' src='/images/wireframe/square-image.png' />
                <Header.Content>
                  집 지어드립니다.
                  <Header.Subheader>강아지 집</Header.Subheader>
                </Header.Content>
            </Header>
        </Table.Cell>
        <Table.Cell textAlign='center'>
            <Label color='blue'>
                1억
            </Label>
        </Table.Cell>
        <Table.Cell textAlign='center'>
            <Label color='teal'>
                모집 중
            </Label>
        </Table.Cell>
        <Table.Cell></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>8</Table.Cell>
        <Table.Cell textAlign='center'>
            <Label color='teal'>기부</Label>
        </Table.Cell>
        <Table.Cell>
            <Header as='h3' image>
                <Image rounded size='small' src='/images/wireframe/square-image.png' />
                <Header.Content>
                  집 지어드립니다.
                  <Header.Subheader>강아지 집</Header.Subheader>
                </Header.Content>
            </Header>
        </Table.Cell>
        <Table.Cell textAlign='center'>
            <Label color='blue'>
                1억
            </Label>
        </Table.Cell>
        <Table.Cell textAlign='center'>
            <Label color='teal'>
                모집 중
            </Label>
        </Table.Cell>
        <Table.Cell></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>9</Table.Cell>
        <Table.Cell textAlign='center'>
            <Label color='teal'>기부</Label>
        </Table.Cell>
        <Table.Cell>
            <Header as='h3' image>
                <Image rounded size='small' src='/images/wireframe/square-image.png' />
                <Header.Content>
                  집 지어드립니다.
                  <Header.Subheader>강아지 집</Header.Subheader>
                </Header.Content>
            </Header>
        </Table.Cell>
        <Table.Cell textAlign='center'>
            <Label color='blue'>
                1억
            </Label>
        </Table.Cell>
        <Table.Cell textAlign='center'>
            <Label color='teal'>
                모집 중
            </Label>
        </Table.Cell>
        <Table.Cell></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>10</Table.Cell>
        <Table.Cell textAlign='center'>
            <Label color='teal'>기부</Label>
        </Table.Cell>
        <Table.Cell>
            <Header as='h3' image>
                <Image rounded size='small' src='/images/wireframe/square-image.png' />
                <Header.Content>
                  집 지어드립니다.
                  <Header.Subheader>강아지 집</Header.Subheader>
                </Header.Content>
            </Header>
        </Table.Cell>
        <Table.Cell textAlign='center'>
            <Label color='blue'>
                1억
            </Label>
        </Table.Cell>
        <Table.Cell textAlign='center'>
            <Label color='teal'>
                모집 중
            </Label>
        </Table.Cell>
        <Table.Cell></Table.Cell>
      </Table.Row>
            <Table.Row>

      </Table.Row>
    </Table.Body>

    <Table.Footer>
       <Table.Row>
         <Table.HeaderCell colSpan='6'>
           <Menu floated='right'  pagination>
             <Menu.Item as='a' icon>
               <Icon name='chevron left' />
             </Menu.Item>
             <Menu.Item as='a'>1</Menu.Item>
             <Menu.Item as='a'>2</Menu.Item>
             <Menu.Item as='a'>3</Menu.Item>
             <Menu.Item as='a'>4</Menu.Item>
             <Menu.Item as='a' icon>
               <Icon name='chevron right' />
             </Menu.Item>
           </Menu>

           <Menu floated='left'  pagination>
             <Menu.Item as='a'>글쓰기</Menu.Item>
           </Menu>
         </Table.HeaderCell>
      </Table.Row>
     </Table.Footer>
  </Table>
</Container>
</div>
)
export default ResponseTable
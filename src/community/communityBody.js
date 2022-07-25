import React from 'react'
import {  
    Icon,
    Menu,
    Container,
    Header,
    Table,} from 'semantic-ui-react'


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
<Header as='h1' content='Community' style={style.h1} textAlign='center' />

<Container>
<Menu floated='right' style ={{marginBottom : '2em'}}>
             <Menu.Item as='a'>글쓰기</Menu.Item>
           </Menu>
  <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell width={1} textAlign='center'>글 번호</Table.HeaderCell>
        <Table.HeaderCell width={8} textAlign='center'>제목</Table.HeaderCell>
        <Table.HeaderCell width={1} textAlign='center'>작성자</Table.HeaderCell>
        <Table.HeaderCell width={1} textAlign='center'>추천</Table.HeaderCell>
        <Table.HeaderCell width={1} textAlign='center'>조회수</Table.HeaderCell>
        <Table.HeaderCell width={1} textAlign='center'>날짜</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>1</Table.Cell>
        <Table.Cell>뭐라하노</Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>2</Table.Cell>
        <Table.Cell>뭐라하노</Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell></Table.Cell>
      </Table.Row>
      <Table.Row>
      <Table.Cell>3</Table.Cell>
        <Table.Cell>뭐라하노</Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell></Table.Cell>
      </Table.Row>
      <Table.Row>
      <Table.Cell>4</Table.Cell>
        <Table.Cell>뭐라하노</Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell></Table.Cell>
      </Table.Row>
      <Table.Row>
      <Table.Cell>5</Table.Cell>
        <Table.Cell>뭐라하노</Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell></Table.Cell>
      </Table.Row>
      <Table.Row>
      <Table.Cell>6</Table.Cell>
        <Table.Cell>뭐라하노</Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell></Table.Cell>
      </Table.Row>
      <Table.Row>
      <Table.Cell>7</Table.Cell>
        <Table.Cell>뭐라하노</Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell></Table.Cell>
      </Table.Row>
      <Table.Row>
      <Table.Cell>8</Table.Cell>
        <Table.Cell>뭐라하노</Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell></Table.Cell>
      </Table.Row>
      <Table.Row>
      <Table.Cell>9</Table.Cell>
        <Table.Cell>뭐라하노</Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell></Table.Cell>
      </Table.Row>
      <Table.Row>
      <Table.Cell>10</Table.Cell>
        <Table.Cell>뭐라하노</Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell></Table.Cell>
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
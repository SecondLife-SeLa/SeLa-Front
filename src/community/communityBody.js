import React,{useState, useEffect} from "react";
import { Icon, Menu, Container, Header, Table } from "semantic-ui-react";
import { Link } from "react-router-dom";
import axios from 'axios'

const style = {
  h1: {
    marginTop: "3em",
  },
  h2: {
    margin: "4em 0em 2em",
  },
  h3: {
    marginTop: "2em",
    padding: "2em 0em",
  },
  last: {
    marginBottom: "300px",
  },
};

function App() {
  const [list, setList] = useState([]);

  useEffect(() =>{
  axios({
    method: 'get',
    url: 'http://59.17.12.220:3333/community',
    params: {
       category :  'hobby',
       page : 1,
    },
    headers: { 
      "Content-Type": "application/json",
  
    }
  }).then(function (response) {
    console.log("Heade With Authentication :" + response)
    console.log(response.data)
    console.log(response.status)
    console.log(response.statusText)
    console.log(response.headers)
    console.log(response.config)
    setList(response.data)
  })
  .catch(function (error) {
    console.log("Error : " +error);
  });})


  return (
  //   <ul>
  //   {comBoard.map(community => (
  //     <li key={community.idx}>
  //       {community.title} ({community.content})
  //     </li>
  //   ))}
  // </ul>
  

  <div className="App">
    <Header as="h1" content="Community" style={style.h1} textAlign="center" />
    <Container>
      <Link to="/textArea">
        <Menu floated="right" style={{ marginBottom: "2em" }}>
          <Menu.Item as="a">글쓰기</Menu.Item>
        </Menu>
      </Link>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell width={1} textAlign="center">
              글 번호
            </Table.HeaderCell>
            <Table.HeaderCell width={8} textAlign="center">
              제목
            </Table.HeaderCell>
            <Table.HeaderCell width={1} textAlign="center">
              작성자
            </Table.HeaderCell>
            <Table.HeaderCell width={1} textAlign="center">
              추천
            </Table.HeaderCell>
            <Table.HeaderCell width={1} textAlign="center">
              조회수
            </Table.HeaderCell>
            <Table.HeaderCell width={1} textAlign="center">
              날짜
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        {list.map(function(a, i){  
          return(
        <Table.Body>
          <Table.Row>
            <Table.Cell>{list[i].idx}</Table.Cell>
            <Table.Cell>{list[i].content}</Table.Cell>
            <Table.Cell>{list[i].writer}</Table.Cell>
            <Table.Cell>{list[i].heart}</Table.Cell>
            <Table.Cell>{list[i].views}</Table.Cell>
            <Table.Cell>{list[i].write_time}</Table.Cell>
          </Table.Row>
        </Table.Body>
          )
        })}

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="6">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>

              <Menu floated="left" pagination>
                <Menu.Item as="a">글쓰기</Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </Container>
  </div>
  )}
export default App;

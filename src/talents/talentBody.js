import _ from "lodash";
import React, {useState, useEffect} from "react";
import {
  Icon,
  Menu,
  Container,
  Header,
  Table,
  Label,
  Image,
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import axios from 'axios';

const colors = [
  "red",
  "orange",
  "yellow",
  "olive",
  "green",
  "teal",
  "blue",
  "violet",
  "purple",
  "pink",
  "brown",
  "grey",
  "black",
];

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

function GetData() {
  const [list, setList] = useState([]);
  useEffect(() => {
    axios({
      method: 'get',
      url: 'http://59.17.12.220:3333/talent',
      params: {
         category :  'request',
         page : 1,
      },
      headers: { 
        "Content-Type": "application/json",
    
      }
    }).then(function (response) {
      setList(response.data)
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
    });
})


return (
  <div className="GetData">
    <Header as="h1" content="재능기부" style={style.h1} textAlign="center" />
    <Container>
      <Link to="/talentArea">
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
            <Table.HeaderCell width={2} textAlign="center">
              카테고리
            </Table.HeaderCell>
            <Table.HeaderCell width={7} textAlign="center">
              제목
            </Table.HeaderCell>
            <Table.HeaderCell width={2} textAlign="center">
              비용
            </Table.HeaderCell>
            <Table.HeaderCell width={2} textAlign="center">
              상태
            </Table.HeaderCell>
            <Table.HeaderCell width={2} textAlign="center">
              기간
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        {list.map(function(a, i){  
          return(
        <Table.Body>
          <Table.Row>
            <Table.Cell>{list[i].idx}</Table.Cell>
            <Table.Cell textAlign="center">
              <Label color="teal">{list[i].category}</Label>
            </Table.Cell>
            <Table.Cell>
              <Header as="h3" image>
                <Image
                  rounded
                  size="small"
                />
                <Header.Content>
                  {list[i].title}
                  <Header.Subheader>{list[i].content}</Header.Subheader>
                </Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell textAlign="center">
              <Label color="blue">{list[i].fee}원</Label>
            </Table.Cell>
            <Table.Cell textAlign="center">
              <Label color="teal">모집 중</Label>
            </Table.Cell>
            <Table.Cell></Table.Cell>
          </Table.Row>
          </Table.Body>
            )
        }
        )}


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
export default GetData;

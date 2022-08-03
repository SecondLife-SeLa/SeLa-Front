import React from "react";
// import { Card, Icon, Image, Table } from "semantic-ui-react";
// import { Link } from "react-router-dom";

const Job = () => {
  return (
    <div>
      <dl className="duty">
        <dt>직무</dt>
        <dd>
          <div>
            <ul>
              <li>
                <input type={"checkbox"}></input>
              </li>
              <li>재무 설계</li>
              <li>코딩</li>
              <li>무관</li>
            </ul>
          </div>
        </dd>
      </dl>

      {/* <Table
        style={{
          textAlign: "center",
          width: "80%",
          margin: "auto",
          marginBottom: "5%",
          tableLayout: "fixed",
        }}
      >
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>직무</Table.HeaderCell>
            <Table.HeaderCell>근무지역</Table.HeaderCell>
            <Table.HeaderCell>학력</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>
              <Link to="/management">경영/사무</Link>
            </Table.Cell>

            <Table.Cell>
              <Link to="/seoul">서울</Link>
            </Table.Cell>
            <Table.Cell>
              <Link to="/highschool">고졸</Link>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Link to="/finance">재무 설계 </Link>
            </Table.Cell>

            <Table.Cell>
              <Link to="/incheon">인천</Link>
            </Table.Cell>
            <Table.Cell>
              <Link to="/bachelor">학사</Link>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Link to="/coding">코딩</Link>
            </Table.Cell>
            <Table.Cell>
              <Link to="/busan">부산</Link>
            </Table.Cell>
            <Table.Cell>
              <Link to="/doctorate">박사</Link>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Link to="/noMatterDuty">무관</Link>
            </Table.Cell>
            <Table.Cell>
              <Link to="/noMatterRegion">무관</Link>
            </Table.Cell>
            <Table.Cell>
              <Link to="/noMatterEdu">무관</Link>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>

      <h1>공개 이력서</h1>
      <Card.Group
        itemsPerRow={3}
        style={{
          textAlign: "center",
          width: "80%",
          margin: "auto",
          paddingBottom: "5%",
        }}
      >
        <Card>
          <Image
            src="selaEx.png"
            wrapped
            ui={false}
            style={{ width: "30%", height: "40%" }}
          />
          <Card.Content>
            <Card.Header>이름</Card.Header>
            <Card.Meta>
              <span className="date">생년월일</span>
            </Card.Meta>
            <Card.Description>경력</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>태그</a>
          </Card.Content>
        </Card>

        <Card>
          <Image
            src="selaEx.png"
            wrapped
            ui={false}
            style={{ width: "30%", height: "40%" }}
          />
          <Card.Content>
            <Card.Header>이름</Card.Header>
            <Card.Meta>
              <span className="date">생년월일</span>
            </Card.Meta>
            <Card.Description>경력</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>태그</a>
          </Card.Content>
        </Card>
        <Card>
          <Image
            src="selaEx.png"
            wrapped
            ui={false}
            style={{ width: "30%", height: "40%" }}
          />
          <Card.Content>
            <Card.Header>이름</Card.Header>
            <Card.Meta>
              <span className="date">생년월일</span>
            </Card.Meta>
            <Card.Description>경력</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>태그</a>
          </Card.Content>
        </Card>
        <Card>
          <Image
            src="selaEx.png"
            wrapped
            ui={false}
            style={{ width: "30%", height: "40%" }}
          />
          <Card.Content>
            <Card.Header>이름</Card.Header>
            <Card.Meta>
              <span className="date">생년월일</span>
            </Card.Meta>
            <Card.Description>경력</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>태그</a>
          </Card.Content>
        </Card>
        <Card>
          <Image
            src="selaEx.png"
            wrapped
            ui={false}
            style={{ width: "30%", height: "40%" }}
          />
          <Card.Content>
            <Card.Header>이름</Card.Header>
            <Card.Meta>
              <span className="date">생년월일</span>
            </Card.Meta>
            <Card.Description>경력</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>태그</a>
          </Card.Content>
        </Card>
        <Card>
          <Image
            src="selaEx.png"
            wrapped
            ui={false}
            style={{ width: "30%", height: "40%" }}
          />
          <Card.Content>
            <Card.Header>이름</Card.Header>
            <Card.Meta>
              <span className="date">생년월일</span>
            </Card.Meta>
            <Card.Description>경력</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>태그</a>
          </Card.Content>
        </Card>
      </Card.Group> */}
    </div>
  );
};

export default Job;

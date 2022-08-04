import { logDOM } from "@testing-library/react";
import React, { Component, useState } from "react";
import { Form, FormGroup, Header, Input } from "semantic-ui-react";
import DatePicker from "react-datepicker";
import ko from "date-fns/locale/ko";
import "react-datepicker/dist/react-datepicker.css";

const options = [
  { key: "pv", text: "드려요", value: "provide" },
  { key: "rq", text: "구해요", value: "request" },
];

const DateSet = () => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  return (
    <DatePicker
      widths="100px"
      locale={ko}
      dateFormat="yyyy-MM-dd"
      placeholderText="기간 설정"
      selectsRange={true}
      startDate={startDate}
      endDate={endDate}
      onChange={(update) => {
        setDateRange(update);
      }}
      withPortal
      isClearable={true}
    />
  );
};

class TalentArea extends Component {
  state = {};

  handleChange = (e, { value }) => this.setState({ value });

  render() {
    const { value } = this.state;

    return (
      <Form style={{ margin: "150px" }}>
        <Header
          as="h1"
          content="재능기부 작성"
          textAlign="left"
          style={{ marginBottom: "40px" }}
        ></Header>
        <Form.Group widths="equal">
          <Form.Input fluid placeholder="제목을 입력하세요." />
          <Form.Input
            type="number"
            max={20}
            placeholder="비용을 입력하세요."
            width={3}
          />
          <Form.Select
            fluid
            options={options}
            placeholder="카테고리를 선택하세요"
            width={3}
          />
        </Form.Group>
        <input
          type="file"
          multiple
          accept="image/*"
          style={{ marginBottom: "15px" }}
        ></input>

        <DateSet>기간설정</DateSet>

        <Form.TextArea
          placeholder="내용을 작성하세요."
          style={{ minHeight: 500, marginTop: "15px" }}
        />
        <Form.Button>Submit</Form.Button>
      </Form>
    );
  }
}

export default TalentArea;

import { logDOM } from "@testing-library/react";
import React, { Component, useState } from "react";
import { Dropdown, Form, FormGroup, Header, Input,Select } from "semantic-ui-react";
import DatePicker from "react-datepicker";
import ko from "date-fns/locale/ko";
import "react-datepicker/dist/react-datepicker.css";
// import axios from 'axios';
import axios from "axios";

//전역변수
var talCategory, talStart, talEnd;
var category;

const options = [
  { key: 'provide', text: "드려요", value: 'provide' },
  { key: 'request', text: "구해요", value: 'request' },
];


const DateSet = () => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  talStart = startDate;
  talEnd = endDate;
  
  
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
  state = {}

  handleChange = (e, { value }) => {this.setState({ value })  
  talCategory = value;
}
  render() {
    return (
      <Form style={{ margin: "150px" }}>
        <Header
          as="h1"
          content="재능기부 작성"
          textAlign="left"
          style={{ marginBottom: "40px" }}
        ></Header>
        <Form.Group widths="equal">
          <Form.Input id='title'  fluid placeholder="제목을 입력하세요."  />
          <Form.Input
            id='fee'
            type="number"
            max={100000000}
            placeholder="비용을 입력하세요."
            width={4}
          />
          <Dropdown
            id='selected'
            onChange={this.handleChange}
            placeholder="카테고리를 선택하세요"
            options={options}
            selection
            value={category}
            />
        </Form.Group>
        <input
          id="img"
          type="file"
          onChange={selectFile}
          multiple
          accept="image/*"
          style={{ marginBottom: "15px" }}
        ></input>
        <DateSet id = 'dateSet'>기간설정</DateSet>

        <Form.TextArea
          id='content'
          placeholder="내용을 작성하세요."
          style={{ minHeight: 500, marginTop: "15px" }}
        />
        <Form.Button onClick={onClickSubmit}>Submit</Form.Button>
      </Form>
    );
  }
}

const selectFile = (e) => {
  console.log(e.target.files[0]);
};



const onClickSubmit = () => {
  var talTitle = document.getElementById('title').value;
  var talContent = document.getElementById('content').value;
  var talFee = document.getElementById('fee').value;
  function dateFormat(date) {
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    month = month >= 10 ? month : '0' + month;
    day = day >= 10 ? day : '0' + day;
    hour = hour >= 10 ? hour : '0' + hour;
    minute = minute >= 10 ? minute : '0' + minute;
    second = second >= 10 ? second : '0' + second;

    return date.getFullYear() + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
  }

  axios({
    method: 'post',
    url: 'http://59.17.12.220:3333/talent/write',
    data: {
    
       category :  talCategory,
       title : talTitle,
       content : talContent,
       fee : talFee || 0,
       if_end : 0,
       writer : 'jui',
       startTime : dateFormat(talStart),
       end_time : dateFormat(talEnd),
       images : 'img'
    },
    headers: { 
      "Content-Type": "multipart/form-data",

    }
  }).then(function (response) {
    alert('성공')
    console.log("Heade With Authentication :" + response);
    console.log(response.data)
    console.log(response.status)
    console.log(response.statusText)
    console.log(response.headers)
    console.log(response.config)
  })
  .catch(function (error) {
    alert('실패')
    console.log("Error : " +error);
  });
}

export default TalentArea;

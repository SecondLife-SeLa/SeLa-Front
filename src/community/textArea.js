import React, { Component, useState } from "react";
import { Form, FormGroup, Header, Input } from "semantic-ui-react";
import axios from "axios";


class TextArea extends Component {
  state = {};

  handleChange = (e, { value }) => this.setState({ value });

  render() {
    const { value } = this.state;

    return (
      <Form style={{ margin: "150px" }}>
        <Header
          as="h1"
          content="커뮤니티 작성"
          textAlign="left"
          style={{ marginBottom: "40px" }}
        ></Header>

        <Form.Input id='title' fluid placeholder="제목을 입력하세요." />
        <input
          type="file"
          multiple
          accept="image/*"
          style={{ marginBottom: "15px" }}
        ></input>
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

const onClickSubmit = () => {

  
  var comTitle = document.getElementById('title').value;
  var comContent = document.getElementById('content').value;

  axios({
    method: 'post',
    url: 'http://59.17.12.220:3333/comunity/write',
    data: {
    

       title : comTitle,
       content : comContent,
       images : 'img'
    },
    headers: { 
      "Content-Type": "application/json",

    }
  }).then(function (response) {
    console.log("Heade With Authentication :" + response);
    console.log(response.data)
    console.log(response.status)
    console.log(response.statusText)
    console.log(response.headers)
    console.log(response.config)
  })
  .catch(function (error) {
    console.log("Error : " +error);
  });
}


export default TextArea;

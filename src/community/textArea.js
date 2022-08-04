import React, { Component, useState } from "react";
import { Form, FormGroup, Header, Input } from "semantic-ui-react";

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

        <Form.Input fluid placeholder="제목을 입력하세요." />
        <input
          type="file"
          multiple
          accept="image/*"
          style={{ marginBottom: "15px" }}
        ></input>
        <Form.TextArea
          placeholder="내용을 작성하세요."
          style={{ minHeight: 500, marginTop: "15px" }}
        />
        <Form.Button>Submit</Form.Button>
      </Form>
    );
  }
}

export default TextArea;

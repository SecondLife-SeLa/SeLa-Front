import React, { Component } from 'react'
import { Form, Header } from 'semantic-ui-react'


class FormExampleSubcomponentControl extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
        
      <Form style = {{
        margin: '50px'
      }
      }>
    <Header as='h1' content = '커뮤니티 작성' textAlign='left' style = {{marginBottom : '20px'}} ></Header>
    <Form.Field>
      <label>제목</label>
      <input placeholder='제목을 입력하세요.' />
    </Form.Field>
        <Form.TextArea label='내용'  placeholder='내용을 작성하세요.' />
        <Form.Button>Submit</Form.Button>
      </Form>
    )
  }
}

export default FormExampleSubcomponentControl
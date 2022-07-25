import React, { Component } from 'react'
import { Form, Header } from 'semantic-ui-react'

const options = [
  { key: 'pv', text: '드려요', value: 'provide' },
  { key: 'rq', text: '구해요', value: 'request' },
]

class FormExampleSubcomponentControl extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
      <Form style = {{margin : '50px'}}>
        <Header as='h1' content = '재능기부 작성' textAlign='left' style = {{marginBottom : '20px'}}></Header>
        <Form.Group widths='equal'>
          <Form.Input fluid label='제목' placeholder='제목을 입력하세요.' />
          <Form.Select
            fluid
            label='카테고리'
            options={options}
            placeholder='카테고리를 선택하세요'
          />
        </Form.Group>

        <Form.TextArea label='본문' placeholder='내용을 작성하세요.' />
        <Form.Button>Submit</Form.Button>
      </Form>
    )
  }
}

export default FormExampleSubcomponentControl
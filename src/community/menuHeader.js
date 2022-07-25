import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'

export default class MenuExampleSecondary extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu secondary widths={7} 
        style = {{
            marginLeft : '4em'
        }}
      >
        <Menu.Item 
          name='동호회 찾기'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='재테크'
          active={activeItem === 'messages'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='지원금'
          active={activeItem === 'friends'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='건강상식'
          active={activeItem === 'friends'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='오늘의 뉴우스'
          active={activeItem === 'friends'}
          onClick={this.handleItemClick}
      />
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>

      </Menu>   
    )
  }
}
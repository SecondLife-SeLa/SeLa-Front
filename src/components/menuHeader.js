import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'
import { Link } from "react-router-dom";

export default class MenuExampleSecondary extends Component {
  state = { activeItem: '커뮤니티' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu  tabular 
        style = {{
            marginLeft : '5em',
            marginRight : '5em'
        }}
      
      >
        <Link to = "./community">
        <Menu.Item  
          style = {{marginLeft : '1em', marginRight : '1em '}}
          name='커뮤니티'
          active={activeItem === '커뮤니티'}
          onClick={this.handleItemClick}
        />
        </Link>
        <Link to="./talent">
        <Menu.Item
          style = {{marginLeft : '1em', marginRight : '1em '}}
          name='재능기부'
          active={activeItem === '재능기부'}
          onClick={this.handleItemClick}
        />
        </Link>
        <Link to="./Job">
        <Menu.Item
          style = {{marginLeft : '1em', marginRight : '1em '}}
          name='강연'
          active={activeItem === '강연'}
          onClick={this.handleItemClick}
        />
        </Link>
        <Link to="./Job">
        <Menu.Item
          style = {{marginLeft : '1em', marginRight : '1em '}}
          name='재취업・부업'
          active={activeItem === '재취업・부업'}
          onClick={this.handleItemClick}
        />
        </Link>
        <Menu.Menu position = "right">
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
        </Menu.Menu>
      </Menu>   
    )
  }
}
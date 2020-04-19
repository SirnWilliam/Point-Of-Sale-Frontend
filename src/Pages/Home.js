import React, { Component } from 'react';
import "../CSS-Files/HomeCSS.css";
import {Menu, MenuList, MenuButton, MenuItem } from "@reach/menu-button";
import ItemPrice from './ItemPrice'

class Home extends Component  {
    constructor(props) {
        super(props);
        this.state={showLogin: false, showItemPrice:false};
        this.trigger = this.trigger.bind(this);
    }
    trigger() {
        this.setState(
            {
                showItemPrice:true,
               
            });
    }
  render() {
    return (
      <div>
        
            <ul className="ParentList">
                <li className="ChildList">
                <Menu>
                <MenuButton>Start</MenuButton>
                </Menu>
                </li>
                <li className="ChildList"> 
                <Menu>
                <MenuButton>Log <span aria-hidden>▾</span>
                </MenuButton>
                <MenuList>
                    <MenuItem onSelect={() => alert("Download")}>Login</MenuItem>
                    <MenuItem onSelect={() => alert("Copy")}>Logout</MenuItem>
                </MenuList>
                </Menu></li>
                <li className="ChildList">
                <Menu>
                <MenuButton>View <span aria-hidden>▾</span>
                </MenuButton>
                <MenuList>
                    <MenuItem onSelect={this.trigger}>Item price</MenuItem>
                    <MenuItem onSelect={() => alert("Copy")}>Future price</MenuItem>
                    <MenuItem onSelect={() => alert("Item cost")}>Item cost</MenuItem>
                    <MenuItem onSelect={() => alert("Mark as Draft")}>Batches</MenuItem>
                    <MenuItem onSelect={() => alert("Mark as Draft")}>Future cost</MenuItem>
                    <MenuItem onSelect={() => alert("Mark as Draft")}>Shelf</MenuItem>
                    <MenuItem onSelect={() => alert("Mark as Draft")}>Customer</MenuItem>
                    <MenuItem onSelect={() => alert("Mark as Draft")}>Analysis</MenuItem>
                    <MenuItem onSelect={() => alert("Mark as Draft")}>Flyer Analysis</MenuItem>
                    <MenuItem onSelect={() => alert("Mark as Draft")}>Recipes</MenuItem>
                </MenuList>
                </Menu></li>
                <li className="ChildList">
                <Menu>
                <MenuButton>Item <span aria-hidden>▾</span>
                </MenuButton>
                <MenuList>
                    <MenuItem onSelect={() => alert("Download")}>Login</MenuItem>
                    <MenuItem onSelect={() => alert("Copy")}>Logout</MenuItem>
                    <MenuItem onSelect={() => alert("Mark as Draft")}>Exit</MenuItem>
                </MenuList>
                </Menu></li>
                <li className="ChildList">
                <Menu>
                <MenuButton>Batch <span aria-hidden>▾</span>
                </MenuButton>
                <MenuList>
                    <MenuItem onSelect={() => alert("Download")}>Login</MenuItem>
                    <MenuItem onSelect={() => alert("Copy")}>Logout</MenuItem>
                    <MenuItem onSelect={() => alert("Mark as Draft")}>Exit</MenuItem>
                </MenuList>
                </Menu></li>
                <li className="ChildList">
                <Menu>
                <MenuButton>Customer <span aria-hidden>▾</span>
                </MenuButton>
                <MenuList>
                    <MenuItem onSelect={() => alert("Download")}>Login</MenuItem>
                    <MenuItem onSelect={() => alert("Copy")}>Logout</MenuItem>
                    <MenuItem onSelect={() => alert("Mark as Draft")}>Exit</MenuItem>
                </MenuList>
                </Menu></li>
                <li className="ChildList">
                <Menu>
                <MenuButton>Auxiliary <span aria-hidden>▾</span>
                </MenuButton>
                <MenuList>
                    <MenuItem onSelect={() => alert("Download")}>Login</MenuItem>
                    <MenuItem onSelect={() => alert("Copy")}>Logout</MenuItem>
                    <MenuItem onSelect={() => alert("Mark as Draft")}>Exit</MenuItem>
                </MenuList>
                </Menu></li>
                <li className="ChildList">
                <Menu>
                <MenuButton>System <span aria-hidden>▾</span>
                </MenuButton>
                <MenuList>
                    <MenuItem onSelect={() => alert("Download")}>Login</MenuItem>
                    <MenuItem onSelect={() => alert("Copy")}>Logout</MenuItem>
                    <MenuItem onSelect={() => alert("Mark as Draft")}>Exit</MenuItem>
                </MenuList>
                </Menu></li>
                <li className="ChildList">
                <Menu>
                <MenuButton>Preference <span aria-hidden>▾</span>
                </MenuButton>
                <MenuList>
                    <MenuItem onSelect={() => alert("Download")}>Login</MenuItem>
                    <MenuItem onSelect={() => alert("Copy")}>Logout</MenuItem>
                    <MenuItem onSelect={() => alert("Mark as Draft")}>Exit</MenuItem>
                </MenuList>
                </Menu></li>
                <li className="ChildList">
                <Menu>
                <MenuButton>Window <span aria-hidden>▾</span>
                </MenuButton>
                <MenuList>
                    <MenuItem onSelect={() => alert("Download")}>Login</MenuItem>
                    <MenuItem onSelect={() => alert("Copy")}>Logout</MenuItem>
                    <MenuItem onSelect={() => alert("Mark as Draft")}>Exit</MenuItem>
                </MenuList>
                </Menu></li>
                <li className="ChildList">
                <Menu>
                <MenuButton>Execute <span aria-hidden>▾</span>
                </MenuButton>
                <MenuList>
                    <MenuItem onSelect={() => alert("Download")}>Login</MenuItem>
                    <MenuItem onSelect={() => alert("Copy")}>Logout</MenuItem>
                    <MenuItem onSelect={() => alert("Mark as Draft")}>Exit</MenuItem>
                </MenuList>
                </Menu></li>
                <li className="ChildList">
                <Menu>
                <MenuButton>Tools <span aria-hidden>▾</span>
                </MenuButton>
                <MenuList>
                    <MenuItem onSelect={() => alert("Download")}>Login</MenuItem>
                    <MenuItem onSelect={() => alert("Copy")}>Logout</MenuItem>
                    <MenuItem onSelect={() => alert("Mark as Draft")}>Exit</MenuItem>
                </MenuList>
                </Menu></li>
                <li className="ChildList">
                <Menu>
                <MenuButton>Analysis <span aria-hidden>▾</span>
                </MenuButton>
                <MenuList>
                    <MenuItem onSelect={() => alert("Download")}>Login</MenuItem>
                    <MenuItem onSelect={() => alert("Copy")}>Logout</MenuItem>
                    <MenuItem onSelect={() => alert("Mark as Draft")}>Exit</MenuItem>
                </MenuList>
                </Menu></li>
                <li className="ChildList">
                <Menu>
                <MenuButton>Cubes <span aria-hidden>▾</span>
                </MenuButton>
                <MenuList>
                    <MenuItem onSelect={() => alert("Download")}>Login</MenuItem>
                    <MenuItem onSelect={() => alert("Copy")}>Logout</MenuItem>
                    <MenuItem onSelect={() => alert("Mark as Draft")}>Exit</MenuItem>
                </MenuList>
                </Menu></li>
            </ul>
            {this.state.showItemPrice ? <ItemPrice /> : null}
        
      </div>
    );
  }
}

export default Home;

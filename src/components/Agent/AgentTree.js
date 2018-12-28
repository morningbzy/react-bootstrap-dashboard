import $ from 'jquery';

import React, { Component } from 'react';
import { LinkContainer } from "react-router-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './AgentTree.scss';
import { Button, FormControl, InputGroup } from "react-bootstrap";

class AgentTree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: [
        {
          title: '机房1',
          path: '/',
          icon: 'home',
          subMenu: [
            {title: '10.0.10.1', path: '/sysmgr/user', icon: 'desktop'},
            {title: '10.0.10.2', path: '/sysmgr/role', icon: 'laptop'},
            {title: '10.0.10.23', path: '/sysmgr/perm', icon: 'hdd'},
          ],
        },
        {
          title: '机房2',
          path: '/dashboard',
          icon: 'tachometer-alt',
          subMenu: [
            {title: '10.0.10.1', path: '/sysmgr/user', icon: ['fab', 'linux']},
            {title: '10.0.10.2', path: '/sysmgr/role', icon: ['fab', 'ubuntu']},
            {title: '10.0.10.23', path: '/sysmgr/perm', icon: ['fab', 'windows']},
          ],
        },
        {
          title: '万豪机房',
          path: '/agent',
          icon: 'server',
          exact: false,
          subMenu: [
            {title: '10.0.10.1', path: '/sysmgr/user', icon: 'hdd'},
            {title: '10.0.10.2', path: '/sysmgr/role', icon: 'hdd'},
            {title: '10.0.10.23', path: '/sysmgr/perm', icon: 'hdd'},
          ],
        },
        {
          title: '金地机房',
          path: '/topo',
          icon: 'network-wired',
          exact: false,
          subMenu: [
            {
              title: '10.0.10.1', path: '/sysmgr/user', icon: 'hdd',
              subMenu: [
                {title: '10.0.10.1', path: '/sysmgr/user', icon: 'hdd'},
                {title: '10.0.10.2', path: '/sysmgr/role', icon: 'hdd'},
                {title: '10.0.10.23', path: '/sysmgr/perm', icon: 'hdd'},
              ],
            },
            {title: '10.0.10.2', path: '/sysmgr/role', icon: 'desktop'},
            {title: '10.0.10.23', path: '/sysmgr/perm', icon: 'hdd'},
          ],
        },
      ],
    }
  }

  icon = (m) => {
    if (!m.icon) return null;

    const icon = <FontAwesomeIcon tag="i" fixedWidth icon={m.icon}/>;

    if (m.subscript) {
      return (
        <i className="fa-layers fa-fw">
          {icon}
          <FontAwesomeIcon tag="i" fixedWidth icon='circle' className="subscript"
                           transform="shrink-3 down-4 right-5.5"/>
          <FontAwesomeIcon tag="i" fixedWidth icon={m.subscript}
                           transform="shrink-4 down-4 right-5.5"/>
        </i>
      );
    }
    return icon;
  };

  renderMenu = (menu) => {
    return menu ? menu.map((m, i) => {
      const {exact = true} = m;
      return (
        m.subMenu ? (
          <li key={i}>
            <span onClick={this.toggleExpend}>{this.icon(m)} {m.title} </span>
            <ul style={{display: 'none'}}>{this.renderMenu(m.subMenu)}</ul>
          </li>
        ) : (
          <li key={i} className="leaf">
            <span>{this.icon(m)} {m.title}</span>
          </li>
        )
      );
    }) : null;
  };

  toggleExpend = (e) => {
    let li = $(e.currentTarget).closest('li:not(.leaf)', '.agent-tree-nav');
    li.toggleClass('expended');
    $('> ul', li).slideToggle(250);
  };

  render() {
    return (
      <div className="agent-tree-wrapper">
        <div>
          <InputGroup size="sm">
            <FormControl placeholder="Search..."/>
            <InputGroup.Append>
              <Button variant="outline-secondary"><FontAwesomeIcon icon="search"/></Button>
              <Button variant="outline-secondary"><FontAwesomeIcon icon="redo"/></Button>
            </InputGroup.Append>
          </InputGroup>
        </div>
        <ul className="agent-tree-nav">
          <li className="root">
            <span><FontAwesomeIcon tag="i" fixedWidth icon="network-wired"/> Network</span>
            <ul>
              {this.renderMenu(this.state.menu)}
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}

export default AgentTree;
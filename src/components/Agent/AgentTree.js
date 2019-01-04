import $ from 'jquery';

import React, { Component } from 'react';
import { LinkContainer } from "react-router-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './AgentTree.scss';
import { Button, FormControl, InputGroup } from "react-bootstrap";
import { STATES } from "../../common/constants";

class AgentTree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: [
        {
          title: '机房1',
          path: '/',
          icon: 'home',
          state: 1,
          subMenu: [
            {title: '10.0.10.1', path: '/sysmgr/user', icon: 'desktop', state: 0,},
            {title: '10.0.10.2', path: '/sysmgr/role', icon: 'laptop', state: 0,},
            {title: '10.0.10.23', path: '/sysmgr/perm', icon: 'hdd', state: 1,},
          ],
        },
        {
          title: '机房2',
          path: '/dashboard',
          icon: 'tachometer-alt',
          state: 0,
          subMenu: [
            {title: '10.0.10.1', path: '/sysmgr/user', icon: ['fab', 'linux'], state: 0,},
            {title: '10.0.10.2', path: '/sysmgr/role', icon: ['fab', 'ubuntu'], state: 0,},
            {title: '10.0.10.23', path: '/sysmgr/perm', icon: ['fab', 'windows'], state: 0,},
          ],
        },
        {
          title: '万豪机房',
          path: '/agent',
          icon: 'server',
          state: 1,
          subMenu: [
            {title: '10.0.10.1', path: '/sysmgr/user', icon: 'hdd', state: 1,},
            {title: '10.0.10.2', path: '/sysmgr/role', icon: 'hdd', state: 1,},
            {title: '10.0.10.23', path: '/sysmgr/perm', icon: 'hdd', state: 1,},
          ],
        },
        {
          title: '金地机房',
          path: '/topo',
          icon: 'network-wired',
          exact: false,
          state: 2,
          subMenu: [
            {
              title: '10.0.10.1', path: '/sysmgr/user', icon: 'hdd', state: 2,
              subMenu: [
                {title: '10.0.10.1', path: '/sysmgr/user', icon: 'hdd', state: 1,},
                {title: '10.0.10.2', path: '/sysmgr/role', icon: 'hdd', state: 2,},
                {title: '10.0.10.23', path: '/sysmgr/perm', icon: 'hdd', state: 1,},
              ],
            },
            {title: '10.0.10.2', path: '/sysmgr/role', icon: 'desktop', state: 1,},
            {title: '10.0.10.23', path: '/sysmgr/perm', icon: 'hdd', state: 1,},
          ],
        },
      ],
    }
  }

  icon = (m) => {
    if (!m.icon) return null;

    const icon = <FontAwesomeIcon tag="i" fixedWidth icon={m.icon} className="lr-icon"/>;

    if (m.subscript) {
      return (
        <i className="fa-layers fa-fw">
          {icon}
          <FontAwesomeIcon tag="i" fixedWidth icon='circle' className="subscript lr-icon"
                           transform="shrink-3 down-4 right-5.5"/>
          <FontAwesomeIcon tag="i" fixedWidth icon={m.subscript} className="lr-icon"
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
            <span onClick={this.toggleExpend} className={`lr-${STATES[m.state]}`}>{this.icon(m)} {m.title} </span>
            <ul style={{display: 'none'}}>{this.renderMenu(m.subMenu)}</ul>
          </li>
        ) : (
          <li key={i} className="leaf">
            <span className={`lr-${STATES[m.state]}`}>{this.icon(m)} {m.title}</span>
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
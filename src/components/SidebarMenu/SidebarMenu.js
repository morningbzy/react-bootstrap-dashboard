import $ from 'jquery';

import React, { Component } from 'react';
import { LinkContainer } from "react-router-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './SidebarMenu.scss';

class SidebarMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: [
        {
          title: '首页',
          path: '/',
          icon: 'home',
        },
        {
          title: '仪表盘',
          path: '/dashboard',
          icon: 'tachometer-alt',
        },
        {
          title: '设备管理',
          path: '/agent',
          icon: 'server',
          exact: false,
        },
        {
          title: '拓扑管理',
          path: '/topo',
          icon: 'network-wired',
          exact: false,
        },
        {
          key: 'alarmmgr',
          title: '报警管理',
          icon: 'bell',
          subMenu: [
            {title: '报警', path: '/alarmmgr/current', icon: 'bell'},
            {title: '历史报警', path: '/alarmmgr/history', icon: 'bell', subscript: ['far', 'clock']},
          ],
        },
        {
          key: 'sysmgr',
          title: '系统管理',
          icon: 'cogs',
          subMenu: [
            {title: '用户管理', path: '/sysmgr/user', icon: 'cog'},
            {title: '角色管理', path: '/sysmgr/role', icon: 'cog'},
            {title: '权限管理', path: '/sysmgr/perm', icon: 'cog'},
          ],
        },
        {
          key: 'about',
          title: '关于',
          icon: 'info',
          subMenu: [
            {title: '系统信息', path: '/about/sysinfo', icon: 'info-circle'},
          ],
        }
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
            <LinkContainer to={m.path || m.key} exact={exact}>
              <span>{this.icon(m)} {m.title}</span>
            </LinkContainer>
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
      <div id="sidebar-wrapper" className="dark">
        <ul className="sidebar-nav" id="menu">
          {this.renderMenu(this.state.menu)}
        </ul>
      </div>
    );
  }
}

export default SidebarMenu;

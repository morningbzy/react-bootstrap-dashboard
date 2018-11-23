import $ from 'jquery';

import React, { Component } from 'react';
import { LinkContainer } from "react-router-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo, faInfoCircle, faCogs, faCog, faTachometerAlt} from '@fortawesome/free-solid-svg-icons';

import './SidebarMenu.scss';

class SidebarMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: [
        {
          title: '仪表盘',
          path: '/dashboard',
          icon: faTachometerAlt,
        },
        {
          key: 'sysmgr',
          title: '系统管理',
          icon: faCogs,
          subMenu: [
            {title: '用户管理', path: '/sysmgr/user', icon: faCog},
            {title: '权限管理', path: '/sysmgr/perm', icon: faCog}
          ],
        },
        {
          key: 'about',
          title: '关于',
          icon: faInfo,
          subMenu: [
            {title: '系统信息', path: '/about/sysinfo', icon: faInfoCircle},
          ],
        }
      ],
    }
  }

  renderMenu = (menu) => {
    return menu ? menu.map((m, i) => (
      <li key={i} className={m.subMenu ? '' : 'leaf'}>
        {m.subMenu ? (
          <>
            <span onClick={this.toggleExpend}>{m.icon ?
              <FontAwesomeIcon tag="i" fixedWidth icon={m.icon} size="sm"/> : null} {m.title} </span>
            <ul style={{display: 'none'}}>{this.renderMenu(m.subMenu)}</ul>
          </>
        ) : (
          <LinkContainer to={m.path || m.key}>
            <span>{m.icon ? <FontAwesomeIcon tag="i" fixedWidth icon={m.icon} size="sm"/> : null} {m.title}</span>
          </LinkContainer>
        )}
      </li>
    )) : null;
  };

  toggleExpend = (e) => {
    let li = $(e.currentTarget).parents('li');
    li.toggleClass('expended');
    $('ul', li).slideToggle();
  };

  render() {
    return (
      <div id="sidebar-wrapper">
        <ul className="sidebar-nav" id="menu">
          {this.renderMenu(this.state.menu)}
        </ul>
      </div>
    );
  }
}

export default SidebarMenu;

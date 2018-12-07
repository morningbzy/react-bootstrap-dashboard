import React, { Component } from 'react';
import { Card, Nav, Pagination, Table, ButtonGroup, Button, Modal, Form, Row, Col, Badge } from 'react-bootstrap';
import { STATES } from "../common/constants";

import './page.scss';
import AlarmMarquee from "../components/AlarmMarquee/AlarmMarquee";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class UserMgr extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      data: [
        {
          id: 1,
          username: 'admin',
          realName: 'Morning BAI',
          email: 'morningbzy@xxx.xxx',
          jointDate: 'YYYY-MM-DD',
          lastLogin: 'YYYY-MM-DD HH:mm:ss',
          role: ['admin'],
        },
        {
          id: 2,
          username: 'admin',
          realName: 'Morning BAI',
          email: 'morningbzy@xxx.xxx',
          jointDate: 'YYYY-MM-DD',
          lastLogin: 'YYYY-MM-DD HH:mm:ss',
          role: ['admin'],
        },
        {
          id: 3,
          username: 'admin',
          realName: 'Morning BAI',
          email: 'morningbzy@xxx.xxx',
          jointDate: 'YYYY-MM-DD',
          lastLogin: 'YYYY-MM-DD HH:mm:ss',
          role: ['test'],
        },
        {
          id: 4,
          username: 'admin',
          realName: 'Morning BAI',
          email: 'morningbzy@xxx.xxx',
          jointDate: 'YYYY-MM-DD',
          lastLogin: 'YYYY-MM-DD HH:mm:ss',
          role: ['test'],
        },
        {
          id: 5,
          username: 'admin',
          realName: 'Morning BAI',
          email: 'morningbzy@xxx.xxx',
          jointDate: 'YYYY-MM-DD',
          lastLogin: 'YYYY-MM-DD HH:mm:ss',
          role: ['test'],
        },
        {
          id: 6,
          username: 'admin',
          realName: 'Morning BAI',
          email: 'morningbzy@xxx.xxx',
          jointDate: 'YYYY-MM-DD',
          lastLogin: 'YYYY-MM-DD HH:mm:ss',
          role: ['operator', 'test'],
        },
      ]
    };
  }

  render() {
    return (
      <>
        <div id="container-wrapper" className="flex-grow-1">
          <AlarmMarquee/>
          <Card className="border-0">
            <Card.Header className="bg-white">
              <Nav variant="tabs" defaultActiveKey="#first">
                <Nav.Item as="span" id="page-title">
                  <Nav.Link as="b" disabled>{this.props.title}</Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Header>
            <Card.Body>
              <Table hover size="sm" striped>
                <thead>
                <tr>
                  <th>#</th>
                  <th>User Name</th>
                  <th>Real Name</th>
                  <th>Email</th>
                  <th>Roles</th>
                  <th>Join Date</th>
                  <th>Last Login Date</th>
                  <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {this.state.data.map(alarm => {
                  const state = STATES[alarm.state];
                  return (
                    <tr key={alarm.id}>
                      <td>{alarm.id}</td>
                      <td>{alarm.username}</td>
                      <td>{alarm.realName}</td>
                      <td>{alarm.email}</td>
                      <td>
                        {alarm.role.map((r) => (
                          <Badge variant={r === 'admin' ? 'danger' : 'dark'} className="perm mr-1">{r}</Badge>
                        ))}
                      </td>
                      <td>{alarm.jointDate}</td>
                      <td>{alarm.lastLogin}</td>
                      <td>
                        <ButtonGroup>
                          <Button size="sm" variant="outline-primary" onClick={() => this.setState({show: true})}>
                            <FontAwesomeIcon icon="pen" size="sm" fixedWidth/>
                          </Button>
                          <Button size="sm" variant="outline-danger">
                            <FontAwesomeIcon icon="trash" size="sm" fixedWidth/>
                          </Button>
                        </ButtonGroup>
                      </td>
                    </tr>
                  );
                })}
                </tbody>
              </Table>
              <Pagination size="sm">
                <Pagination.First/>
                <Pagination.Prev/>
                <Pagination.Item>{1}</Pagination.Item>
                <Pagination.Ellipsis/>
                <Pagination.Item>{10}</Pagination.Item>
                <Pagination.Item>{11}</Pagination.Item>
                <Pagination.Item active>{12}</Pagination.Item>
                <Pagination.Item>{13}</Pagination.Item>
                <Pagination.Item>{14}</Pagination.Item>
                <Pagination.Ellipsis/>
                <Pagination.Item>{20}</Pagination.Item>
                <Pagination.Next/>
                <Pagination.Last/>
              </Pagination>
            </Card.Body>
          </Card>
        </div>
        <Modal show={this.state.show} onHide={() => this.setState({show: false})}>
          <Modal.Header closeButton>
            <Modal.Title as="b">User Edit</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group as={Row}>
                <Form.Label column sm="3" className="col-form-label-sm">User Name</Form.Label>
                <Col sm="9">
                  <Form.Control type="text" size="sm"/>
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label column sm="3" className="col-form-label-sm">User Name</Form.Label>
                <Col sm="9">
                  <Form.Control type="text" size="sm"/>
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label column sm="3" className="col-form-label-sm">User Name</Form.Label>
                <Col sm="9">
                  <Form.Control type="text" size="sm"/>
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label column sm="3" className="col-form-label-sm">User Name</Form.Label>
                <Col sm="9">
                  <Form.Control type="text" size="sm"/>
                </Col>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button size="sm" variant="secondary">Cancel</Button>
            <Button size="sm" variant="primary">OK</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default UserMgr;

import React, { Component } from 'react';
import { Card, Nav, Pagination, Table, ButtonGroup, Button, Modal, Form, Row, Col, Badge } from 'react-bootstrap';

import AlarmMarquee from "../components/AlarmMarquee/AlarmMarquee";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class Role extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      data: [
        {
          id: 1,
          role: 'admin',
          perms: ['admin',],
        },
        {
          id: 2,
          role: 'default',
          perms: ['default', 'test',],
        },
        {
          id: 3,
          role: 'test',
          perms: ['test',],
        },
      ],
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
                  <th>Role Name</th>
                  <th>Permissions</th>
                  <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {this.state.data.map(role => {
                  return (
                    <tr key={role.id}>
                      <td>{role.id}</td>
                      <td>{role.role}</td>
                      <td>
                        {role.perms.map((perm) => (
                          <Badge variant={perm === 'admin' ? 'danger' : 'dark'} className="perm mr-1">{perm}</Badge>
                        ))}
                      </td>
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
            <Modal.Title as="b">Role Edit</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group as={Row}>
                <Form.Label column sm="3" className="col-form-label-sm">Role</Form.Label>
                <Col sm="9">
                  <Form.Control type="text" size="sm"/>
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label column sm="3" className="col-form-label-sm">Permissions</Form.Label>
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

export default Role;

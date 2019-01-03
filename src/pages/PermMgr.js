import React, { Component } from 'react';
import { Card, Nav, Pagination, Table, ButtonGroup, Button, Modal, Form, Row, Col } from 'react-bootstrap';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LinkContainer } from "react-router-bootstrap";
import PageHeader from "../components/PageHeader";


class Perm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      header: {
        title: this.props.title,
        tabs: [
          {
            title: 'User',
            to: '/sysmgr/user',
            props: {
              exact: true,
            },
          }, {
            title: 'Role',
            to: '/sysmgr/role',
            props: {
              exact: true,
            },
          }, {
            title: 'Permission',
            to: '/sysmgr/perm',
            props: {
              exact: true,
            },
          },
        ],
      },
      data: [
        {
          id: 1,
          perm: 'admin',
        },
        {
          id: 2,
          perm: 'default',
        },
        {
          id: 3,
          perm: 'test',
        },
      ],
    };
  }

  render() {
    const {header} = this.state;
    return (
      <>
        <div id="container-wrapper" className="flex-grow-1">
          <Card className="border-0">
            <Card.Header className="container-header">
              <PageHeader {...header}/>
            </Card.Header>
            <Card.Body>
              <Table hover size="sm" striped>
                <thead>
                <tr>
                  <th>#</th>
                  <th>Permission</th>
                  <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {this.state.data.map(role => {
                  return (
                    <tr key={role.id}>
                      <td>{role.id}</td>
                      <td>{role.perm}</td>
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
            <Modal.Title as="b">Permission Edit</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group as={Row}>
                <Form.Label column sm="3" className="col-form-label-sm">Permission</Form.Label>
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

export default Perm;

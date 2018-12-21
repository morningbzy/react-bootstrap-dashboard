import React, { Component } from 'react';
import { Card, Table } from 'react-bootstrap';


export default class extends Component {
  render() {
    const {title} = this.props;
    return (
      <Card className="dashboard-widget">
        <Card.Header>{title}</Card.Header>
        <Card.Body>
          <div style={{
            marginTop: "-.75rem",
            marginLeft: "-.75rem",
            marginRight: "-.75rem",
          }}>
          <Table size="sm" variant="flush">
            <tbody>
            <tr>
              <td>Name</td>
              <td>Value</td>
            </tr>
            <tr>
              <td>Name</td>
              <td>Value</td>
            </tr>
            <tr>
              <td>Name</td>
              <td>Value</td>
            </tr>
            <tr>
              <td>Name</td>
              <td>Value</td>
            </tr>
            <tr>
              <td>Name</td>
              <td>Value</td>
            </tr>
            <tr>
              <td>Name</td>
              <td>Value</td>
            </tr>
            <tr>
              <td>Name</td>
              <td>Value</td>
            </tr>
            <tr>
              <td>Name</td>
              <td>Value</td>
            </tr>
            <tr>
              <td>Name</td>
              <td>Value</td>
            </tr>
            <tr>
              <td>Name</td>
              <td>Value</td>
            </tr>
            <tr>
              <td>Name</td>
              <td>Value</td>
            </tr>
            <tr>
              <td>Name</td>
              <td>Value</td>
            </tr>
            <tr>
              <td>Name</td>
              <td>Value</td>
            </tr>
            <tr>
              <td>Name</td>
              <td>Value</td>
            </tr>
            <tr>
              <td>Name</td>
              <td>Value</td>
            </tr>
            </tbody>
          </Table>
          </div>
        </Card.Body>
      </Card>
    );
  }
};

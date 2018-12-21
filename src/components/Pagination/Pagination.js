import React, { Component } from 'react';
import { Pagination } from 'react-bootstrap';


export default class extends Component {

  render() {
    const {First, Prev, Ellipsis, Next, Last, Item} = Pagination;
    const {data, handlePaginate: paginate, paginationCount = 9} = this.props;
    const half = parseInt((paginationCount) / 2);
    const startPage = Math.max(data.first, Math.min(data.last + 1 - paginationCount, data.page - half));
    const endPage = Math.min(data.last, startPage + paginationCount - 1);
    let paginationItems = [];

    paginationItems.push(<First onClick={() => paginate(data.first)} disabled={data.page === data.first}/>);
    paginationItems.push(<Prev onClick={() => paginate(data.prev)} disabled={data.page === data.first}/>);

    if (startPage > data.first) {
      paginationItems.push(<Ellipsis onClick={() => paginate(Math.max(0, data.page - paginationCount - 1))}/>);
    }
    for (let p = startPage; p <= endPage; p++) {
      paginationItems.push(<Item onClick={() => paginate(p)} active={data.page === p}>{p}</Item>);
    }
    if (endPage < data.last) {
      paginationItems.push(<Ellipsis onClick={() => paginate(Math.min(data.last, data.page + paginationCount + 1))}/>);
    }

    paginationItems.push(<Next onClick={() => paginate(data.next)} disabled={data.page === data.last}/>);
    paginationItems.push(<Last onClick={() => paginate(data.last)} disabled={data.page === data.last}/>);

    return (<Pagination {...this.props}>{paginationItems}</Pagination>);
  }

}

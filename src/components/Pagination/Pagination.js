import React, { Component } from 'react';
import { Pagination } from 'react-bootstrap';


export default class extends Component {

  render() {
    const {First, Prev, Ellipsis, Next, Last, Item} = Pagination;
    const {data, handlePaginate, paginationCount = 9, ...rest} = this.props;
    const half = parseInt((paginationCount) / 2);
    const startPage = Math.max(data.first, Math.min(data.last + 1 - paginationCount, data.page - half));
    const endPage = Math.min(data.last, startPage + paginationCount - 1);
    let paginationItems = [];

    paginationItems.push(<First key="f" onClick={() => handlePaginate(data.first)} disabled={data.page === data.first}/>);
    paginationItems.push(<Prev key="p" onClick={() => handlePaginate(data.prev)} disabled={data.page === data.first}/>);

    if (startPage > data.first) {
      paginationItems.push(<Ellipsis key="fe" onClick={() => handlePaginate(Math.max(0, data.page - paginationCount - 1))}/>);
    }
    for (let p = startPage; p <= endPage; p++) {
      paginationItems.push(<Item key={p} onClick={() => handlePaginate(p)} active={data.page === p}>{p}</Item>);
    }
    if (endPage < data.last) {
      paginationItems.push(<Ellipsis key="ee" onClick={() => handlePaginate(Math.min(data.last, data.page + paginationCount + 1))}/>);
    }

    paginationItems.push(<Next key="n" onClick={() => handlePaginate(data.next)} disabled={data.page === data.last}/>);
    paginationItems.push(<Last key="l" onClick={() => handlePaginate(data.last)} disabled={data.page === data.last}/>);

    return (<Pagination {...rest}>{paginationItems}</Pagination>);
  }

}

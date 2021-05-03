import React from "react";
import PropTypes from 'prop-types';
import _ from 'lodash';

const Pagination = ( props ) => {

    const { itemsCount, pageSize, currentPage, onPageChange} = props;

    const pagesCount = Math.ceil(itemsCount/pageSize);

    if(pagesCount === 1){
        return null;
    }

    const pages = _.range(1,pagesCount+1);


    return (
        <nav aria-label="...">
            <ul className="pagination pagination-sm">
                <li className="page-item active" aria-current="page">
                    <span className="page-link">1</span>
                </li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
            </ul>
        </nav>
    )
};

Pagination.propTypes = {
    itemsCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired
};

export default Pagination;
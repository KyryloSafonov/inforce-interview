import React from 'react';
import './header.css';


function Header(props) {

    return (

        <div className='header'>
            <div className='title'>Product List</div>
            <div className='search-field'>
                <form onSubmit={props.doSearch}>
                    <input className='search-input' type='search' name='search' autoFocus placeholder='product..'/>
                    <button className='button' type='submit'>Search</button>
                </form>
            </div>
        </div>
    );
}

export default Header;

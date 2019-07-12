import React from 'react';
import T from 'prop-types';
import s from './Search.module.scss';
import { Button, Input } from '../../../smallComponents';
import IcoLocation from '../../../imgs/IcoLocal.svg'
import IcoSearch from '../../../imgs/IcoSearch.svg'



function Search({ component: Component, ...rest }) {
  return (
    <div className={s.container}>
      <div className={s.searchInput}>
        <Input placeholder="Search products by name" lsrc={IcoSearch}/>
      </div>
      <div className={s.locationInput}>
        <Input placeholder="Location" lsrc={IcoLocation}/>
      </div>
      <div className={s.searchButton}>
        <Button color="#3E3961">Search</Button>
      </div>      
    </div>
  );
}


  
Search.propTypes = {

};

export default Search;
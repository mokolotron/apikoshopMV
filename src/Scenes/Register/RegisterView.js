import React, { Component } from 'react'
import Header from '../../Components/Header/Header'
import {Form} from 'reactjs-components';

Form.propTypes = {
    // Classes.
    className: classPropType,
    formGroupClass: classPropType,
    formGroupErrorClass: classPropType,
    formRowClass: classPropType,
    helpBlockClass: classPropType,
    inlineIconClass: classPropType,
    inlineTextClass: classPropType,
    inputClass: classPropType,
    readClass: classPropType,
    sharedClass: classPropType,

    formTag: PropTypes.string,
    key: PropTypes.node,

    // Form definition to build the form from. Contains either:
    // 1. Array of field definitions will be created on same row
    // 2. Field definition (object) will create a single field in that row
    definition: PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.object, PropTypes.array])
    ),

    // Optional number of columns in the grid
    maxColumnWidth: PropTypes.number,
    // Optional function to call on error
    onError: PropTypes.func,
    // Optional function to call on change
    onChange: PropTypes.func,
    // Optional function to call on submit
    onSubmit: PropTypes.func,
    // Optional function. Will receive a trigger function.
    // Call the trigger function, when a submit needs to be triggered externally
    triggerSubmit: PropTypes.func,
    // If set to true, errors will be completely driven from the form definition.
    useExternalErrors: PropTypes.bool
};

function RegisterView(props)  {
          return (
           <div >Register</div>
        )
    }


export default RegisterView;
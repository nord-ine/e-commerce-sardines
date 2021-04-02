import React, { useState } from 'react'

import styles from './ControlledInput.module.css'

class ControlledInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.name = props.name;
        this.type = props.type;
    }

    handleChange(e) {
        const target = e.target;
        const name = target.name;
        const value = target.value;
        this.props.handleChange(name,value);
    }

    render() {
        return (
            <input className={styles.inputField} type={this.type} name={this.name} onChange={this.handleChange} />
        )
    }
}

export default ControlledInput
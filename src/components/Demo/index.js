import React from "react";
import PropTypes from 'prop-types';

const Demo = ({name = 'Noname', sum = 0, gender = 'm', other = 0}) => {
    return <>
        <div>Name: {name}</div>
        <div>Sum: {sum}</div>
        <div>Gender: {gender}</div>
        <div>Other: {other}</div>
    </>;
};
Demo.propTypes = {
  name  : PropTypes.string,
  sum   : PropTypes.number,
  gender: PropTypes.oneOf(['m', 'f']),
  other : PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
  ])
};
export default Demo;
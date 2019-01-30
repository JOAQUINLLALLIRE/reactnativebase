import React from 'react';
import { TouchableOpacity } from 'react-native';

const touchableWrapper = (props) => (
    <TouchableOpacity onPress={props.onPress}>
        { props.children }
    </TouchableOpacity>
);

export default touchableWrapper;
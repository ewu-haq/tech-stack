import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { CardSection } from './common';

class ListItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <CardSection>
                <Text style={styles.titleStyle}> 
                    {this.props.library.title}
                </Text>
            </CardSection>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 40,
        paddingLeft: 15
    }
}

export default ListItem;
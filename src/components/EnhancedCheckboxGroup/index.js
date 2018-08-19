import React from 'react';
import PropTypes from 'prop-types';
import EnhancedCheckbox from '../EnhancedCheckbox';

export default class EnhancedCheckboxGroup extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            selectedItem: undefined,
        };
    }

    setSelected (selectedItem) {
        this.setState({
            selectedItem,
        });
        this.props.onChange(this.props.items[selectedItem].value);
    }

    renderItems () {
        const { items } = this.props;
        const { selectedItem } = this.state;
        return items.map((item, i) => 
            <EnhancedCheckbox
                key={item.value}
                label={item.label}
                value={item.value}
                id={item.id}
                selected={selectedItem === i}
                onChange={() => this.setSelected(i)}
            />
        );
    }

    render () {
        return (
            <div className="enhanced-checkbox-group-container">
                {this.renderItems()}
            </div>
        );
    }
}

EnhancedCheckboxGroup.propTypes = {
    items: PropTypes.array,
    onChange: PropTypes.func.isRequired,
};

EnhancedCheckboxGroup.defaultProps = {
    items: [],
};
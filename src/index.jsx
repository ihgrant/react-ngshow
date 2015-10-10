import React, {PropTypes} from 'react';

const Show = React.createClass({
	propTypes: {
		show: PropTypes.bool,
		options: PropTypes.shape({
      DOM: PropTypes.bool,
      className: PropTypes.string
    })
	},
	getDefaultProps: {
		show: false,
		options: {
			DOM: false,
			className: ''
		}
	},
	render() {
		const hiddenStyle = this.props.show && !this.props.className ?
			{display: 'none'} :
			{};
		const className = this.props.show && this.props.options.className.length ?
			this.props.options.className :
			'';

		return (
			<div
				className={className}
				style={hiddenStyle}>
				{this.props.children}
			</div>
		);
	}
});

Show.DOM = React.createClass({
	propTypes: {
		show: React.PropType.bool
	},
	getDefaultProps: {
		show: false
	},
	render() {
		return (
			<div>
				{this.props.show ? this.props.children : null}
			</div>
		);
	}
});

export default Show;

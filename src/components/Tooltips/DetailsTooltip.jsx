import { IconFillPlay } from '@prism/dropcloth';
import PropTypes from 'prop-types';

const DetailsTooltip = ({ content, text }) => {
	return (
		<div className='swdc-relative swdc-group swdc-inline-block tooltip'>
			<span className='swdc-text-sm swdc-cursor-pointer swdc-underline swdc-inline-block swdc-text-[#0069ae] hover:swdc-text-[#336699] '>
				{text}
			</span>

			<span className='swdc-w-[400px] swdc-bg-[#fff] swdc-text-[#000] swdc-bottom-8 swdc-absolute md:swdc-right-[-200px] swdc-p-2 swdc-text-xs swdc-z-10 swdc-right-[-160px] tooltiptext'>
				{content}
			</span>
			<IconFillPlay className='swdc-relative swdc-rotate-90 swdc-bottom-[50px] swdc-left-[10px] swdc-fill-[#fff] swdc-z-10 tooltiptext' />
		</div>
	);
};

DetailsTooltip.propTypes = {
	content: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
	text: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

export default DetailsTooltip;

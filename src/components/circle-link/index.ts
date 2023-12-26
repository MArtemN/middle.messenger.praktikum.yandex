import Handlebars from 'handlebars';
import circleLeft from '@img/icons/circle-left.svg';
import circleRight from '@img/icons/circle-right.svg';

export {default as CircleLink} from './circle-link.hbs?raw';

Handlebars.registerHelper('circleLeft', () => {
	return circleLeft
});

Handlebars.registerHelper('circleRight', () => {
	return circleRight
});

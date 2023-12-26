import Handlebars from 'handlebars';
import personalNoAvatar from '@img/personal/user-no-avatar.png'

export {default as PersonalAvatar} from './personal-avatar.hbs?raw';

Handlebars.registerHelper('personalNoAvatar', () => {
	return personalNoAvatar
})

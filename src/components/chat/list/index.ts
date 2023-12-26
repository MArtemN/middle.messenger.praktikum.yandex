import Handlebars from 'handlebars';
import noAvatar from '@img/chat/no-avatar.png';
export {default as ChatList} from './list.hbs?raw';

Handlebars.registerHelper('noAvatar', () => {
	return noAvatar
})

Handlebars.registerHelper('chatList', () => {
	return [
		{
			avatar: '',
			name: 'Лина',
			message: 'Друзья, у меня для вас особенный выпуск новостей!...',
			time: '10:49',
			newCount: '2'
		},
		{
			avatar: '',
			name: 'Лина',
			message: 'Друзья, у меня для вас особенный выпуск новостей!...',
			time: '10:49',
			newCount: '2',
			active: 'true',
		},
		{
			avatar: '',
			name: 'Лина',
			message: 'Друзья, у меня для вас особенный выпуск новостей!...',
			time: '10:49',
			newCount: '2'
		},
		{
			avatar: '',
			name: 'Лина',
			message: 'Друзья, у меня для вас особенный выпуск новостей!...',
			time: '10:49',
			newCount: '2'
		},
		{
			avatar: '',
			name: 'Лина',
			message: 'Друзья, у меня для вас особенный выпуск новостей!...',
			time: '10:49',
			newCount: '2',
			active: 'true',
		},
		{
			avatar: '',
			name: 'Лина',
			message: 'Друзья, у меня для вас особенный выпуск новостей!...',
			time: '10:49',
			newCount: '2'
		},
		{
			avatar: '',
			name: 'Лина',
			message: 'Друзья, у меня для вас особенный выпуск новостей!...',
			time: '10:49',
			newCount: '2'
		},
		{
			avatar: '',
			name: 'Лина',
			message: 'Друзья, у меня для вас особенный выпуск новостей!...',
			time: '10:49',
			newCount: '2',
			active: 'true',
		},
		{
			avatar: '',
			name: 'Лина',
			message: 'Друзья, у меня для вас особенный выпуск новостей!...',
			time: '10:49',
			newCount: '2'
		},
		{
			avatar: '',
			name: 'Лина',
			message: 'Друзья, у меня для вас особенный выпуск новостей!...',
			time: '10:49',
			newCount: '2'
		},
		{
			avatar: '',
			name: 'Лина',
			message: 'Друзья, у меня для вас особенный выпуск новостей!...',
			time: '10:49',
			newCount: '2',
			active: 'true',
		},
		{
			avatar: '',
			name: 'Лина',
			message: 'Друзья, у меня для вас особенный выпуск новостей!...',
			time: '10:49',
			newCount: '2'
		},
	]
})

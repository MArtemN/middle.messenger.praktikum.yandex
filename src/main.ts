import Handlebars from 'handlebars';
import * as Components from './components';
import * as Pages from './pages';

// тестовые данные для профиля
const personalData = [
	{label: 'Почта', value: 'pochta@yandex.ru', name: 'email'},
	{label: 'Логин', value: 'ivanivanov', name: 'login'},
	{label: 'Имя', value: 'Иван', name: 'first_name'},
	{label: 'Фамилия', value: 'Иванов', name: 'second_name'},
	{label: 'Имя в чате', value: 'Иван', name: 'name'},
	{label: 'Телефон', value: '+7 (909) 967 30 30', name: 'phone'},
];

const personalDataChangePass = [
	{label: 'Старый пароль', value: '', name: 'password'},
	{label: 'Новый пароль', value: '', name: 'password'},
	{label: 'Повторите новый пароль', value: '', name: 'password'},
];

const pages = {
	'/': [ Pages.PagesLinks ],
	'/login': [ Pages.LoginPage ],
	'/registration': [ Pages.RegistrationPage ],
	'/404': [ Pages.Page404 ],
	'/500': [ Pages.Page500 ],
	'/personal': [ Pages.Personal, {name: 'Artem', personalData} ],
	'/personal-edit': [ Pages.PersonalEdit, {name: 'Artem', personalData} ],
	'/personal-change-pass': [ Pages.PersonalChangePass, {name: 'Artem', personalDataChangePass} ],
	'/chat': [ Pages.ChatPage ],
};

Object.entries(Components).forEach(([ name, component ]) => {
	Handlebars.registerPartial(name, component);
});

function navigate(page: string) {

	//@ts-ignore
	const [ source, context ] = pages[page] ?? ['404', 'Page.404'];
	const container = document.getElementById('app')!;
	container.innerHTML = Handlebars.compile(source)(context);
}

document.addEventListener('DOMContentLoaded', () => navigate(window.location.pathname));

document.addEventListener('click', e => {
	//@ts-ignore
	const page = e.target.getAttribute('page');
	if (page) {
		navigate(page);

		e.preventDefault();
		e.stopImmediatePropagation();
	}
});

// скрипты для базового примера некоторой верстки
document.addEventListener('DOMContentLoaded', () => {
	// простейшая валидация для вывода ошибки
	const inputs = document.querySelectorAll('input');

	if (inputs) {
		inputs.forEach(item => {
			item.addEventListener('change', (e) => {
				const target = e.target as HTMLInputElement;
				const error = target.closest('.input') as HTMLElement;

				if (target.value.trim() === '' || target.value.length < 3) {
					error.classList.add('input__error');
				} else {
					error.classList.remove('input__error');
				}
			})
		})
	}
});

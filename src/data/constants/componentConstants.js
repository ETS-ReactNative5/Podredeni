const FILTER_INPUT_WAIT_INTERVAL = 2000;

const REDIRECT_DELAY = 2000;

const ADMIN_PRODUCTS_FILTER_OPTIONS = {'name': 'име', 'number': 'номер'};

const ELEMENTS_ON_PAGE = {10: 10, 20: 20, 30: 30, 40: 40, 50: 50};

const ORDER_STATUS_BG = {0: 'Получена', 1: 'Потвърдена', 2: 'Изпратена', 3: 'Отказана'};

const ORDER_STATUS_EN = {0: 'ordered', 1: 'confirmed', 2: 'dispatched', 3: 'cancelled'};

const LABELS_BG = {
	number: '#',
	status: 'Статус',
	lastModification: 'Последна редакция',
	lastModificationTableHeader: 'Редакция',
	customer: 'Получател',
	product: 'Продукт',
	phone: 'Телефон',
	email: 'Емейл',
	amount: 'Сума',
	quantity: 'Брой',
	price: 'Цена',
	total: 'Общо',
	edit: 'Редакция',
	address: 'Адрес',
	office: 'Офис',
	orderNumber: 'Поръчка номер',
	deliveredTo: 'Доставка до',
	markAs: 'Отбележи като',
	comments: 'Забележка',
	streetShort: 'ул.',
	districtShort: 'кв.',
	blockShort: 'бл.',
	entranceShort: 'вх.',
	floorShort: 'ет.',
	apartmentShort: 'ап.'
};

const ORDER_DELIVERY_INPUTS = {

	firstName: 'Име',
	lastName: 'Фамилия',
	email: 'Имейл',
	phone: 'Телефон',

	country: 'Държава',
	city: 'Населено място',

	officeName: 'Офис',

	postalCode: 'Пощенски код',
	street: 'Улица',
	streetNo: 'Улица №',
	district: 'Квартал',
	block: 'Блок',
	entrance: 'Вход',
	floor: 'Етаж',
	apartment: 'Апартамент',

	comment: 'Коментар',

	termsAgreed: 'Условия за ползване'
};

const NOT_REQUIRED_ORDER_INPUTS = {
	street: 'улица',
	streetNo: 'улица №',
	district: 'квартал',
	block: 'блок',
	entrance: 'вход',
	floor: 'етаж',
	apartment: 'апартамент',
};

const BUTTONS_BG = {
	confirm: 'Потвърди',
	cancel: 'Отказ',
	continue: 'Продължи',
	next: 'Напред',
	back: 'Назад',
	yes: 'Да',
	no: 'Не',
	send: 'Изпрати',

	//Cart
	saveChanges: 'Запази промените',
	sendOrder: 'Изпрати поръчката',

	// Order
	received: 'Получена',
	confirmed: 'Потвърдена',
	dispatched: 'Изпратена',
	cancelled: 'Отказана'
};

const USER_ACCOUNT = {
	email: 'Имейл',
	password: 'Парола',
	confirmPassword: 'Повтори парола',
	register: 'Регистрация',
	login: 'Вход',
	cancel: 'Отказ',
};

const TOASTR_MESSAGES = {
	//Errors
	error: 'Грешка',
	passwordsMismatch: 'Паролите не съвпадат.',

	//Warnings
	requestEmptyFields: 'Моля, попълнете следните полета:',
	productAlreadyInCart: 'Този продукт вече е добавен.',
	editQuantityFromCart: 'За редакция, моля, отидете в кошница.',

	//Success
	productAddedToCart: 'Продуктът е добавен в кошницата Ви.',
	successOrderEdit: 'Успешна редакция.',
	successCancelOrder: 'Поръчката е отказана.',
	messageSent: 'Вашето съобщение беше изпратено!'
};

const CONFIRM_DIALOGS = {
	cancelOrder: 'Желаете ли да откажете поръчката?',
	deleteOrder: 'Сигурни ли сте, че искате да откажете поръчката?',
	deleteProduct: 'Сигурни ли сте, че искате да изтриете този продукт?'

};

const RESOLUTIONS = {
	xs: 450,
	sm: 680,
	md: 980
};

const PRODUCT = {
	price: 'Цена:',
	addToCart: 'Добави'
};

const HOME = {
	topSellers: 'Най-продавани',
};

const TERMS = {
	terms: 'Общи условия',

}

const CURRENCY = 'лв.';

const CONTACT_FORM = {
	name: 'Име:',
	email: 'Имейл:',
	subject: 'Относно:',
	message: 'Съобщение:'
};

const CART = {
	//Main
	edit: 'Преглед и редакция',
	deliveryData: 'Данни за доставка',
	confirm: 'Потвърждение',
	step1: 'Стъпка 1',
	step2: 'Стъпка 2',
	step3: 'Стъпка 3',
	noProductAdded: 'Нямате добавени продукти',

	//Products table
	product: 'Продукт',
	quantity: 'Брой',
	price: 'Цена',
	sum: 'Сума',
	totalSum: 'Общо:',

	//Delivery details


	//Review
	recipient: 'Получател',
	toEkontOffice: 'Доставка до офис на ЕКОНТ',
	toAddress: 'Доставка до адрес',
	comment: 'Коментар',
	noComment: 'Няма добавени забележки.',
};

const TOP_SELLERS_TIMER_INTERVAL = 8000;

export {
	FILTER_INPUT_WAIT_INTERVAL,
	ADMIN_PRODUCTS_FILTER_OPTIONS,
	ELEMENTS_ON_PAGE,
	ORDER_STATUS_BG,
	ORDER_STATUS_EN,
	LABELS_BG,
	USER_ACCOUNT,
	TOASTR_MESSAGES,
	ORDER_DELIVERY_INPUTS,
	NOT_REQUIRED_ORDER_INPUTS,
	BUTTONS_BG,
	RESOLUTIONS,
	REDIRECT_DELAY,
	CONFIRM_DIALOGS,
	PRODUCT,
	HOME,
	TERMS,
	CURRENCY,
	CONTACT_FORM,
	CART,
	TOP_SELLERS_TIMER_INTERVAL
};


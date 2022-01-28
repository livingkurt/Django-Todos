let username_status = false;

const username_show_hide = () => {
	const element = document.getElementById('username-info');
	console.log(element.style.opacity);
	if (username_status) {
		username_status = false;
		element.style.opacity = 0;
		element.style.zIndex = 0;
	} else if (!username_status) {
		username_status = true;
		element.style.opacity = 1;
		element.style.zIndex = 10;
	}
};
let password_status = false;

const password_show_hide = () => {
	const element = document.getElementById('password-info');
	console.log(element.style.opacity);
	if (password_status) {
		password_status = false;
		element.style.opacity = 0;
		element.style.zIndex = 0;
	} else if (!password_status) {
		password_status = true;
		element.style.opacity = 1;
		element.style.zIndex = 10;
	}
};

// // let status_boolean = false;
// let username_status = false;
// let password_status = false;

// const show_hide = (type, status_boolean) => {
// 	const element = document.getElementById(type + '-info');
// 	console.log(element.style.opacity);
// 	if (type === 'username') {
// 		if (status_boolean) {
// 			status_boolean = false;
// 			element.style.opacity = 0;
// 		} else if (!status_boolean) {
// 			status_boolean = true;
// 			element.style.opacity = 1;
// 		}
// 	}
// };
// let status_boolean = false;
// let username_status = false;
// let password_status = false;

// const show_hide = (type) => {
// 	const element = document.getElementById(type + '-info');
// 	console.log(element.style.opacity);
// 	if (type === 'username') {
// 		if (username_status) {
// 			username_status = false;
// 			element.style.opacity = 0;
// 		} else if (!username_status) {
// 			username_status = true;
// 			element.style.opacity = 1;
// 		}
// 	} else if (type === 'password') {
// 		if (password_status) {
// 			password_status = false;
// 			element.style.opacity = 0;
// 		} else if (!password_status) {
// 			password_status = true;
// 			element.style.opacity = 1;
// 		}
// 	}
// };

// var specifiedElement = document.getElementsByTagName(body);

// //I'm using "click" but it works with any event
// document.addEventListener('click', function(event) {
// 	var isClickInside = specifiedElement.contains(event.target);
// 	const username = document.getElementById('username-info');
// 	const password = document.getElementById('password-info');

// 	if (!isClickInside) {
// 		//the click was outside the specifiedElement, do something
// 		username.style.opacity = 0;
// 		password.style.opacity = 0;
// 	}
// });

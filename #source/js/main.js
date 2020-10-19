let ibg = document.querySelector(".ibg");
let img = ibg.querySelector("img").getAttribute("src");
ibg.setAttribute("style", "background-image:url(" + img + ")");

let inputs = document.querySelectorAll('input[data-rule]');

for (let input of inputs) {
	input.classList.add('default');
	input.addEventListener('blur', function() {
		let rule = this.dataset.rule;
		let value = this.value;
		let check;
		switch (rule) {
			case 'name':
				check = /^([a-zA-Zа-яА-Я])+$/.test(value);
			break;
			case 'phone':
				check = /^(\d{11})+$/.test(value);
			break;
			case 'email':
				check = /^(\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6})+$/.test(value);
			break;
		}
 		this.classList.remove('valid');
 		this.classList.remove('invalid');
 		if (check) {
 			this.classList.add('valid');
 		} else {
 			this.classList.add('invalid');
 		}	
	});
}

let a = true;
let b = (e) => {
	a ? e.classList.add("active") : e.classList.remove("active"); 
	a = !a;
}
let a2 = true;
let b2 = (e) => {
	a2 ? e.classList.add("active") : e.classList.remove("active"); 
	a2 = !a2; 
}
let a3 = true;
let b3 = (e) => {
	a3 ? e.classList.add("active") : e.classList.remove("active"); 
	a3 = !a3; 
}
let a4 = true;
let b4 = (e) => {
	a4 ? e.classList.add("active") : e.classList.remove("active"); 
	a4 = !a4; 
}
let a5 = true;
let b5 = (e) => {
	a5 ? e.classList.add("active") : e.classList.remove("active"); 
	a5 = !a5; 
}
let a6 = true;
let b6 = (e) => {
	a6 ? e.classList.add("active") : e.classList.remove("active"); 
	a6 = !a6; 
}
let a7 = true;
let b7 = (e) => {
	a7 ? e.classList.add("active") : e.classList.remove("active"); 
	a7 = !a7; 
}
let a8 = true;
let b8 = (e) => {
	a8 ? e.classList.add("active") : e.classList.remove("active"); 
	a8 = !a8; 
}
let a9 = true;
let b9 = (e) => {
	a9 ? e.classList.add("active") : e.classList.remove("active"); 
	a9 = !a9; 
}

let check = document.querySelector('input[name=check]');
let err = document.querySelector('.err');
let flug = true;
check.onclick = () => {
	err.innerHTML = "";
	flug ? check.setAttribute("value", 1) : check.setAttribute("value", 0); 
	flug = !flug;
}

let sends = document.querySelector('.sends');
sends.onclick = (e) => {
	e.preventDefault();
	let err1 = document.querySelector('.err1');
	let err2 = document.querySelector('.err2');
	let err3 = document.querySelector('.err3');
	let success = document.querySelector('.success');
	let name = document.querySelector('input[name="name"]');
	let phone = document.querySelector('input[name="phone"]');
	let email = document.querySelector('input[name="email"]');
	let at = email.value.indexOf("@"); 
	let dot = email.value.indexOf(".");
	if (true) {
		if (name.value == "") {
			err1.innerHTML = "* Обязательно для заполнения";
			name.classList.add('invalid');
			return false;
		} else {
			err1.innerHTML = "";
		}
		if (phone.value == "") {
			err2.innerHTML = "* Обязательно для заполнения";
			phone.classList.add('invalid');
			return false;
		} else if (phone.value.length < 11 && isNaN(phone)) {
			err2.innerHTML = "* Введите 11 цифр для телефона";
			phone.classList.add('invalid');
			return false;
		} else {
			err2.innerHTML = "";
		}
		if (email.value == "") {
			err3.innerHTML = "* Обязательно для заполнения";
			email.classList.add('invalid');
			return false;
		} else if (at < 1 || dot < 1) {
			err3.innerHTML = "* Email введен не верно";
			email.classList.add('invalid');
			return false;
		} else {
			err3.innerHTML = "";
			email.classList.remove('invalid');
			email.classList.add('valid');
		}
		if (check.value == 0) {
			err.innerHTML = "* Вы не дали согласия на обработку персональных данных!";
			return false;
		} else {
			err.innerHTML = "";
		}
		success.innerHTML = "Заявка успешно отправлена! Спасибо Вам за обращение!";
		sends.setAttribute("disabled", "true");
	}
}

let order = document.querySelector('.order');
let popap = document.querySelector('.popap');
let popapBg = document.querySelector('.popap-bg');
let close = document.querySelector('.close');
order.onclick = () => {
	popap.style.display = 'block';
}
popapBg.onclick = () => {
	popap.style.display = 'none';
}
close.onclick = () => {
	popap.style.display = 'none';
}

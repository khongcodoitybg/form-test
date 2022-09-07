const API = 'https://localhost3000';

const openModalSignUp = () => {
	document.getElementById('modalSignUp').style.display = 'block';
};

const closeModalSignUp = () => {
	document.getElementById('modalSignUp').style.display = 'none';
};

document.querySelector('.signUp-open').onclick = () => openModalSignUp();

document
	.querySelector('.modalSignUp')
	.addEventListener('click', closeModalSignUp);

const a = document.querySelectorAll('.containerSignUp');
for (b of a) {
	b.addEventListener('click', (event) => {
		event.stopPropagation();
	});
}

const handleRespone = (res) => {
	closeModalSignUp();
};

function Register(data) {
	let options = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	};
	fetch(API + '/register', options)
		.then((response) => response.json())
		.then((res) => handleRespone(res))
		.catch((error) => {
			console.error(
				'There has been a problem with your fetch operation:',
				error
			);
		});
}

function reset() {
	document.getElementById('InputName').value = '';

	document.getElementById('InputEmail').value = '';

	document.getElementById('InputPassword').value = '';
}

function checkSignup() {
	document.getElementById('InputName');
	document.getElementById('InputEmail');
	document.getElementById('InputPassword');

	if (document.getElementById('InputName').value.trim().length === 0) {
		document.querySelector('#descName').innerHTML = 'Bắt buộc nhập';

		document.querySelector('#descEmail').innerHTML = '';
		document.querySelector('#descPassword').innerHTML = '';
		return false;
	} else if (document.getElementById('InputEmail').value.trim().length === 0) {
		document.querySelector('#descName').innerHTML = '';
		document.querySelector('#descPassword').innerHTML = '';
		document.querySelector('#descEmail').innerHTML = 'Bắt buộc nhập';
		return false;
	} else if (
		document.getElementById('InputPassword').value.trim().length === 0
	) {
		document.querySelector('#descName').innerHTML = '';
		document.querySelector('#descEmail').innerHTML = '';
		document.querySelector('#descPassword').innerHTML = 'Bắt buộc nhập';

		return false;
	} else {
		document.querySelector('#descName').innerHTML = '';
		document.querySelector('#descEmail').innerHTML = '';
		document.querySelector('#descPassword').innerHTML = '';
		reset();

		return true;
	}
}

const signUpBtn = document.querySelector('.signUp-submit');
signUpBtn.onclick = () => {
	const name = document.getElementById('InputName').value;
	const email = document.getElementById('InputEmail').value;
	const password = document.getElementById('InputPassword').value;
	const age = document.querySelector(
		'input[name="flexRadioDefault"]:checked'
	).value;
	const biograpphy = document.getElementById('floatingTextarea').value;
	const jobRoles = document.querySelector('.form-select').value;
	const interest = document.querySelector('#flexCheckChecked2').value;
	console.log(jobRoles);
	console.log(biograpphy);

	let formData = {};
	const c = checkSignup();
	if (c === true) {
		Register(formData);
	}
};

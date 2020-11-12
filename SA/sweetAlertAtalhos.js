<script src="sweetalert.js"></script>

Swal.fire({
	position: 'top',
	icon: 'warning',
	iconColor: '#ff914d',
	title: 'Este e-mail já é cadastrado',
	showConfirmButton: true,
	confirmButtonColor: '#836fff'
	// timer: 1500
})
Swal.fire({
	position: 'center',
	icon: 'success',
	iconColor: '#28a745',
	title: 'Cadastro efetuado com sucesso',
	showConfirmButton: false,
	timer: 1500
})

Swal.fire({
	icon: 'error',
	title: 'Oops...',
	text: 'Login Incorreto',
	showConfirmButton: true,
	confirmButtonColor: '#836fff'
	// footer: '<a href>Porque estou com esse problema?</a>'
})

Swal.fire({
	position: 'top',
	icon: 'warning',
	iconColor: '#ff914d',
	title: 'Este e-mail não foi localizado',
	showConfirmButton: true,
	confirmButtonColor: '#836fff'
// timer: 1500
}).then((result) => {
	if (result.value) {
		window.location.href = "gerenciadordefuncionarios.html"
	}
})

Swal.fire({
	position: 'center',
	icon: 'success',
	iconColor: '#28a745',
	title: 'Cliente atualizado com sucesso',
	showConfirmButton: false,
	timer: 1500,
}).then((result) => {
	{
		window.location.href = "gerenciadordeclientes.html"
		localStorage.setItem("clientes", JSON.stringify(cadastroclientes2));
	}
})

Swal.fire({
	position: 'top',
	title: 'Você tem certeza?',
	text: "Você não será capaz de reverter isso!",
	icon: 'warning',
	iconColor: '#ff914d',
	showCancelButton: true,
	confirmButtonColor: '#836fff',
	cancelButtonColor: '#d33',
	cancelButtonText: 'Cancelar',
	confirmButtonText: 'Sim, delete isso!'
}).then((result) => {
		if (result.isConfirmed) {
			localStorage.setItem("funcionarios", JSON.stringify(funcionarios3));
			Swal.fire(
				'Funcionário removido com sucesso'
			).then((result) => {
				if (result.value) {
					location.reload();
				}
		 })
		}
	})

	Swal.fire({
		position: 'top',
		title: 'Você tem certeza?',
		text: "Você não será capaz de reverter isso!",
		icon: 'warning',
		iconColor: '#ff914d',
		showCancelButton: true,
		confirmButtonColor: '#836fff',
		cancelButtonColor: '#d33',
		cancelButtonText: 'Cancelar',
		confirmButtonText: 'Sim, delete isso!'
	}).then((result) => {
			if (result.isConfirmed) {
				localStorage.setItem("clientes", JSON.stringify(cadastroclientes3));
				Swal.fire({
					position: 'center',
					icon: 'success',
					iconColor: '#28a745',
					title: 'Cliente removido com sucesso',
					showConfirmButton: false,
					timer: 1500,
				}).then((result) => {
					{
						location.reload();
					}
			 })
			}
		})
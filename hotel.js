
	// entrar no sistema
		var nome_do_hotel = prompt("Seja bem vindo(a). Qual o nome do hotel?");
		alert("O nome do hotel é " + nome_do_hotel);
		var nome_do_usuario = prompt("Qual o seu nome?"); 
		verifica_senha();


	/// validar senha 2678
		function verifica_senha() {
			const senha = 2678;
			if (prompt("Informe a senha") == senha) {
				inicio();
			} else {
				alert("Senha incorreta")
				verifica_senha();
			}
		}

	/// Bem vindo
	alert("Bem-Vindo ao " + nome_do_hotel + ", " + nome_do_usuario + ". É um imenso prazer ter você por aqui");	


	/// escolher o que deseja fazer
	function inicio() {

			let escolha = parseInt(prompt('Selecione uma opção\n1.) Reserva de Quartos\n2.) Cadastro de Hóspedes\n3.) Reserva para Eventos\n4.) Abastecimento de Carros\n5.) Manutenção do Ar-condicionado\n6.) Sair'));

			switch (escolha) {
				case 1:
					reserva_de_quartos();
					break;
				case 2:
					cadastro_de_hospedes();
					break;
				case 3:
					reserva_evento();
					break;
				case 4:
					abastecer_carros();
					break;
				case 5:
					manutencao_do_arcondicionado();
					break;
				case 6:
					sair();
					break;
				default:
					erro();
			}
		}

	///Reservar um quarto
		function reserva_de_quartos() {
			alert('Bem-vindo a área de Reserva de Quartos do Hotel '+ nome_do_hotel );
			var valor_da_diaria = parseFloat(prompt("Qual o valor da diaria?"));

				///condição caso o valor for negativo
				if (valor_da_diaria <= 0) {
				alert('Valor inválido ' + nome_do_usuario + ', tente novamente');
				var valor_da_diaria = parseFloat(prompt("Qual o valor da diaria?"));
				}
			
			var quantidade_de_diarias = parseFloat(prompt("Quantas diárias serão necessárias?"));

				///condição caso o valor passar de 30 dias ou for menor ou igual 0
				if (quantidade_de_diarias  > 30 ) {
				alert('O numero maximo de diarias no Hotel ' + nome_do_hotel + ' é de 30 dias');
				var quantidade_de_diarias = parseFloat(prompt("Quantas diárias serão necessárias?"));
				} else if (quantidade_de_diarias <= 0) {
				alert('Numero inválido '+ nome_do_usuario + ', tente uma quantidade maior que 0');
				var quantidade_de_diarias = parseFloat(prompt("Quantas diárias serão necessárias?"));
				}
 
			var matematica_de_diarias = (valor_da_diaria ) * (quantidade_de_diarias);
			alert ('O valor total de ' + quantidade_de_diarias + ' diarias é de ' + matematica_de_diarias);


			var nome_do_hospede = (prompt("Qual o nome do hóspede ?"));


			var confirmaçao = (prompt(nome_do_usuario + ', Você confirma a hospedagem de ' + nome_do_hospede + ' por ' + quantidade_de_diarias + ' dias ? S/N'));
			/// condição de resposta da reserva -SIM OU NÃO-
			if (confirmaçao == "Sim" || confirmaçao == "s" || confirmaçao ==  "Sim" ) {
				alert ( nome_do_usuario + " , reserva efetuada com sucesso para " + nome_do_hospede + ". O valor total é de " + matematica_de_diarias + "." );
			inicio();
			} else if (confirmaçao == "Não" ||confirmaçao ==  "n" || confirmaçao ==  "N" || confirmaçao ==  "nao" ) {
				alert ( nome_do_usuario +", reserva não efetuada")
			}
			inicio();
		}

		//////////////////////18:46 parei aq
		//////////////////////19:30 voltei aq

    /// cadastrar hospedes no sistema
		function cadastro_de_hospedes() {
			alert('Bem-vindo a área de Cadastro de hóspedes do Hotel '+ nome_do_hotel );

            var lista_hospedes = [];
			
			function sistema_cadastrar_hospedes() {

				var escolha_hospedes = parseInt(prompt('Cadastro de Hóspedes\n\n Selecione uma opção: \n1. Cadastrar \n2. Pesquisar \n3. Sair'));

				if (escolha_hospedes === 1) {
					cadastrar_hospedes();
				} else if (escolha_hospedes === 2) {
					pesquisar_hospedes();
				} else if (escolha_hospedes === 3) {
					inicio();
				} else {
					erro_pesquisar_hospedes();
				}
			}
			

			function cadastrar_hospedes() {

                var gratuidade = 0;
                var meia_diaria = (valor_diaria /2);
                var quantidade_de_hospede = 0;
                const encerrar_cadastro = "PARE";

                /// sobre valores
                /// não pode valor negativo zé
                var valor_diaria_cadastro = parseFloat(prompt("Qual o valor da diária?"));
                while (valor_diaria_cadastro < 0) {
                    alert("Insira um valor válido");
                    valor_diaria_cadastro = parseFloat(prompt("Qual o valor da diária?"));
                }


                /// cadastro 
                var nome_hospede = prompt("Qual o nome da(o) hóspede?");
                if (lista_hospedes.length >= 15){
					alert("Numero máximo de hóspedes cadastrados.");
				} else if (nome_hospede == encerrar_cadastro) {
                    var total = valor_diaria_cadastro
                 } else {	 
					var nome_hospede = prompt("Qual o nome da(o) hóspede?");
                }
					
            



                ///paga inteira, meia ou nada?
                var idade_do_hospede = parseInt(prompt("Qual a idade da(o) hóspede?"));
                if (idade_do_hospede <= 6) {
                alert ( nome_hospede + " cadastrado(a) com sucesso. " + nome_hospede + " possui gratuidade");
                    gratuidade++;
                    quantidade_de_hospede++;
                } else if (idade_do_hospede >= 60) {
                    alert ( nome_hospede + " cadastrado(a) com sucesso. " + nome_hospede + " O hóspede paga meia.");
                    meia_diaria++;
                    quantidade_de_hospede++;
                } else if ( idade_do_hospede < 0 || isNaN) {
                    alert ( "Insira uma idade válida")
                    var idade_do_hospede = parseInt(prompt("Qual a idade da(o) hóspede?"));
                } else {
                    alert ( nome_hospede + " cadastrado(a) com sucesso");
                    quantidade_de_hospede++;
                }

            




				// lenght é uma propriedade que retorna a quantidade de itens dentro do array. 
				if (lista_hospedes.length >= 15){
					alert("Numero máximo de hóspedes cadastrados.");
				} else {	
					var nome_hospede = prompt('Por favor, informe o nome da(o) hóspede:');
					
					// O método push() permite adicionar um item ao Array/Vetor. Importante dizer que ele adiciona o elemento ao final do Array/Vetor. 
					lista_hospedes.push(nome_hospede);
					console.log(lista_hospedes); // O console é usado apenas para exibir ao desenvolvedor todo mundo que já está cadastrado.
					alert("Sucesso! Hóspede " + nome_hospede + " foi cadastrada(o) com sucesso!\n");
				}
				
				sistema_cadastrar_hospedes();
			}
			
			function pesquisar_hospedes() {
				var nome_hospede = prompt('Por favor, informe o nome da(o) hóspede para pesquisa:');
				// O método includes() procura por um elemento dentro do Array e retorna verdadeiro ou falso. Caso queira comparar números, o mais indicado é o método find();
				if (lista_hospedes.includes(nome_hospede)){
					alert(nome_hospede + ' encontrada(o).')
				} else {
					alert(nome_hospede + ' não foi encontrada(o).')
				}
				
				sistema_cadastrar_hospedes() 
			}
			
			function erro_pesquisar_hospedes(){
				alert('Por favor, informe um número entre 1 e 3');
				sistema_cadastrar_hospedes();
			}
			
			sistema_cadastrar_hospedes();
		

		}

		

		function erro() {
			alert('Por favor, informe um número entre 1 e 4');
			inicio();
		}

		function sair() {
			var confirma = confirm('Você deseja sair?');
			if (confirma) {
				window.close();
			} else {
				inicio();
			}
		}

		
		
		inicio();
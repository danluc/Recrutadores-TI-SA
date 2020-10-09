## Recrutadores-TI-SA
Sistema desenvolvido em .Net Core e Angular

### Passo a passo executar o projeto
	    • Clona o repositório
	    • Crie um DB sym ou outro nome que você escolher(terá que mudar no appsettings.json)
      
#### API(BACK)
	    • Entre na pastar API e execute as migrations
      	        - dotnet ef database update ou Update-Database
		• Ainda na pastar API/API e execute o projeto
      	        - Abre o CMD na pasta e rode o comando dotnet run
                
#### Angular(FRONT)
	    • Entre na pastar Front
      	        - Abre o CMD na pasta e rode o comando npm install
      	        - Ainda no CMD rode o comando ng serve -o
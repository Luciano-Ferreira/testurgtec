# Back-end AdoniJS

```
  ## instale as dependencias 
  yarn
  ## ou 
  npm install
```

crie o arquivo .env semelhante ao .env.example.

instancie a porta do apache e  mysql com XAMMP
![image](https://user-images.githubusercontent.com/46464433/168426326-3654632f-653d-4b7d-9cb3-b101b5881851.png)

e crie o schema lucid com qualquer client mysql aqui eu usei o Workbench.

![image](https://user-images.githubusercontent.com/46464433/168426530-56324198-4fc8-489c-99ff-31a7ddfbfdec.png)

![image](https://user-images.githubusercontent.com/46464433/168426576-6e0c78d5-fa87-49d0-bda2-fe0f51da1eae.png)

aplica e cria o schema.
roda as migrations

```
yarn migration:run
```

e roda a aplicação

```
yarn dev
```

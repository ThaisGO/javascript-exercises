# Variáveis e Tipos

### Exercício 1

**Descrição:**  
Declare uma variável para armazenar seu nome e outra para sua idade. Mostre uma frase concatenando as duas.

**Código de Exemplo / Solução:**

```javascript
const nome = 'Larissa';
const idade = 21;
console.log(`Seu nome é ${nome} e sua idade é ${idade}`);
```
### Exercício 2

**Descrição:**  
Crie uma variável city usando const. Tente reatribuir o valor e veja o erro.

**Código de Exemplo / Solução:**

```javascript
const city = 'Tokyo';
city = 'London'
```

### Exercício 3

**Descrição:**  
Crie uma variável temperature com valor decimal. Converta para inteiro usando parseInt.

**Código de Exemplo / Solução:**

```javascript
let temperature = 37.8
let converted = parseInt(temperature)
console.log(converted)
```

### Exercício 4

**Descrição:**  
Crie uma variável amount com valor string '100'. Converta para número e some com 50.

**Código de Exemplo / Solução:**

```javascript
let amount = '100'
console.log(`total: ${Number(amount) + 50}`)
```

### Exercício 5

**Descrição:**  
Declare uma variável isLogged com valor booleano e alterne entre true e false.

**Código de Exemplo / Solução:**

```javascript
let isLogged  = true
console.log(isLogged)
console.log(!isLogged)
```

### Exercício 6

**Descrição:**  
Teste null e undefined: crie duas variáveis, uma com null e outra sem valor. Mostre no console a diferença.

**Código de Exemplo / Solução:**

```javascript
let variable1 = null; 
let variable2;
console.log(variable1)
console.log(variable2)
```
### Exercício 7

**Descrição:**  
Declare um array com 3 frutas e mostre a primeira fruta.

**Código de Exemplo / Solução:**

```javascript
let fruits = ['maçã', 'banana', 'uva']
console.log(fruits[0])
```
### Exercício 8

**Descrição:**  
Crie um objeto person com nome e idade. Acesse cada propriedade.

**Código de Exemplo / Solução:**

```javascript
let person = {
   nome: 'John',
   idade: 21
}

console.log(`nome de pessoa é ${person.nome}`)
console.log(`idade de pessoa é ${person.idade}`)
```


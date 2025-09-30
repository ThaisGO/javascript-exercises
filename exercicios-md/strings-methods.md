# Matemática e Atribuições

### Exercício 1

**Descrição:**  
Use slice para extrair 'Java' de 'JavaScript'.

**Código de Exemplo / Solução:**

```javascript
let str = 'JavaScript'
   let extracted = str.slice(0,4)
   console.log(extracted)
```
### Exercício 2

**Descrição:**  
Use slice para extrair 'Script' do mesmo texto.

**Código de Exemplo / Solução:**

```javascript
let str = 'Javascript'
   let extracted = str.slice(4)
   console.log(extracted)
```

### Exercício 3

**Descrição:**  
Crie uma string 'Code and coffee'. Use split() para separar em palavras.

**Código de Exemplo / Solução:**

```javascript
let text = 'Code and coffee'
console.log(text.split(' '))
```

### Exercício 4

**Descrição:**  
Use split('o') para ver como a string fica dividida.

**Código de Exemplo / Solução:**

```javascript
let text = 'Code and coffee'
console.log(text.split('o'))

```

### Exercício 5

**Descrição:**  
Use split('', 2) para pegar só duas palavras.

**Código de Exemplo / Solução:**

```javascript
let code = 'CODE'
console.log(code.toLowerCase())
```

### Exercício 6

**Descrição:**  
Crie uma string com espaços antes e depois.

**Código de Exemplo / Solução:**

```javascript
let str = 'Hello world'
console.log(str.includes('world'))
// or
console.log(str.indexOf('world') !== -1)
```

### Exercício 7

**Descrição:**  
Pegue 'JavaScript is awesome' e conte quantas palavras existem (dica: split('')).

**Código de Exemplo / Solução:**

```javascript
let hey = 'Hello'
console.log(hey.indexOf('o'))
```

### Exercício 8

**Descrição:**  
Inverta uma string ('Hello' → 'olleH') usando split, reverse e join.

**Código de Exemplo / Solução:**

```javascript
let a = 'I have a dog'
console.log(a.replace('dog', 'cat'))

```
### Exercício 9

**Descrição:**  
Pegue 'banana' e conte quantas vezes a letra 'a' aparece (dica: split e length).

**Código de Exemplo / Solução:**

```javascript
let a = 'I have a dog'
console.log(a.replace('dog', 'cat'))
```

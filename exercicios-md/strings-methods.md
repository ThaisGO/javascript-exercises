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
let text = 'Code and coffee'
console.log(text.split(' ', 2))
```

### Exercício 6

**Descrição:**  
Crie uma string com espaços antes e depois.

**Código de Exemplo / Solução:**

```javascript
let str = '  Code and coffee  '
console.log(str.trim())
```

### Exercício 7

**Descrição:**  
Pegue 'JavaScript is awesome' e conte quantas palavras existem.

**Código de Exemplo / Solução:**

```javascript
let texto = 'JavaScript is awesome'
let qtd = text.split(' ').length
console.log(`existem ${qtd} palavras`)
```

### Exercício 8

**Descrição:**  
Inverta uma string ('Hello' → 'olleH').

**Código de Exemplo / Solução:**

```javascript
   let str = 'Hello'
   let newStr = str.split('').reverse().join('')
   console.log(newStr);
```
### Exercício 9

**Descrição:**  
Pegue 'banana' e conte quantas vezes a letra 'a' aparece.

**Código de Exemplo / Solução:**

```javascript
   let fruit = 'banana'
   let count = fruit.split('a')
   console.log(count.length - 1)
```

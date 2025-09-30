const categories = {
   variables_types: document.getElementById("variables-types"),
   operations_comparisons: document.getElementById("operations-comparisons"),
   math_assignments: document.getElementById("math_assignments"),
   strings: document.getElementById("strings"),
   string_methods: document.getElementById("string_methods"),
   challenges: document.getElementById("challenges"),
};

fetch('exercises.json')
   .then(res => res.json())
   .then(data => {
      Object.keys(categories).forEach(category => {
         const container = categories[category];

         data[category].forEach(exercise => {
            const div = document.createElement('div');
            div.innerHTML = `
               <h5>${exercise.title}</h5>
               <p>${exercise.description}</p>
               <pre><code class="language-javascript">${exercise.solution}</code></pre>
            `;
            container.appendChild(div)
         })
      })
      hljs.highlightAll()
   })

   // ex 1
   
   
   // ex 2
   

   // ex 5
let text = 'Code and coffee'
console.log(text.split(' ', 2))

// ex 6
let str = '  Code and coffee  '
console.log(str.trim())

// ex 7



const categories = {
   variables_types: document.getElementById("variables-types"),
   operations_comparisons: document.getElementById("operations-comparisons"),
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
               <pre><code class="language-javascript">${exercise.starterCode}</code></pre>
            `;
            container.appendChild(div)
         })
      })
   })

   const nome = 'Thais'
   const idade = 21
   console.log(`Seu nome é ${nome} e sua idade é ${idade}`)


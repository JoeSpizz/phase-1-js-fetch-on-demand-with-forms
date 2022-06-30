const init = () => {
  const inputForm = document.querySelector('form');
  inputForm.addEventListener('submit', (event)=> {
      event.preventDefault()
      const input = document.querySelector('input#searchByID');
      console.log(input.value);

      fetch(`http://localhost:3000/movies/${input.value}`)
      .then(res => res.json())
      .then(data => {
          const summary = document.querySelector(`section#movieDetails p`);
          const title = document.querySelector(`section#movieDetails h4`);
          title.innerText = data.title
          summary.innerText = data.summary
      })
 
  })
}

document.addEventListener('DOMContentLoaded', init);
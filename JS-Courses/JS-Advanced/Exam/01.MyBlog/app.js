function solve() {
   let pAuthor = document.querySelector('#creator');
   let pTitle = document.querySelector('#title');
   let pCategory = document.querySelector('#category');
   let content = document.querySelector('#content');
   let btn = document.querySelector('form > .create');


   let titleArr = []



   btn.addEventListener('click', (e) => {
      e.preventDefault();
      let article = document.createElement('article');
      article.innerHTML = `
         <h1>${pTitle.value}</h1>
         <p>Category:
            <strong>${pCategory.value}</strong>
         </p>
         <p>Creator:
            <strong>${pAuthor.value}</strong>
         </p>
         <p>
            ${content.value}
         </p>
         <div class="buttons">
            <button class="btn delete">Delete</button>
            <button class="btn archive">Archive</button>

         </div>
      `
      


      let section = document.querySelector('main > section');
      section.appendChild(article);

      let buttonsDel = document.querySelectorAll(' main > section > article > div > button.btn.delete');

      buttonsDel.forEach(btn => btn.addEventListener('click', (e) => {
         let articleNode = e.target.parentNode.parentNode;
         articleNode.remove();
      }))



      let ul = document.querySelector("body > div > div > aside > section.archive-section > ul");
      let buttonsArch = document.querySelectorAll(' button.btn.archive');

      //console.log(buttonsArch);




      buttonsArch.forEach(btn => btn.addEventListener('click', (e) => {

         let title = e.target.parentNode.parentNode.children[0].textContent
         if (!(titleArr.includes(title))) {
            titleArr.push(title)
            titleArr.sort();
            let li = document.createElement('li');
            li.textContent = title;
            ul.appendChild(li)


         }
         ul.innerHTML = ""; 
         for (let i = 0; i < titleArr.length; i++) {
           
            const element = titleArr[i];
            let li = document.createElement('li');
            li.textContent = element;
            ul.appendChild(li)
            
         }
         
         //console.log(titleArr);

         let articleNode = e.target.parentNode.parentNode;
         articleNode.remove();
      }))



      pAuthor.value = "";
      pCategory.value = "";
      pTitle.value = "";


   });

}

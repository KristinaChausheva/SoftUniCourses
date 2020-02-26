function solve(){
   let tbody  = document.getElementsByTagName('tbody')[0];
   tbody.addEventListener('click', (e)=> {
      //console.log(e.target.parentNode);
      //console.log(e.target.parentNode.parentNode);
      //console.log(e.target.parentNode.parentNode.children);
      
      let tr = e.target.parentNode;
      if (tr.hasAttribute('style')) {
         tr.removeAttribute('style');
         
      } else {
         for (let i = 0; i < e.target.parentNode.parentNode.children.length; i++) {
            let child = e.target.parentNode.parentNode.children[i]
            //console.log(child);
            
            if (child.hasAttribute('style')) {
               child.removeAttribute('style')
              
            }
         }
         
         tr.style.backgroundColor = '#413f5e';
      }
      
      
   })
}

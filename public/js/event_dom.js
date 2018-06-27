const select = (selector) => 
document.querySelector(selector);
const form = select('.dd-post');
const addeventBtn =select('.addeventBtn')
;
addeventBtn.addEventListener('click', function(event) {
  e.preventDefault();
  var data = {
    title: select('.title').value,
    description:select('.des').value,
     speaker :select('.speaker ').value,
     hall: select('.hall').value,
     startDate: select('.start-date').value,
     endDate:select('end-date').value,
     ImageUrl:select('imageurl').value
  }
    
      fetch('/events', {
        headers: {
          'content-type': 'application/json'
        },
        method: 'POST',
        body: data,
      }).then(function(res){
        return res.json();
      }).then(function(res){
        console.log(res);
      });
      
});

var btn_form= select("#myBtn");
        
        
console.log(btn_form)
btn_form.addEventListener("click", function (e) {

    
  
               

});

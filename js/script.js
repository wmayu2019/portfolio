
// $(document).ready(function(){
    const bars =document.querySelectorAll(".progress-bar");

    bars.forEach(function(bar){
        let percentage=bar.dataset.percent;
        let tooltip=bar.children[0];
        tooltip.innerText=percentage  ;
        bar.style.width=percentage ; 
        
    });
// })
// counter

let counters=document.querySelectorAll(".counter");
function runcounter(){
    counters.forEach(counter  => {
      counter.innerText=0;
      let target=+counter.dataset.count;
      let step =target/100;
    
          
      let countit =() =>{
          let displaynumber=+counter.innerText;
          if(displaynumber < target){  
            counter.innerText= Math.ceil(displaynumber+step);
            setTimeout( countit,1);
          
          }
          else{
              counter.innerText=target;
          }
      }
      countit();
    })
}
 


  let csection=document.querySelector(".counter-wrapper");
  let options={
      rootMargin:'0px 0px -200px 0px'
  }
  let done=0;
  const sectionobserver=new IntersectionObserver(function (interval){
             if(interval[0].isIntersecting && done!=1){
                 done=1;
                runcounter();
             }
  },options)

  sectionobserver.observe(csection);


//   img filter

var wrapper=document.querySelectorAll(".portfolio-wrapper");
//



let links=document.querySelectorAll('.tabs a');

links.forEach(link =>{
    link.addEventListener('click',function(e){
        e.preventDefault();

       
        links.forEach(link =>{
      link.classList.remove('active');
        })
        e.target.classList.add('active');
    })
})
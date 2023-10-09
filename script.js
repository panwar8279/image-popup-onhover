// document.getElementById("center").addEventListener("mousemove", function(details){
//     console.log(details.clientX, details.clientY);
// })

     
    // Throttling Function
    const throttleFunction=(func, delay)=>{
      let prev = 0; 
      return (...args) => {
        // Current called time of the function
        let now = new Date().getTime(); 
        if(now - prev> delay){ 
          prev = now;
          return func(...args);  
        }
      }
    }
   document.getElementById('center').addEventListener("mousemove", throttleFunction((details)=>{
    // Create div element
      let div=(document.createElement("div"));
      
    //   Add class name
    div.classList.add("imagediv");

      console.log(details.clientX)
      div.style.left = details.clientX +"px";
      div.style.top = details.clientY +"px";

    //   to create img element
      let img=document.createElement("img");
      img.setAttribute("src","/flower-purple-lical-blosso.jpg");
      div.appendChild(img);

      document.body.appendChild(div);
      gsap.to(img, {
        y: "0",
        ease: Power1,
        duration:0.6
      })
      gsap.to(img, {
        y: "100%",
        delay:0.6,
        ease: Power2,
      })
   
      setTimeout(function(){
        div.remove();
      },2000)
    }, 400));

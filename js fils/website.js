
// FIRST IMAGE ANINATION START

gsap.timeline({repeat:-1})

  .from('#mac2',{y:22,duration:0.8,opacity:0,ease: "back.out(5)"})
  .from('#mac1',{y:20,delay:0.2,duration:0.8,opacity:0,ease: "back.out(5)"},'<')
  .from('#mac3',{y:20,delay:0.2,duration:0.8,opacity:0,ease: "back.out(5)"},'<')
  .from('#mac4',{y:20,delay:0.2,duration:0.8,opacity:0,ease: "back.out(5)"},'<')
  .from('#logo-left',{delay:2,display:"flex"})


  .from('#tab1',{y:22,duration:0.8,opacity:0,ease: "back.out(5)"})
  .from('#tab2',{y:20,delay:0.2,duration:0.8,opacity:0,ease: "back.out(5)"},'<')
  .from('#tab3',{y:20,delay:0.2,duration:0.8,opacity:0,ease: "back.out(5)"},'<')
  .from('#tab4',{y:20,delay:0.2,duration:0.8,opacity:0,ease: "back.out(5)"},'<')
  .from('#logo-left2',{delay:2,display:"flex"})


// FIRST IMAGE ANINATION END

// IS IN VIEW PORT FUNCTON START

  
const Box = document.getElementById("box");
const Boxes = document.getElementById("boxes");
const My = document.getElementById("animation");
const circle = document.getElementById("amimate_circle");
const mobile = document.getElementById("mobile-inner");


function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

document.addEventListener('scroll', () =>  {
  const isVisible = isInViewport(circle);
  const Visible = isInViewport(My);
  const IsVisible = isInViewport(Box);
  const Have = isInViewport(Boxes);


  if(isVisible) {
      if (!circle.hasChildNodes()) {
          circle.insertAdjacentHTML("afterbegin", `
          <div class="animation-wrap" id="animation-wrap">
              <div class="animation" id="animation">
                  <div class="matrial" id="matrial">
                      <img src="/images/1.png" alt="">
                  </div>
              </div> 
          </div>
          `)
      }
  }

  if(Visible) {
      if (!My.hasChildNodes()) {
        My.insertAdjacentHTML("afterbegin",`
        <div class="first-circle">
          <div class="second-circle">
            <img src="/images/2.png" alt="">
          </div>
        </div>
      `)
     }
  }  

  if( IsVisible) {
    if (!Box.hasChildNodes()) {
      Box.insertAdjacentHTML("afterbegin",`
          <div class="box-wrap1">
          <div class="box">
            <i class="fas fa-bolt"></i>
            <H2> Question Bank</H2>
            <p>Thousands of questions for students practice and making paper creation process stress free via
              TestnTrack.</p>
          </div>
        </div>
        <div class="box-wrap2">
          <div class="box">
            <i class="fas fa-home"></i>
            <h2>Customized Tests</h2>
            <p>Automated customized tests are offered by TestnTrack based on previous performances of
              students.</p>
          </div>
        </div>
        <div class="box-wrap3">
          <div class="box">
            <i class="fas fa-bell"></i>
            <h2>Integrated Study Planner</h2>
            <p>Strategy tailored stitched to your needs for studying effectively.</p>
          </div>
        </div>
      </div>
      `
    )
   }
  }

  if(Have) {
    if (!Boxes.hasChildNodes()) {
      Boxes.insertAdjacentHTML("afterbegin",`
          <div class="box-wrap4">
          <div class="box">
            <i class="fas fa-cog"></i>
            <h2>Adaptive practice</h2>
            <p>AI-driven questions sets for improved output and performance.</p>
          </div>
        </div>
        <div class="box-wrap5">
          <div class="box">
            <i class="fas fa-lock"></i>
            <h2>AI-Based Evaluation</h2>
            <p>Smart analysis to know exactly where you are with the help of AI tools.</p>
          </div>
        </div>
        <div class="box-wrap6">
          <div class="box">
            <i class="fas fa-ad"></i>
            <h2>Demo</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. veritatis doloribus
              dolore minus.</p>
          </div>
        </div>
    `)
   }
 }  
 
},{
    passive: true
});

// IS IN VIEW PORT FUNCTON END
// featurs animation

gsap.timeline()


  .from('#image1',{x:200,duration:1.5,opacity:0})
  .from('#image1',{delay:2,x:-0,duration:1.5,opacity:1})
  .from('#changer1',{display:"flex"})

gsap.timeline({repeat:-1,delay:5})

  .from('#image2',{x:-100,duration:2,opacity:0})
  .from('#paragraph2',{x:100,duration:2,opacity:0},'<')
  .from('#image2',{x:0,delay:6,duration:1.5,opacity:1})
  .from('#paragraph2',{x:-0,duration:1.5,opacity:1},'<')
  .from('#changer2',{display:"flex"})

  .from('#image3',{x:100,duration:2,opacity:0})
  .from('#paragraph3',{x:-100,duration:2,opacity:0},'<')
  .from('#image3',{x:-0,delay:6,duration:1.5,opacity:1})
  .from('#paragraph3',{x:0,duration:1.5,opacity:1},'<')
  .from('#changer3',{display:"flex"})

  .from('#image4',{x:-100,duration:2,opacity:0})
  .from('#paragraph4',{x:100,duration:2,opacity:0},'<')
  .from('#image4',{x:0,delay:6,duration:1.5,opacity:1})
  .from('#paragraph4',{x:-0,duration:1.5,opacity:1},'<')
  .from('#changer4',{display:"flex"})

  .from('#image5',{x:100,duration:2,opacity:0})
  .from('#paragraph5',{x:-100,duration:2,opacity:0},'<')
  .from('#image5',{x:-0,delay:6,duration:1.5,opacity:1})
  .from('#paragraph5',{x:0,duration:1.5,opacity:1},'<')
  .from('#changer5',{display:"flex"})

  .from('#image6',{x:-100,duration:2,opacity:0})
  .from('#paragraph6',{x:100,duration:2,opacity:0},'<')
  .from('#image6',{x:0,delay:6,duration:1.5,opacity:1})
  .from('#paragraph6',{x:-0,duration:1.5,opacity:1},'<')
  .from('#changer6',{display:"flex"})


// node mailer start
// const contactform = document.getElementById('form')

// let sender = document.getElementById('name');
// let email = document.getElementById('Email');
// let phone = document.getElementById('phone');
// let Profession = document.getElementById('select');
// let message = document.getElementById('message');


// contactform.addEventListener('submit', (e)=>{
//   e.preventDefault(); 

//   let formData = {
//     sender :sender.value,
//     email :email.value,
//     phone :phone.value,
//     Profession :Profession.value,
//     message :message.value
//   }

//   let xhr = new XMLHttpRequest();
//   xhr.open('GET' , 'POST','/');
//   xhr.setRequestHeader('content-type','application/json');
//   xhr.onload = function() {
//     console.log(xhr.responseText);
//     if(xhr.responseText == 'success'){
//       alert('Query sent successfully');
//       sender.value = '';
//       email.value = '';
//       phone.value = '';
//       Profession.value = '';
//       message.value = '';
//     }else{
//       alert('Something Went Wrong')
//     }
//   }

//   xhr.send(JSON.stringify(formData));
    
// });
// node mailer end

// PERCENTAGE SCROLL TRIGGER

// FIRST 80% CIRCLE
let section1 = document.getElementById("section1");
gsap.registerPlugin(ScrollTrigger)

gsap.timeline({
  scrollTrigger:{
    trigger:section1,
    markers: "true",

  }
})
.from("#section1",{y :300,opacity:1, duration:1 });

// FIRST 70% CIRCLE

let section2 = document.getElementById("section2");
gsap.registerPlugin(ScrollTrigger)


gsap.timeline({
  scrollTrigger:{
    trigger:section2,
    markers: "true",

  }
})
.from("#section2",{y :300,opacity:1, duration:1, delay:0.5 });

// FIRST 65% CIRCLE

let section3 = document.getElementById("section3");
gsap.registerPlugin(ScrollTrigger)


gsap.timeline({
  scrollTrigger:{
    trigger:section3,
    toggleActions:"restart none none none",
    markers:"true",

  }
})

.from("#section3",{y :300,opacity:1, duration:1, delay:1 });

// PERCENTAGE SCROLL TRIGGER
             
                
// percentage animation
let num1 = document.getElementById("percentage-number1");
let counter1 = 0;

setInterval(()=>{
  
  if( counter1 == 80){
    clearInterval();
  }else{
    counter1 += 1;
    num1.innerHTML = counter1 + "%";
  }
  
},62);


let num2 = document.getElementById("percentage-number2");
let counter2 = 0;

setInterval(()=>{
  
  if( counter2 == 70){
    clearInterval();
  }else{
    counter2 += 1;
    num2.innerHTML = counter2 + "%";
  }
  
},60);


let num3 = document.getElementById("percentage-number3");
let counter3 = 0;

setInterval(()=>{

  if( counter3 == 65){
    clearInterval();
  }else{
    counter3 += 1;
    num3.innerHTML = counter3 + "%";
  }

},76);


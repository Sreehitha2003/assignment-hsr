import React from 'react';
import "./Home.css";
import {motion} from "framer-motion";
import {CgProfile} from "react-icons/cg";
import {FaGithub,FaLinkedinIn,FaPhone,FaEnvelope,FaCheckCircle,FaExclamationCircle} from "react-icons/fa";
import {MdKeyboardDoubleArrowUp} from "react-icons/md";

const buttonvariants = {
    hover:{
      scale:1.1, 
      textShadow : "0px 0px 8px rgb(255,255,255)",
      boxShadow : "0px 0px 8px rgb(255,255,255)",
      transition : {
        duration : 0.3,
        yoyo: 10
      }
    }
  }

const Home = () =>{
    

const form = document.getElementById('form');
const DropyourMessage = document.getElementById('DropyourMessage');
const email = document.getElementById('email');
const fullname = document.getElementById('fullname');
const Subject = document.getElementById('Subject');




function checkInputs() {
	
    const fullnameValue = fullname.value.trim();
	const emailValue = email.value.trim();
	const SsubjectValue = Subject.value.trim();
	const DropyourMessageValue =DropyourMessage.value.trim();
    
	
    if(fullnameValue === '') {
		setErrorFor(fullname, 'Name cannot be blank');
		return false;
	} else {
		setSuccessFor(fullname);
	}

	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
		return false;
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
		return false;
	} else {
		setSuccessFor(email);
	}
	alert("Form submitted succesfully");
    return true;
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

const text="It is a premier provider of IT services and business consultancy for companies of all sizes! ";
let index=0;

function autowrite(){
    document.querySelector('.underText').innerHTML=text.slice(0,index);
    ++index;

    if(index>text.length){
        index=0;
    }
}

setInterval(autowrite,100);

    return(
        
        <>
        <div  id = "home">
        <nav class="navbar" >
         <div class="brand-title" >
           <span class="logo"><img alt="" src='https://i.pinimg.com/736x/0d/cf/b5/0dcfb548989afdf22afff75e2a46a508.jpg' width="80px" height ="60px"/></span> 
         </div>
          <div class = "search">
             <input type="text" placeholder="Search.."/>
          </div>
          <div class="dropdown">
              <button class="dropbtn ">More...</button>
           <div class="dropdown-content">
        <ul>
           <li><a href='#about'><div class="h2">About</div></a></li>
           <li><a href='#contact'><div class="h2">Contact</div></a></li>
        </ul>
       </div>
       </div>
    </nav>
    <header>
    <h2>HSR Hi-Tech solutions welcomes you.!!</h2>
    <p class="underText"></p>
    <motion.button class="explore" variants={buttonvariants}
        whileHover="hover">Get Started..</motion.button>
    </header>
    </div>
    <div id='about' class="about">
        <header class="abt">
            <h1>Together we define.</h1>
        </header>
        <h1 class="head">Our Team</h1>
        <div class="members">
        <div class="mem">
           <p>Krish</p>
           <img alt="" src="https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg" width="80px" height="80px"/>
           <p>HR Manager</p>
        </div>
        <div class="mem">
            <p>Shailu</p>
            <img alt="" src="https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg" width="80px" height="80px"/>
            <p>Organizing Team Head</p>
        </div>
        <div class="mem">
           <p>Robin</p>
           <img alt="" src="https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg" width="80px" height="80px"/>
           <p>Chief Marketing Officer</p>
        </div>
        <div class="mem">
           <p>Mike</p>
           <img alt="" src="https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg" width="80px" height="80px"/>
           <p> Product Manager</p>
        </div>
        </div>
        <div id="contact" class="contact">
        <h1 class="head">Contact Info</h1>
        <center>
            <div class="container">
    <form id="form" class="form" method="POST">
      <div class="userdet">
      <div class="form-control">
          <label for="username" class="det">Your name</label>
          <input type="text" placeholder="Your name" id="fullname" />
      </div>
      
      
      <div class="form-control">
          <label for="username" class="det">Email</label>
          <input type="email" placeholder="a@florin-pop.com" id="email" />
      </div>
      
      <div class="form-control">
        <label for="username" class="det">Subject</label>
        <input type="text" placeholder="Subject" id="Subject" />
       
    </div>
      

    <div class="form-control">
      <label for="username" class="det">Drop your Message</label>
      <input type="text" placeholder="Drop your Message" id="DropyourMessage" />
      
  </div>
      
      <div class="button" onSubmit={checkInputs}>
          <input type="submit" value="Submit"/>
      </div>
      </div>
  </form>
  </div>
</center>
</div>
        <footer>
         <ul>
            <li>
                <a href="https://www.linkedin.com/in/sreehitha-karukuri-3a484121a/"><FaLinkedinIn/></a>
            </li>
            <li>
                <a href="https://github.com/Sreehitha2003"><FaGithub/></a>
            </li>
            <li>
                <a href="+91 6303320450"><FaPhone/></a>
            </li>
           <li>
             <a href="https://mail.google.com/sreehitha.karukuri@gmail.com"><FaEnvelope/></a>
            </li>
       </ul>
       <a href='#home'><div class="up"><MdKeyboardDoubleArrowUp/></div></a>
       <div class="credits">© 2023 Sreehitha | Some rights Reserved.</div>
    </footer>
    </div>
    </>
    )
}

export default Home;
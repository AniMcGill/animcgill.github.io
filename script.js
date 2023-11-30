async function sendContact(ev) {
    ev.preventDefault();
    const senderEmail = document
        .getElementById('id_email').value || "Anon";
    const subject_line = document
        .getElementById('id_subject').value || "Anon";
    const discord_id = document
        .getElementById('id_discordname').value || "Anon";
    const senderMessage = document
        .getElementById('id_message').value;





    const webhookBody = {
        embeds: [{
            title: 'Contact Form Submitted',
            fields: [
                { name: 'Discord', value: discord_id },
                { name: 'Sender', value: senderEmail },
                { name: 'subject', value: subject_line },
                { name: 'Message', value: senderMessage }
            ]
        }],
    };

    const webhookUrl = atob('aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvMTA2NjM4ODkzMzE3MDE3MTkyNC9vR2JqeWVnTFU0VW1nRF9VbHkybEJrV2tDbGdFV1hJUldXek9KclhQaVJVLVRzclF1SVVRWXpUSy0xRGNkNEJ2UWx3Uw==');

    const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(webhookBody),
    });

    if (response.ok) {
        alert('I have received your message!');
    } else {
        alert('There was an error! Try again later!');
    }
}



function myFunction() {
    var x = document.getElementById("nav");
    if (x.className === "") {
        x.className += " nav-d";
    } else {
        x.className = "";
    }


    var x = document.getElementById("sticky");
    if (x.className === "sticky") {
        x.className += " stickyd";
    } else {
        x.className = "sticky";
    }

    var x = document.getElementById("list-inline");
    if (x.className === "list-inline") {
        x.className += " list-inline-d";
    } else {
        x.className = "list-inline";
    }

    var x = document.getElementsByClassName("stickA");


    for (var i = 0; i < x.length; i++) {

        if (x[i].className === "stickA") {
            x[i].className += " stickA-d";
        } else {
            x[i].className = "stickA";
        }
    }


    var x = document.getElementsByClassName("medium-box");
    for (var i = 0; i < x.length; i++) {
        if (x[i].className === "medium-box") {
            x[i].className += " medium-box-d";
        } else {
            x[i].className = "medium-box";
        }
    }

}


//Header//

class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
 
 <div class="image-container">
    <img class="maid" src="maid_logo.png" alt="maid header">
 </div>

      <header id="sticky" class="sticky"> 

<div class="topnav" id="myTopnav">
       
<button type="button" class="menu-toggle" onclick="myFunction()" >
           <i class="fa fa-bars"></i> 
    Menu 
</button>
   
    </div>
    
  <nav id="nav">
    <ul id="list-inline" class="list-inline"> 
      <li class="medium-box"><a class="stickA" href="index.html#sticky">Home Page</a></li>
      <li class="medium-box"><a class="stickA" href="art.html#sticky">Art</a></li>
      <li class="medium-box"><a class="stickA" href="newsletter.html#sticky">Newsletters</a></li>
      <li class="medium-box"><a class="stickA" href="events.html#sticky">Events</a></li>
      <li class="medium-box"><a class="stickA" href="contact.html#sticky">Contact Us</a></li>
      <li class="medium-box"><a class="stickA" href="faq.html#sticky">FAQ</a></li>
      <li class="medium-box"><a class="stickA" href="execs.html#sticky">Our Execs</a></li>
      <li class="medium-box"><a class="stickA" href="sponsors.html#sticky">Sponsors</a></li>	  
    </ul>
  </nav>
    
</div> 

</header>
       `
    }
}

customElements.define('my-header', MyHeader)

//Footer//

class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
      
  <footer>
 
    <div class="first-box">
      <div class="smicons">
        <a href="https://discord.gg/gSAz2GC" target="_blank">
        <img class="discord" src="Discord_logo.png" alt="discord logo"> 
        </a>
      </div>

      <div class="smicons">
        <a href="https://www.facebook.com/McGillAnime/" target="_blank">
        <img class="facebook" src="facebook_logo_3.png" alt="facebook logo">
        </a>
      </div>

      <div class="smicons">
        <a href="https://www.instagram.com/mcgillanime/" target="_blank">
        <img class="instagram" src="instagram_logo.png" alt="instagram logo">
        </a>
      </div>

      <div class="smicons">
        <a href="https://linktr.ee/mcgillanimeclub">
              <img class="linktree" src="linktree_logo.png" alt="linktree logo">
        </a>
      </div>
      

    </div>
<hr>
    <!--
<div class="second-box">
    <div class="small-box">
      <p>
       <a href=#> Top page</a>
      </p>
    </div>
</div>
      -->

<div class= "third-box">
   <p class="made-with-love"> Made with 🤎 by Christina and Kevin, advised by Abu, and art by Song. <a href="https://github.com/AniMcGill/animcgill.github.io
"> GitHub Repo</a>  </p>
</div>
    
  </footer>
       `
    }
}

customElements.define('my-footer', MyFooter)

function autoScrollTitle() {
    document.getElementById('title').scrollIntoView(false);
    /** false means that it will scroll to the bottom of the element instead of top */
}

function autoScroll() {
    window.setTimeout(function() { autoScrollTitle(); }, 2000);
}

autoScroll();

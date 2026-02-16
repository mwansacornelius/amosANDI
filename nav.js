const navItems=[
    {name:"Home",image:"home.png",href:"index.html"},
    {name:"Contacts",image:"contact.png",href:"contact.html"},
  {name:"Services",image:"services.png",href:"services.html"},
  {name:"Learn",image:"learn.png",href:"learn.html"},
  {name:"careers",image:"career.png",href:"careers.html"},
  {name:"About",image:"about.png",href:"about.html"}
]

function toDisplay (element){
  let navBar=`
  <div id="nav">
         <div class="demo">
            <button id="open">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="30"
                    fill="currentColor"
                    class="bi bi-list"
                    viewBox="0 0 16 16"
                >
                    <path
                        fill-rule="evenodd"
                        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                    />
                </svg>
            </button>
        </div>
            <div>
                <img class="logo" src="newIcon.jpg" />
            </div>
    </div>
    
    <div>
            <dialog id="dial" class="dial">
                <img id="close" src="cancel.png" />
            </dialog>
    </div>
  
  `
  
  element.innerHTML=navBar;
  
  
  /*CREATING  ELEMENTS IN THE DIALOG*/
  
  function createElement(){
      let dialog=document.getElementById("dial");
      navItems.forEach((item)=>{
        dialog.innerHTML+=`
        <a class="menus" href="${item.href}">
        <p>${item.name}</p>
         <img class="images" src="${item.image}"/>
        </a>
    
    `

  })}
  
  createElement()
  /*GETTING ELEMENTS*/
  const dial = document.getElementById("dial");
const closeBtn = document.getElementById("close");
const openBtn = document.getElementById("open");

/*Functions*/

openBtn.addEventListener("click", () => {
    openBtn.classList.add("remove")
    dial.classList.add("menu");
    dial.showModal();
});

closeBtn.addEventListener("click", () => {
    openBtn.classList.remove("remove")
    dial.classList.remove("menu");
    dial.close();
});

}

export default toDisplay;
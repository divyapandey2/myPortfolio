function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}


const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/p1.jpg");
  } 
    if (mySrc === "images/firefox-icon.png") {
        myImage.setAttribute("src", "images/p2.jpg");
      }
      if (mySrc === "images/firefox-icon.png") {
        myImage.setAttribute("src", "images/p3.jpg");
      }
      if (mySrc === "images/firefox-icon.png") {
        myImage.setAttribute("src", "images/p4.jpg");
      }
      if (mySrc === "images/firefox-icon.png") {
        myImage.setAttribute("src", "images/firefox2.png");
      }
};             
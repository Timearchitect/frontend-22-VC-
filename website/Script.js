//downloadURI();
function downloadURI() {
    var link = document.createElement("a"); //skapar anchor tagg
    link.download = "image.png"; //<-- download="custom-filename.jpg"
    link.target = "_blank";
    link.href =
        "https://gritacademy.se/wp-content/uploads/2021/05/Grit-Academy-logo.png"; //<--
    document.body.appendChild(link);
    link.click(); //klickar anchor tagg
    document.body.removeChild(link);
    delete link; //deletar anchor tagg
}

saveImageAs1();

function saveImageAs1() {
    document.body.innerHTML += `<a href="" download="https://upload.wikimedia.org/wikipedia/commons/7/78/Image.jpg">
    <img src="https://gritacademy.se/wp-content/uploads/2021/05/Grit-Academy-logo.png" alt="W3Schools" width="104" height="142">
  </a>`;
}


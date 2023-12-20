

function handelClick(event) {
    let allElements=document.getElementsByClassName('selected')
   
    const clickedElement = event.currentTarget.parentNode
    if(clickedElement){

        Array.from(allElements).forEach(function(element) {
            console.log(element)
            element.classList.remove("selected");
            element.children[1].style.display="none"
        });
    }

    clickedElement.classList.add('selected');
    // console.log(clickedElement.children[1].style.display="flex")
  }





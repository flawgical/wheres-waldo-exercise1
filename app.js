/* TODO modify this code */
'use strict';

function findWaldo(find) {
    var find = obj.children;
    for (var i=0; i<find.length; i++){
      if (find[i].textContent === "Waldo")
        find[i].style.display = "unset";

      findWaldo(find[i])
    }
    }
    // console.log(find)
    // var rootNode = document.body.childNodes;


    // console.log(rootNode);
}
var rootNode = document.body.childNodes;
console.log(findWaldo(rootNode));

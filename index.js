
function getFirstSelector(string) {
  const firstElement = document.querySelector(`${string}`)
  return firstElement;
}

function nestedTarget() {
  const element = getFirstSelector('#nested .target');
  return element;
}
function deepestChild() {
  // const deepest = document.getElementById('grand-node').innerText
  // const deepest = document.querySelector('#grand-node div div div div')
  const deepest = document.querySelector('#grand-node div div div').lastElementChild
  return deepest;
}


// function increaseRankBy(n) {
//   const ranksList = document.querySelectorAll('.ranked-list');
//   let list = ranksList.forEach(function (rank) {
//     rank.innerHTML = parseInt(rank.innerHTML) + n;
//   })
// }
function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list')
   for (let i = 0, lists = rankedLists.length; i < lists; i++) {
    let rankedChildren = rankedLists[i].children
     for (let j = 0, liChild = rankedChildren.length; j < liChild; j++) {
      rankedChildren[j].innerHTML = parseInt(rankedChildren[j].innerHTML) + n
    }
  }
}

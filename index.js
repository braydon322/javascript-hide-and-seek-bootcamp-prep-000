function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.getElementById("nested")
}

function increaseRankBy(n){
const rankedList = document.getElementById('app').querySelectorAll('ul.ranked-list li')

for (let i = 0; i < rankedList.length; i++) {
  rankedList[i].innerHTML = (parseInt(rankedList[i].innerHTML) + n).toString()
}

}

function deepestChild(){
  const deepNest = document.querySelector('#grand-node div div div div')
  return deepNest

}

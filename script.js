const range = document.getElementById('range');
const changeNumOfEnemies = () => {
  const num = parseInt(range.value);
  const numOfEnemies = document.getElementById('numOfEnemies');
  numOfEnemies.textContent = num;
}

const difficulty = document.getElementById('difficulty');
const difficultyInfo = document.getElementById('difficultyInfo');
const changeDifficulty = (diff) => {

  switch(diff) {
    case 'easy':
      difficulty.textContent = '休闲';
      difficulty.style.color = '#67c23a';
      difficultyInfo.textContent = '想来试炼场度假？';
      break;
    case 'medium':
      difficulty.textContent = '谨慎';
      difficulty.style.color = '#e6a23c';
      difficultyInfo.textContent = '谨慎！再谨慎！！';
      break;
    case 'hard':
      difficulty.textContent = '地狱';
      difficulty.style.color = '#f56c6c';
      difficultyInfo.textContent = '已启动自毁倒计时……';
      break;
  }
}

const clickPve = () => {
  console.log('PVE');
}
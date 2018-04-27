
document.getElementById("sizePicker").addEventListener("submit", makeGrid);

function makeGrid(grid) {
  let canvas = document.querySelector('#pixelCanvas');
  while (canvas.firstChild) {
    canvas.removeChild(canvas.firstChild);
  }
  let height = document.querySelector('#inputHeight').value;
  let width = document.querySelector('#inputWeight').value;

  for (let i = 0; i <= height; i++) {
    const row = document.createElement("tr");
    canvas.appendChild(row);
    for (let j = 0; j <= width; j++) {
      let tb_parent = document.getElementsByTagName("tr")[document.getElementsByTagName("tr").length - 1];
      const col = document.createElement("td");
      tb_parent.appendChild(col);
    }
  }
  grid.preventDefault();
  console.log(document.querySelector('#pixelCanvas'));
}

document.querySelector('#pixelCanvas').addEventListener('click', function(evt) {
  let paint = document.querySelector("#colorPicker").value;
  if (evt.target.nodeName === 'TD') {
    back_color = evt.target.style.backgroundColor;
    evt.target.style.backgroundColor = (back_color == '') ? paint : '';
  }
})

var lineBar = new ProgressBar.Line("#line-container", {
  strokeWidth: 6,
  trailWidth: 0.5,
  from: { color: "#0487cf" },
  to: { color: "#0487cf" },
  trailColor: "#cfd2d1",
  
  text: {
    value: '0',
    className: 'progress-text',
    style: {
      color: 'black',
      padding: 0,
      margin: 0,
      transform: null
    }
  },
  step: (state, shape) => {
    shape.path.setAttribute("stroke", state.color);
    shape.setText('$14');
    
    if (state == 100) {
      hideInfoBlock();
    }
  }
});
 
lineBar.animate(1, {
  duration: 4000
});

function hideInfoBlock() {
  document.querySelector('.infoBlock').style.display = 'none';
  document.querySelector('.infoBlock').style.visibility = 'hidden';
}
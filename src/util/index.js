const detectMouseWheelDirection = (e) => {
  var delta = null;
  var direction = false;

  if (!e) e = window.event;

  if (e.wheelDelta) delta = e.wheelDelta / 60;
  else if (e.detail) delta = -e.detail / 2;
  
  if (delta !== null) direction = delta > 0 ? 'up' : 'down';

  return direction;
}

export {
  detectMouseWheelDirection,
};

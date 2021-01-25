export function collision(r1, r2) {
  if (
    r1.x + r1.w > r2.x &&
    r1.x < r2.x + r2.w &&
    r2.y + r2.h > r1.y &&
    r2.y < r1.y + r1.h
  ) {
    return true;
  } else {
    return false;
  }
}

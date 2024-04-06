export function getRandomInt(max: number, min: number) {
  // 0以上max未満の値を返す
  return Math.floor(Math.random() * (max - min) + min);
}


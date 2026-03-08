// --------- Soal 1 ---------
const triangle = (num) => {
  if (!Number.isInteger(num) || num < 1) return "Parameter harus bertipe data nomor dan harus nomor positif"

  return [...Array(num).keys()]
    .map(
      (_, i) => [...Array(i+1)]
        .map((_, j) => j+1).join('')
    )
    .join('\n')
}

console.log('----- Soal Nomor 1 -----');
console.log(triangle(5))

// --------- Soal 2 ---------
const buatRentang = (start, end) => {
  if (!Number.isInteger(start) || !Number.isInteger(end) || start > end) return "Parameter harus berurutan dan bertipe nomor"

  let length = end - start + 1
  return [...Array(length)].map((_, i) => start + i).join(', ')
}

console.log('\n----- Soal Nomor 2 -----');
console.log(buatRentang(5,10));

// --------- Soal 3 ---------
const processNumbers = (arr) => {
  if (!Array.isArray(arr) || !arr.every(Number.isInteger)) return "Parameter harus bertipe array dan berisi angka"

  const checkNumbers = arr.filter(n => n % 2 !== 0)
  return checkNumbers.reduce((acc, current) => acc * current, 1)
}

console.log('\n----- Soal Nomor 3 -----');
console.log(processNumbers([1,2,3,4,5]));
console.log(processNumbers([2,4,6,8]));

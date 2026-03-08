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


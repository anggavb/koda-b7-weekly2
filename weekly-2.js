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

// --------- Soal 4 ---------
// Fungsi fetchData mengembalikan Promise
// Jika status true -> resolve setelah 3 detik
// Jika status false -> langsung reject
const fetchData = (status) => {
  return new Promise((resolve, reject) => {
    if (status) {
      setTimeout(() => {
        resolve("Data berhasil diambil");
      }, 3000);
    } else {
      reject("Gagal mengambil data");
    }
  });
};

// 1. Menggunakan then-catch
fetchData(true)
  .then((result) => { // then() digunakan untuk menangani Promise yang resolve (berhasil)
    console.log('\n----- Soal Nomor 4 -----');
    console.log("SUKSES:", result, '(then-catch)');
  })
  .catch((error) => { // catch() digunakan untuk menangani Promise yang reject (gagal)
    console.log("ERROR:", error, '(then-catch)');
  });

// 2. Menggunakan async-await
const getData = async () => { // async membuat fungsi selalu mengembalikan Promise
  try { // try-catch digunakan untuk menangani proses (pada try) dan error (pada catch) dari await, cara ini umum digunakan dan bukan fitur bawaan dari async-await
    const result = await fetchData(true); // await menghentikan eksekusi sementara sampai Promise selesai (resolve/reject)
    console.log("SUKSES:", result, '(async-await)');
  } catch (error) {
    console.log("ERROR:", error, '(async-await)');
  }
};

getData();

// --------- Soal 5 ---------
const getDataFromServer = (status, callback) => {
  if (status) {
    setTimeout(() => {
      const products = [
        'Product 1',
        'Product 2',
        'Product 3'
      ]
      callback(products, null)
    }, 3000)
  } else {
    const err = new Error('Failed to fetch data')
    callback(null, err)
  }
}

// callback function
const processData = (data, err) => {
  try {
    if (err) throw err

    console.log('\n----- Soal Nomor 5 -----');
    console.log("Data received:", data)
  } catch (error) {
    console.log('\n----- Soal Nomor 5 -----');
    console.error("Error:", error.message)
  }
}

getDataFromServer(true, processData)
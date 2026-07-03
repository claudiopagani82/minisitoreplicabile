import { writeFile, mkdir } from 'fs/promises'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const outDir = join(__dirname, '../public/images')
const base = 'https://domustua.my.canva.site/brochure-via-cavour-37-tradate/_assets/media/'

// All JPG photos found in Canva site scripts + key PNGs (logo, phone mockup)
const files = [
  // JPG photos (property, maps, documents)
  'b9ddea8888c4646437e59abbeae7b5c7.jpg',
  'ed442926865ddc73b7a776634595ec2d.jpg',
  'c3fb4df36d948539b3205de729268f03.jpg',
  '18c9fbd494da5b53b10e44f903aff4bd.jpg',
  '73c07b9801c34c8fb7c74ccd350fb953.jpg',
  '8f219e4c9722201e922f80b433cf2857.jpg',
  'c25176a0978c920212a50b0f663b3c7a.jpg',
  'b0d85a11773acc96d2c75ade0811e8af.jpg',
  'f5bc87ee1064c43e8baf7316028df04f.jpg',
  'f41851cef3aa3ac794ca544b6ddb490c.jpg',
  '5f4f75cfa1dd4c54d7e08fa03c394b97.jpg',
  'c4c1c358cef57227dfd4440e680de6d9.jpg',
  'b64a920bdf572d7c7454dbc86480a7d1.jpg',
  '1c822ac222a5faed196d8c7f0d45eb55.jpg',
  'e8edc407497635202ff62c5c9521a52e.jpg',
  '087ff81d4997736a475c28c155fe7e20.jpg',
  '473bca324fc3b59c1c9bc478b28bb749.jpg',
  '69e6cf34e7f072117148ab1c415c76fe.jpg',
  '36ba0117307c1f5c7433ebc2ac5aa75c.jpg',
  'cba4ada712549e114f4d5cd8def6c75d.jpg',
  '054c0da46202ff1dfbfbc31e1ed3a3c9.jpg',
  'a77839aec7418449b02884991f43e244.jpg',
  'cba443dc0ee31925490f53351b4c99f4.jpg',
  '365496a7b4fe1dd53641c671773d7013.jpg',
  '6fe4626cdc6db49391d8305d02d8e9cc.jpg',
  '49b1a1945f2d1c463783526e6fbe2e07.jpg',
  '008f81be7b2c0261de0644d6ece7a173.jpg',
  // Key PNGs
  '5e28eee0ca086b51151fe8bb2c79b820.png',  // phone mockup frame
  '22639e828439154297d6622ecd942558.png',  // DomusTua logo or key graphic
  'cb6faae46f47b34663b9adb98bb7c25c.png',  // icon
  'e846897c864c76dcba3fffb7cc463a83.png',  // icon
  // From earlier session (living room BG)
  '2b08ce0b1046839f9e5c349afea5dda5.jpg',
  '8f6569b87d7feaf4599adc31458d9094.jpg',
]

async function download(filename) {
  const url = base + filename
  try {
    const res = await fetch(url)
    if (!res.ok) {
      console.log(`SKIP ${filename} (${res.status})`)
      return
    }
    const buf = await res.arrayBuffer()
    await writeFile(join(outDir, filename), Buffer.from(buf))
    console.log(`OK   ${filename} (${Math.round(buf.byteLength / 1024)}KB)`)
  } catch (e) {
    console.log(`ERR  ${filename}: ${e.message}`)
  }
}

await mkdir(outDir, { recursive: true })

// 4 concurrent downloads
const BATCH = 4
for (let i = 0; i < files.length; i += BATCH) {
  await Promise.all(files.slice(i, i + BATCH).map(download))
}

console.log('\nDone.')

import { rename, readFileSync, writeFileSync } from 'fs'

const currPath = './public/_app'
const newPath = './public/app'

rename(currPath, newPath, function(err) {
  if (err) {
    console.log(err)
  } else {
    console.log('Successfully renamed the directory.')
  }
})


try {
  const indexData = readFileSync('./public/index.html', 'utf8');
  let result = indexData
  while (result.includes('_app')) {
      result = result.replace('_app', 'app')
  }
  writeFileSync('./public/index.html', result);
} catch (err) {
  console.error(err);
}

fetch('hellos.xlsx')
  .then(dt => {
    console.dir(dt);
    return dt.text();
  })
  .then(bb => {
    console.log(bb)
    return bb;
  })
  .then(buffer => {
    // const arrayB = new Uint8Array(buffer);
    showData(buffer); // it's a Uint8Array 
  })
  .catch(err => console.log(err));

function showData(buffer) {
  const collection = XLSX.read(buffer, {
    type: 'string'
  });

  const sheetName = collection.SheetNames[0];
  const sheet = collection.Sheets[sheetName];
  const jsonData = XLSX.utils.sheet_to_json(sheet, {header:1});
  console.log(jsonData, sheetName, collection)
  document.body.innerHTML = jsonData;

  console.log(collection);
}
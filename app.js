fetch('./names.xlsx')
    .then(d => d.arrayBuffer())
    .then(d => readData(d))
    .catch(e => console.log(e))

function readData(d) {
    const collection = XLSX.read(d, { type: "array" });
    const sheet = collection.Sheets[collection.SheetNames[0]];
    const html = XLSX.utils.sheet_to_html(sheet);
    
    document.body.innerHTML = html;
    
    const table = document.querySelector('table');
    table.setAttribute('border', 3);
}

fetch('https://freegeoip.app/json/')
    .then(d => d.json())
    .then(d => console.log(d))
    .catch(e => {
        console.log('error', e)
    })




import uniqid from 'uniqid';

const data = [];

for (let i = 0; i < 10; i++) {
  data.push({
    id: uniqid(),
    macaddress: 'Sample Macaddress ' + i,
    content: '00:1B:44:11:3A:B7' + i + i,
    selected: false,
    editable: false
  });
}

export default data;




function createFrame(names) {
  let order = names.sort((name1,name2) => name2.length - name1.length);
  let largo = order[0];

  return "*".repeat(largo.length+2) + names[0]  ;
}

console.log(createFrame(['midu', 'madeval', 'educalvolpz']));
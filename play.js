const fetchData = () => {
  const promsie = new Promise ((resolve, reject) => {
    setTimeout (() => {
      resolve ('done');
    }, 1500);
  });
  return promsie;
};

setTimeout (() => {
  console.log ('timer is done');
  fetchData ()
    .then (text => {
      console.log (text);
      return fetchData ();
    })
    .then (text2 => {
      console.log (text2);
    });
}, 2000); //asynchronus cause of the time delay

console.log ('Hello');
console.log ('Hi');
//these are synchronus, no time delay

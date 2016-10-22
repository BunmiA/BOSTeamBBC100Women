function getVal(){
  console.log('hello');
  var val = $('.description:checked').val();
  var fname = $('#fname').val();
  createPost(fname, val);

}

function createPost(fname, attr){
  var attrList = women[attr]
  var randomIndex = genRandomNumber(attrList.length);
  console.log(randomIndex);
  var matchedwoman = attrList[randomIndex];
  console.log(matchedwoman.img);


  //console.log(matchedwoman.img);
  // var post = {
  //   href: 'http://www.bbc.co.uk/programmes/p01k3j50' ,
  //     caption: 'hellloooooo whats up',
  //       picture: matchedwoman.img,
  //       title: matchedwoman.name,
  //       description: 'write an interesting description',
  //       caption: 'i am a caption',
  //       quote: 'write an interesting quote',
  //       hashtag: matchedwoman.hashtag
  // }

  //console.log(post);


}

function genRandomNumber(maxIndex){
  return Math.floor((Math.random() * maxIndex) + 1);

}
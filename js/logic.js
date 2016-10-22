function getVal(){
  console.log('hello');
  var val = $('input[name=description]:checked').val();
  console.log(val);
  var fname = $('#fname').val();
  console.log(fname);
  createPost(fname, val);
  window.location='campaign.html?fname=' +fname + '&attr='+val;



}

function createPost(fname, attr){

  var attrList = women[attr];
  var matchedwoman = attrList[0];
  console.log(matchedwoman.img.valueOf());


}

var women = {

  'Defiant' : [

    {
      name: 'Michelle Obama',
      img:'images/michelleobama.png',
      quote:'When they go low, we go high.'
    }
  ]
  ,

  'Smart': [
    {
      name: 'Hilary Clinton' ,
      img:'images/hilary.png',
      quote:'Always aim high, work hard and care deeply about what you believe in.'

    }
  ],

  'Brave': [
    {
      name: 'Lady Gaga',
      img: 'ladygaga.png',
      quote: 'I was born this way.'

    }


  ],

  'Strong': [
    {
      name: 'Oprah',
      img: 'oprah.png',
      quote: 'Think like a Queen. A queen is not afraid to fail.'

    }

  ]


}

function getParameterByName(name, url) {
  if (!url) {
    url = window.location.href;
  }
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

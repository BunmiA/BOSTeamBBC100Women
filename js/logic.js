function getVal() {
    console.log('hello');
    var val = $('input[name=description]:checked').val();
    console.log(val);
    var fname = $('#fname').val();
    console.log(fname);
    createPost(fname, val);
    window.location = 'campaign.html?fname=' + fname + '&attr=' + val;
}

function createPost(fname, attr) {
  //  var attrList = women[attr];
   // var matchedwoman = attrList[0];
    //console.log(matchedwoman.img.valueOf());
}

// var women = {
//     'Defiant': [
//
//         {
//             name: 'Michelle Obama',
//             img: 'https://s-media-cache-ak0.pinimg.com/236x/8c/fc/b8/8cfcb8b8da6585802966c8c8666bfb16.jpg',
//             quote: 'When they go low, we go high.'
//         }
//     ]
//     ,
//
//     'Smart': [
//         {
//             name: 'Hilary Clinton',
//             img: 'https://s3.amazonaws.com/piktochartv2-dev/v2/uploads/cf81852b-ba9a-4fee-8d91-074a1bf706f4/b928f642da791944dc7634726e308283e2a91a3c_original.jpg',
//             quote: 'Always aim high, work hard and care deeply about what you believe in.'
//
//         }
//     ],
//
//     'Brave': [
//         {
//             name: 'Lady Gaga',
//             img: 'https://www.theedgesusu.co.uk/wp-content/uploads/2015/03/lady-gaga-high-quality-wallpaper-cuo.jpg',
//             quote: 'I was born this way.'
//         }
//     ],
//
//     'Strong': [
//         {
//             name: 'Oprah',
//             img: 'http://www.mariotestino.com/wp-content/uploads/2014/09/ECN0060V_01-1400x936.jpg',
//             quote: 'Think like a Queen. A queen is not afraid to fail.'
//         }
//     ]
// }

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

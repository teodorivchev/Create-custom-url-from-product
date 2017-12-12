 var ss = jQuery('div').prop('class').match(/product-([0-9]+)/)[1];
 var tt = $('div')[0].classList
 var urll = window.location.hostname;
 var uu = 'http://' + urll + '/home/' + ss + '-' + tt[2] + '.html';
 var res = uu.replace("-product-", "-")
 console.log(res)
 $('p').html(res)
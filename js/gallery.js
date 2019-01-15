var engagementImages = "";
var weddingImages = "";

for (var i = 0; i < 60; i++) {
    number = i+1;
    engagementImages += '<a href="imgs/engagement_portfolio/lg_img/portfolio-'+number+'.jpg"><img src="imgs/engagement_portfolio/md_img/portfolio-'+number+'.jpg"></a>';
}

for (var i = 0; i < 60; i++) {
    number = i+1;
    weddingImages += '<a href="imgs/wedding_portfolio/lg_img/portfolio-'+number+'.jpg"><img src="imgs/wedding_portfolio/md_img/portfolio-'+number+'.jpg"></a>';
}
  
$('#photos').append(engagementImages);
$('#wedding_photos').append(weddingImages);




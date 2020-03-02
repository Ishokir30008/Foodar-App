
MyBanners=new Array('img1.jpg','img.jpg','rest1.jpg','rest2.jpg')
banner=0  
function ShowBanners()
{ if (document.images)
{ banner++
if (banner==MyBanners.length) {
banner=0}
document.ChangeBanner.src=MyBanners[banner]
setTimeout("ShowBanners()",5000)
}
}

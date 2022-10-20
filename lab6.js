function picture(a)
{
    var pic = document.getElementById(a);
    pic.style.display = 'block';
    pic.style.marginRight = '270px';
    pic.style.width = '600px';
    if(a == '1')
    {
        var pic_close_2 = document.getElementById('2');
        pic_close_2.style.display = 'none';
    }
    else
    {
        var pic_close_1 = document.getElementById('1');
        pic_close_1.style.display = 'none';
    }
}
function both()
{
    let picture = [document.getElementById('1'),document.getElementById('2')];
/*      let picture = new Array(2);
    for(let i = 0; i <= 1;i++)
    {
        picture[i] = document.getElementById('i+1');
    } */
    for(let i = 0; i <= 1;i++)
    {
        picture[i].style.display = 'block';
        picture[i].style.marginRight = '25px'
        picture[i].style.width = "400px"
    }
    
}
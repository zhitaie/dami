
{
    let zbing=document.querySelectorAll('.jiadian')
    for(var i=0;i<zbing.length;i++){
        fn(zbing[i])
    }
function fn(abc) {
let aa=abc.querySelectorAll('.jiadianyou .abcd')
let ba=abc.querySelectorAll('.dazong ul')
// console.log(aa)
aa.forEach(function (ele,index) {
    ele.onmouseover=function () {
        for(var i=0;i<aa.length;i++){
            aa[i].classList.remove('actt')
            ba[i].classList.remove('jgzz')
        }
        ele.classList.add('actt')
        ba[index].classList.add('jgzz')
    }
})
}
}
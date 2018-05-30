function fetchAtInterval(url,ms){
    let count = 0;
    let timerId = setTimeout(function request(){
        count += 1;
        fetch(url).then(r => r.text()).then(r => alert(`${r} at ${count} time`)).then(()=>prompt('if you want cancel')?clearTimeout(timerId):timerId = setTimeout(request,2000));
       
       
    },ms)
}

let changeTime = (time) => {
    let newTime = new Date(time*1000),
        hours = newTime.getHours(),
        minutes = newTime.getMinutes(),
        minutesFixed,
        changedTime;
        
        if(minutes < 10) {
             minutesFixed = '0' + minutes.toString();
        }
        else {
            minutesFixed = minutes;
        }
        changedTime = hours + ":" + minutesFixed
        
    return changedTime;
}

let createDivBox = (boxName, klass, data, parentBox, htmlCode = false) => {
    let divBox = document.createElement('div');
    
    let dataBox = document.createElement('span')
    if(boxName !== '') {
        let titleBox = document.createElement('p');
        titleBox.innerHTML = (boxName);
        divBox.appendChild(titleBox);
    }
    
    divBox.setAttribute('class', klass + ' singleBox')
    if(htmlCode === false)
    {
        dataBox.innerHTML = (data);
    }
    else {
        dataBox.insertAdjacentHTML('afterbegin', `<img src="${data}" alt="Ikona">`);
    }
   
    divBox.appendChild(dataBox);
    parentBox.appendChild(divBox);
}

let removeChilds = (deleteBox) => {
    while(deleteBox.firstChild) {
        deleteBox.removeChild(deleteBox.firstChild);
    }
}

export  { removeChilds, createDivBox, changeTime};
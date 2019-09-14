export  function containsObject(obj, list) {
    var i;
    for (i = 0; i < list.length; i++) {
        
        if (list[i].Id === obj.value) {
            return true;
        }
    }

    return false;
}
export  function containsObjectByValue(obj, list) {
    var i;
    for (i = 0; i < list.length; i++) {
        
        if (list[i].value === obj.Id) {
            return true;
        }
    }

    return false;
}


export  function containsObjectById(obj, list) {
    
    var i;
    for (i = 0; i < list.length; i++) {
        if (list[i].Id == obj.ID) {
            return true;
        }

    }

    return false;
}

export  function containsObjectById2(obj, list) {
    
    var i;
    for (i = 0; i < list.length; i++) {
        if (list[i].ID == obj.Id) {
            return true;
        }

    }

    return false;
}
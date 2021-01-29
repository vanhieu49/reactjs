export const formatPrice =(price,currentUnit,position)=>{
    let value = null;
    if(position === 'left'){
        value = currentUnit + ' ' + price;
    }else{
        value = price + ' ' + currentUnit
    }
    return value;
}
export const checkNumber=(value)=>{
    if(value < 1 || isNaN(value)){
        return false;
    }
    return true;
}
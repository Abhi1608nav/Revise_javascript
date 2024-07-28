let maxOfThree = (num1,num2,num3)=>{
    if(num1>num2 && num1>num3)
      {
        return num1;
      }
      else if(num2>num3)
      {
        return num2;
      }
      return num3;
}


let filterData = (arr)=>{
    let newData = arr.filter((val)=>{
        if( val%2==0 && val>35)
        {
            return val;
        }
    })

    return newData;
}

let currDate = ()=>{
    const now = new Date();

    // Extract components
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const year = now.getFullYear();

    // Format the date string
    const formattedDate = `${hours}:${minutes}:${seconds} ${day}/${month}/${year}`;

    return formattedDate;

}


module.exports = {
    maxOfThree,
    filterData,
    currDate
}

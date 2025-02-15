{
    function removeDuplicates(array: number[]) : number[] {
        const uniqueNumArray : number[] = array.filter((num, index)=> array.indexOf(num) === index);
        return uniqueNumArray;
    }
}
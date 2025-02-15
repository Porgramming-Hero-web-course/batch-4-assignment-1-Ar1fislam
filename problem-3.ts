{
    function countWordOccurrences(sentence:string, word:string) : number {
        const words = sentence.split(' ');
        let count = 0;
        
        words.forEach((singleWord) => {
            if(singleWord.toLowerCase() === word.toLowerCase()){
                count++;
            }
            
        });
        return count;
    }

}
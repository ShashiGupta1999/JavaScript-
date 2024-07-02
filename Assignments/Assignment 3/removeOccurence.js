function removeOccurence(input,searchString){
    const index = input.indexOf(searchString)
    if(index === -1){
        return 'Search string not found in input'
    }

    return input.slice(0,index) + input.slice(index + searchString.length);

}

console.log(removeOccurence("The quick brown fox jumps over the lazy dog", "the"))
function insertion(original,insert,position){
    return original.slice(0,position) + insert + original.slice(position)

}
console.log(insertion("HCL Banglore", "Technologies ", 4))
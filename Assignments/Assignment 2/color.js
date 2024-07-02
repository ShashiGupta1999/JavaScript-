function displayColors(colors) {
    if (!Array.isArray(colors)) {
      throw new Error("Input must be an array");
    }

    const suffixes = ["st", "nd", "rd"];   
    colors.forEach((color, index) => {
      let position = index + 1;
      let suffix = suffixes[(position - 1) % 10] || "th";
   
      console.log(`${position}${suffix} choice is ${color}`);
    });
  }
   
  // Example usage:
  const colors = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];;
  displayColors(colors);
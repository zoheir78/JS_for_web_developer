// Exercise N° 1:

const averageNum = (arr) => {
    let evenNums = arr.filter(number => number % 2 === 0);
    if (evenNums.length === 0){return 0;}
    console.log(evenNums)

    const sumOfEvenNums = evenNums.reduce((acc, number) => acc + number, 0);
    const averageN =  sumOfEvenNums / evenNums.length;
    return averageN;

}

let arr_3 = [2,3,4,6,10,11];
console.log(averageNum(arr_3))

// Exercise N° 2:

const findLongestWord = (arr)=> {
    if(arr.length === 0){ return null; }
    
    const longestWord = arr.reduce((longest, current) => {
        return current.length > longest.length ? current : longest;}, arr[0] );
        return longestWord;
}

const wordsArray = ["apple", "oranges", "date", "cherry", "strawberry"];
console.log(findLongestWord(wordsArray));

// Exercise N° 3:
const findAverageNumberOfPages = (arr) => {
    const pagesArray = arr.map(book => book.pages)
    console.log(pagesArray);

    const totalNumberOfPages = pagesArray.reduce((sum, pages) => sum += pages, 0);
    const  avgNumberOfPages = totalNumberOfPages / books.length;
    return avgNumberOfPages;
}

const books = [
    { title: 'Book 1', author: 'Author 1', pages: 200 },
    { title: 'Book 2', author: 'Author 2', pages: 250 },
    { title: 'Book 3', author: 'Author 3', pages: 180 }
  ];
  console.log(findAverageNumberOfPages(books));

  // Exercise N° 4:

  const frequencyOfEachString = (arr) => {
    const frequencyObj = arr.reduce((frequency, word) =>{
        frequency[word] = (frequency[word] || 0) + 1;
        return frequency;
    }, {})
    return frequencyObj
  }  
  const inputArray = ['hello', 'world', 'hello', 'hello'];
  const frequencyObject = frequencyOfEachString(inputArray);
  console.log(frequencyObject);

  // Exercise N° 5:

  const countOfPeopleByCity = (arr) => {
    const cityFreq = arr.reduce((frequency, person) =>{
        const {city} = person;
        frequency[city] = (frequency[city] || 0) +1; 
        return frequency
    }, {})
    return cityFreq;
    
  }
  const people = [
    { name: "Alice", age: 30, city: "New York" },
    { name: "Bob", age: 40, city: "Chicago" },
    { name: "Charlie", age: 50, city: "New York" }
  ];
  
  const countByCity = countOfPeopleByCity(people);
  console.log(countByCity);
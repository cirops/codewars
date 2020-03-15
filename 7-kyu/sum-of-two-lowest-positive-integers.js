//https://www.codewars.com/kata/558fc85d8fd1938afb000014

sumTwoSmallestNumbers = numbers => numbers.sort((a, b) => a - b).slice(0, 2).reduce((acc,curr) => acc+curr);
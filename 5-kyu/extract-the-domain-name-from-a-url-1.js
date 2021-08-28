//https://www.codewars.com/kata/514a024011ea4fb54200004b

const domainName = (url) =>
  url.match(/^(http)?(s)?(:\/\/)?(www\.)?(.*?)(\..*)*$/i)[5];


URL Parse Helper Url Parse Assist is a lightweight npm package designed to simplify URL parsing in JavaScript. It provides a set of utilities to effortlessly extract various components such as protocol, pathname, search query, subdomains, domain, and top-level domains from URLs. Simplify your URL parsing tasks with Url Parse Assist!


## Installation

```sh
npm  install  url-parse-helper
```

## Usage Example Here's a simple example demonstrating how to use the useURL function from url-parse-helper:
```javascript
import { useURL } from 'url-parse-helper';
```
```javascript
const urlString = "https://www.some.example.com.uk/page/page2?query=value";

const urlInfo = useURL(urlString);
```

```javascript
console.log("Protocol:", urlInfo.protocol); // https:

console.log("Hostname:", urlInfo.host); // www.some.example.com.uk

console.log("Path:", urlInfo.path); // /page/page2

console.log("Page:", urlInfo.page); // [ 'page','page2' ]

console.log("Subdomains:", urlInfo.subDomains); // [ 'www','some' ]

console.log("Domain:", urlInfo.domain); // example

console.log("Top Level Domains:", urlInfo.tdl); // [ 'com','uk' ]

console.log("Search Query:", urlInfo.searchQuery); // [ { key: 'query', value: 'value' } ]
```
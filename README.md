
URL Parse Helper Url Parse Assist is a lightweight npm package designed to simplify URL parsing in JavaScript. It provides a set of utilities to effortlessly extract various components such as protocol, pathname, search query, subdomains, domain, and top-level domains from URLs. Simplify your URL parsing tasks with Url Parse Assist!

### Installation You can install the url-parse-helper package via npm:

> npm install url-parse-helper

### Usage Example Here's a simple example demonstrating how to use the useURL function from url-parse-helper:

> import { useURL } from 'url-parse-helper';

> const urlString = "https://www.example.com/path/to/page?query=value";
> const urlInfo = useURL(urlString);

> console.log("Protocol:", urlInfo.protocol);
> console.log("Pathname:", urlInfo.path);
> console.log("Hostname:", urlInfo.host); 
> console.log("Subdomains:", urlInfo.subDomains);
> console.log("Domain:", urlInfo.domain); 
> console.log("Top Level Domains:", urlInfo.tdl);
> console.log("Search Query:", urlInfo.searchQuery);
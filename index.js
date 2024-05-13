import TDL from "./tdl.json" with { type: "json" };


export function useURL(urlString) {

    const tdlNames = TDL.tdl;

    let url; 

    if (urlString.startsWith("www.")) {
        let modifiedUrlString = "http://" + urlString;
        url = new URL(modifiedUrlString);
    } else {
        url = new URL(urlString);
    }    

    // Extract protocol
    const protocol = url.protocol?.replace(":","");

    // Extract pathname
    const path = url.pathname;

    let page = url.pathname?.replace(/^\/|\/$/g, '')?.split('/');
    page = page[0]=="" ? [] : page;

    // Extract hostname
    const host = url.hostname;

    // Extract search query parameters as an array of objects
    const searchParams = url.searchParams;
    const searchQuery = Array.from(searchParams.entries()).map(([key, value]) => ({ key, value }));

    // Split the hostname by '.'
    const parts = host.split('.');

    let domain = "";
    let subDomains = [];
    let tdl = [];


    for (let i = 0; i < parts.length; i++) {
        const element = parts[i].toUpperCase();
        if (!tdlNames.includes(element)) {
            subDomains.push(parts[i]);
        } else {
            if (!domain) {
                domain = parts[i - 1];
                subDomains.pop();
            }
            tdl.push(parts[i]);
        }
    }
    
    return {
        protocol,
        path,
        page,
        host,
        domain,
        subDomains,
        tdl,       
        searchQuery
    };
}
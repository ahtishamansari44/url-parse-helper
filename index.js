import TDL from "./tdl.json" with { type: "json" };


export function extractDomainKeys(urlString) {

    const tdlNames = TDL.tdl;

    const url = new URL(urlString);

    // Extract protocol
    const protocol = url.protocol;

    // Extract pathname
    const path = url.pathname;

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
        host,
        domain,
        subDomains,
        tdl,
        searchQuery
    };
}

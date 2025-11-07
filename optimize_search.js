const dnsRecords = [
    { address: "amazon.com", dns: "205.251.242.103" },
    { address: "apple.com", dns: "17.253.144.10" },
    { address: "bbc.com", dns: "151.101.64.81" },
    { address: "chat.openai.com", dns: "104.18.12.123" },
    { address: "cnn.com", dns: "151.101.1.67" },
    { address: "discord.com", dns: "162.159.137.232" },
    { address: "github.com", dns: "140.82.113.3" },
    { address: "google.com", dns: "142.250.72.14" },
    { address: "instagram.com", dns: "157.240.229.174" },
    { address: "microsoft.com", dns: "40.113.200.201" },
    { address: "netflix.com", dns: "52.41.250.12" },
    { address: "nasa.gov", dns: "198.49.245.141" },
    { address: "nytimes.com", dns: "151.101.1.164" },
    { address: "reddit.com", dns: "151.101.1.140" },
    { address: "roblox.com", dns: "128.116.114.3" },
    { address: "stanford.edu", dns: "171.67.215.200" },
    { address: "youtube.com", dns: "142.250.190.46" },
];

const bigDNSRecords = [
    { address: "adobe.com", dns: "104.12.53.201" },
    { address: "airbnb.com", dns: "172.33.101.72" },
    { address: "alibaba.com", dns: "106.23.88.14" },
    { address: "amazon.com", dns: "205.251.242.103" },
    { address: "amd.com", dns: "13.25.44.10" },
    { address: "ancestry.com", dns: "184.97.35.45" },
    { address: "android.com", dns: "74.125.32.100" },
    { address: "apple.com", dns: "17.253.144.10" },
    { address: "bbc.com", dns: "151.101.64.81" },
    { address: "bestbuy.com", dns: "104.12.41.88" },
    { address: "bing.com", dns: "204.79.197.200" },
    { address: "blizzard.com", dns: "137.221.106.104" },
    { address: "booking.com", dns: "185.28.220.12" },
    { address: "buzzfeed.com", dns: "151.101.1.69" },
    { address: "canva.com", dns: "104.22.56.43" },
    { address: "capitalone.com", dns: "198.89.35.11" },
    { address: "chat.openai.com", dns: "104.18.12.123" },
    { address: "chase.com", dns: "159.53.113.12" },
    { address: "cnn.com", dns: "151.101.1.67" },
    { address: "coursera.org", dns: "104.18.10.145" },
    { address: "craigslist.org", dns: "208.82.237.129" },
    { address: "dell.com", dns: "143.166.83.38" },
    { address: "discord.com", dns: "162.159.137.232" },
    { address: "dropbox.com", dns: "162.125.66.3" },
    { address: "ebay.com", dns: "66.211.175.229" },
    { address: "espn.com", dns: "199.181.132.250" },
    { address: "etsy.com", dns: "151.101.2.224" },
    { address: "facebook.com", dns: "157.240.22.35" },
    { address: "fedex.com", dns: "23.49.134.27" },
    { address: "forbes.com", dns: "151.101.65.124" },
    { address: "foxnews.com", dns: "23.13.200.45" },
    { address: "github.com", dns: "140.82.113.3" },
    { address: "gizmodo.com", dns: "151.101.1.125" },
    { address: "gmail.com", dns: "142.250.72.68" },
    { address: "go.com", dns: "13.33.45.20" },
    { address: "godaddy.com", dns: "104.238.79.65" },
    { address: "google.com", dns: "142.250.72.14" },
    { address: "hbo.com", dns: "23.42.118.13" },
    { address: "homedepot.com", dns: "23.44.22.144" },
    { address: "hulu.com", dns: "69.28.145.88" },
    { address: "ibm.com", dns: "129.42.38.10" },
    { address: "ikea.com", dns: "192.132.55.12" },
    { address: "imgur.com", dns: "151.101.0.193" },
    { address: "indeed.com", dns: "104.16.249.249" },
    { address: "instagram.com", dns: "157.240.229.174" },
    { address: "intel.com", dns: "192.198.12.44" },
    { address: "khanacademy.org", dns: "104.17.182.29" },
    { address: "lego.com", dns: "104.12.33.88" },
    { address: "linkedin.com", dns: "108.174.10.10" },
    { address: "mail.com", dns: "74.208.123.77" },
    { address: "mcdonalds.com", dns: "69.192.152.10" },
    { address: "medium.com", dns: "162.159.152.4" },
    { address: "merriam-webster.com", dns: "151.101.66.137" },
    { address: "microsoft.com", dns: "40.113.200.201" },
    { address: "msn.com", dns: "204.79.197.203" },
    { address: "nasa.gov", dns: "198.49.245.141" },
    { address: "nationalgeographic.com", dns: "23.32.64.21" },
    { address: "naver.com", dns: "223.130.200.104" },
    { address: "netflix.com", dns: "52.41.250.12" },
    { address: "nike.com", dns: "23.202.90.21" },
    { address: "npr.org", dns: "151.101.1.67" },
    { address: "nytimes.com", dns: "151.101.1.164" },
    { address: "office.com", dns: "40.100.174.2" },
    { address: "paypal.com", dns: "64.4.250.36" },
    { address: "pinterest.com", dns: "151.101.64.84" },
    { address: "quora.com", dns: "104.17.32.13" },
    { address: "reddit.com", dns: "151.101.1.140" },
    { address: "roblox.com", dns: "128.116.114.3" },
    { address: "salesforce.com", dns: "96.43.144.26" },
    { address: "shopify.com", dns: "23.227.38.64" },
    { address: "slack.com", dns: "13.33.78.122" },
    { address: "sony.com", dns: "23.42.100.77" },
    { address: "soundcloud.com", dns: "151.101.0.28" },
    { address: "spotify.com", dns: "35.186.224.25" },
    { address: "square.com", dns: "74.122.189.137" },
    { address: "stackoverflow.com", dns: "151.101.1.69" },
    { address: "stanford.edu", dns: "171.67.215.200" },
    { address: "steamcommunity.com", dns: "162.254.195.40" },
    { address: "stripe.com", dns: "54.187.182.1" },
    { address: "target.com", dns: "23.45.111.33" },
    { address: "techcrunch.com", dns: "151.101.65.52" },
    { address: "tesla.com", dns: "23.11.90.100" },
    { address: "theguardian.com", dns: "151.101.65.111" },
    { address: "tiktok.com", dns: "104.18.24.143" },
    { address: "time.com", dns: "151.101.65.208" },
    { address: "trello.com", dns: "104.16.22.43" },
    { address: "tripadvisor.com", dns: "151.101.2.28" },
    { address: "tumblr.com", dns: "74.114.154.13" },
    { address: "twitch.tv", dns: "151.101.130.167" },
    { address: "twitter.com", dns: "104.244.42.1" },
    { address: "uber.com", dns: "104.36.192.31" },
    { address: "udemy.com", dns: "104.16.65.85" },
    { address: "un.org", dns: "157.150.97.33" },
    { address: "upwork.com", dns: "104.18.11.97" },
    { address: "usatoday.com", dns: "151.101.1.67" },
    { address: "verizon.com", dns: "192.16.31.10" },
    { address: "walmart.com", dns: "23.45.90.144" },
    { address: "washingtonpost.com", dns: "151.101.1.11" },
    { address: "weebly.com", dns: "199.34.228.66" },
    { address: "whatsapp.com", dns: "157.240.229.60" },
    { address: "wikimedia.org", dns: "208.80.154.224" },
    { address: "wikipedia.org", dns: "208.80.154.224" },
    { address: "wordpress.com", dns: "192.0.78.17" },
    { address: "xbox.com", dns: "40.76.4.15" },
    { address: "yahoo.com", dns: "74.6.143.25" },
    { address: "yelp.com", dns: "151.101.2.116" },
    { address: "youtube.com", dns: "142.250.190.46" },
    { address: "zoom.us", dns: "170.114.52.2" }
];

function findDNS(address, records) {
    let low = 0;
    let high = records.length - 1;
    let mid = (low+high)/2
    while(true) {
        mid = Math.ceil((low+high)/2);
        if (records[mid].address === address) {
            console.log(records[mid].dns);
            break;
        }
        else if (records[mid].address < address) {
            low = mid+1;
        }
        else if (records[mid].address > address) {
            high = mid-1;
        }
    }
}

function regularFind(address, records) {
    for(let i=0; i<records.length; i++) {
        if (records[i].address === address) {
            console.log(records[i].dns);
            break
        }
    }
}

regularFind("zoom.us", bigDNSRecords);
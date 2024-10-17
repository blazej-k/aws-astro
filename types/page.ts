export type Page = {
  title: string;
};

// $TTL 3600
// @	IN SOA dns19.ovh.net. tech.ovh.net. (2024100903 86400 3600 3600000 60)
//         IN NS     dns19.ovh.net.
//         IN NS     ns19.ovh.net.
//         IN MX     1 mx1.mail.ovh.net.
//         IN MX     5 mx2.mail.ovh.net.
//         IN MX     100 mx3.mail.ovh.net.
//         IN A     213.186.33.5
//     600 IN TXT     "v=spf1 include:mx.ovh.com -all"
//         IN TXT     "1|www.blazej.ovh"
// ftp        IN CNAME     blazej.ovh.
// www        IN A     213.186.33.5
// www        IN TXT     "3|welcome"

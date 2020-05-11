function FindProxyForURL(url, host)
{
  var proxyp = "PROXY 172.104.70.19:85";
  var phttp = "HTTP 172.104.70.19:85";
  var phttps = "HTTPS 172.104.70.19:85";


  if (isInNet(myIpAddress(), "172.31.122.64", "255.255.255.192"))
    return proxyp,phttp,phttps;
  //return proxyp;
  else if (isInNet(myIpAddress(), "172.21.122.64", "255.255.255.192"))
    return proxyp,phttp,phttps;
  else if (isInNet(myIpAddress(), "172.104.24.0", "255.255.255.0"))
    return proxyp,phttp,phttps;
  else if (isInNet(myIpAddress(), "172.55.45.0", "255.255.255.0"))
    return proxyp,phttp,phttps;
  else if (isInNet(myIpAddress(), "172.141.0.0", "255.255.0.0"))
    return proxyp,phttp,phttps;
  else
    return "DIRECT";
}

export default function loadBalancer(chinaDownload, usDownload) {
  return Promise
    .race([chinaDownload, usDownload])
    .then((value) => value);
}

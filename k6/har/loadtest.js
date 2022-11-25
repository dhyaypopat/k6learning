// Creator: WebInspector 537.36

import { sleep, group } from 'k6'
import http from 'k6/http'

export const options = {}

export default function main() {
  let response

  group('page_1 - https://k6.io/', function () {
    response = http.get('https://k6.io/', {
      headers: {
        accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        cookie:
          '_ga=GA1.2.330172075.1669010718; _gid=GA1.2.1935454760.1669010718; _gat=1; _lfa=LF1.1.494b591c9058a1bc.1669199167385; _gat_gtag_UA_158196577_1=1; _hjSessionUser_1699068=eyJpZCI6IjE1NDc5YThmLWQwNDItNWI4Yi1hMDI5LTM2ZjY4OTdlMjljYyIsImNyZWF0ZWQiOjE2NjkxOTkxNjc2ODEsImV4aXN0aW5nIjpmYWxzZX0=; _hjFirstSeen=1; _hjIncludedInSessionSample=1; _hjSession_1699068=eyJpZCI6ImVhYTA5MDEwLTUxMTQtNGQ1ZS04ZDBiLTI2ZWFmM2QxODJhYSIsImNyZWF0ZWQiOjE2NjkxOTkxNjc3MDAsImluU2FtcGxlIjp0cnVlfQ==; _hjIncludedInPageviewSample=1; _hjAbsoluteSessionInProgress=0',
        'if-modified-since': 'Wed, 23 Nov 2022 08:11:22 GMT',
        'if-none-match': 'W/"efd61f0903ae9dec32a902b8aa51cfa6"',
        referer: 'https://loadimpact.com/',
        'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
        'sec-fetch-dest': 'document',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-site': 'cross-site',
        'sec-fetch-user': '?1',
        'upgrade-insecure-requests': '1',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36',
      },
    })

    response = http.get(
      'https://fonts.googleapis.com/css?family=Roboto+Mono%3A300%2C400%7CKalam%3A400&display=swap&family=Roboto%2BMono%3A300%2C400%7CKalam%3A400',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
          Referer: 'https://k6.io/',
          'sec-ch-ua-mobile': '?0',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get('https://k6.io/webpack-runtime-25b3a3510a9cc2d52bcb.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
        Referer: 'https://k6.io/',
        'sec-ch-ua-mobile': '?0',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://k6.io/framework-de2b0b80e089b3affac0.js')

    response = http.get('https://k6.io/app-95994a3234b1e755149d.js')

    response = http.get('https://k6.io/ea88be26-802515fb1277ab0a9a52.js')

    response = http.get('https://k6.io/commons-b6c7c1d58ae37af78a8e.js')

    response = http.get(
      'https://k6.io/3d07c32fcd27e58e492c66a6640eccc2d2df2795-da35ff025e319a17dbc5.js'
    )

    response = http.get(
      'https://k6.io/085a26645034e4957e295534dc83ca9ad6ba9eae-fd5ea8dec8ad0970e51f.js'
    )

    response = http.get('https://k6.io/component---src-pages-index-js-2463badfe47229831ca5.js')

    response = http.get('https://k6.io/page-data/index/page-data.json', {
      headers: {
        accept: '*/*',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        cookie:
          '_ga=GA1.2.330172075.1669010718; _gid=GA1.2.1935454760.1669010718; fs_uid=#1AHVA#5032994029588480:5938461543124992:::#/1700632104; fs_cid=1.0; _gat=1; _lfa=LF1.1.494b591c9058a1bc.1669199167385; _gat_gtag_UA_158196577_1=1; _hjSessionUser_1699068=eyJpZCI6IjE1NDc5YThmLWQwNDItNWI4Yi1hMDI5LTM2ZjY4OTdlMjljYyIsImNyZWF0ZWQiOjE2NjkxOTkxNjc2ODEsImV4aXN0aW5nIjpmYWxzZX0=; _hjFirstSeen=1; _hjIncludedInSessionSample=1; _hjSession_1699068=eyJpZCI6ImVhYTA5MDEwLTUxMTQtNGQ1ZS04ZDBiLTI2ZWFmM2QxODJhYSIsImNyZWF0ZWQiOjE2NjkxOTkxNjc3MDAsImluU2FtcGxlIjp0cnVlfQ==; _hjIncludedInPageviewSample=1; _hjAbsoluteSessionInProgress=0',
        'if-modified-since': 'Wed, 23 Nov 2022 08:11:23 GMT',
        'if-none-match': '"5288832bc083b4e680f76f11eebff82f"',
        origin: 'https://k6.io',
        referer: 'https://k6.io/',
        'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36',
      },
    })

    response = http.get('https://k6.io/page-data/sq/d/1918644930.json', {
      headers: {
        accept: '*/*',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        cookie:
          '_ga=GA1.2.330172075.1669010718; _gid=GA1.2.1935454760.1669010718; fs_uid=#1AHVA#5032994029588480:5938461543124992:::#/1700632104; fs_cid=1.0; _gat=1; _lfa=LF1.1.494b591c9058a1bc.1669199167385; _gat_gtag_UA_158196577_1=1; _hjSessionUser_1699068=eyJpZCI6IjE1NDc5YThmLWQwNDItNWI4Yi1hMDI5LTM2ZjY4OTdlMjljYyIsImNyZWF0ZWQiOjE2NjkxOTkxNjc2ODEsImV4aXN0aW5nIjpmYWxzZX0=; _hjFirstSeen=1; _hjIncludedInSessionSample=1; _hjSession_1699068=eyJpZCI6ImVhYTA5MDEwLTUxMTQtNGQ1ZS04ZDBiLTI2ZWFmM2QxODJhYSIsImNyZWF0ZWQiOjE2NjkxOTkxNjc3MDAsImluU2FtcGxlIjp0cnVlfQ==; _hjIncludedInPageviewSample=1; _hjAbsoluteSessionInProgress=0',
        'if-modified-since': 'Mon, 31 Oct 2022 15:32:34 GMT',
        'if-none-match': 'W/"c49e16c44ed19370541b0f536ee69314"',
        origin: 'https://k6.io',
        referer: 'https://k6.io/',
        'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36',
      },
    })

    response = http.get('https://k6.io/page-data/sq/d/2330559035.json', {
      headers: {
        accept: '*/*',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        cookie:
          '_ga=GA1.2.330172075.1669010718; _gid=GA1.2.1935454760.1669010718; fs_uid=#1AHVA#5032994029588480:5938461543124992:::#/1700632104; fs_cid=1.0; _gat=1; _lfa=LF1.1.494b591c9058a1bc.1669199167385; _gat_gtag_UA_158196577_1=1; _hjSessionUser_1699068=eyJpZCI6IjE1NDc5YThmLWQwNDItNWI4Yi1hMDI5LTM2ZjY4OTdlMjljYyIsImNyZWF0ZWQiOjE2NjkxOTkxNjc2ODEsImV4aXN0aW5nIjpmYWxzZX0=; _hjFirstSeen=1; _hjIncludedInSessionSample=1; _hjSession_1699068=eyJpZCI6ImVhYTA5MDEwLTUxMTQtNGQ1ZS04ZDBiLTI2ZWFmM2QxODJhYSIsImNyZWF0ZWQiOjE2NjkxOTkxNjc3MDAsImluU2FtcGxlIjp0cnVlfQ==; _hjIncludedInPageviewSample=1; _hjAbsoluteSessionInProgress=0',
        'if-modified-since': 'Wed, 16 Dec 2020 12:37:49 GMT',
        'if-none-match': '"db870a8fe7e113e838b5482c2eff5498"',
        origin: 'https://k6.io',
        referer: 'https://k6.io/',
        'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36',
      },
    })

    response = http.get('https://k6.io/page-data/sq/d/3543381572.json', {
      headers: {
        accept: '*/*',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        cookie:
          '_ga=GA1.2.330172075.1669010718; _gid=GA1.2.1935454760.1669010718; fs_uid=#1AHVA#5032994029588480:5938461543124992:::#/1700632104; fs_cid=1.0; _gat=1; _lfa=LF1.1.494b591c9058a1bc.1669199167385; _gat_gtag_UA_158196577_1=1; _hjSessionUser_1699068=eyJpZCI6IjE1NDc5YThmLWQwNDItNWI4Yi1hMDI5LTM2ZjY4OTdlMjljYyIsImNyZWF0ZWQiOjE2NjkxOTkxNjc2ODEsImV4aXN0aW5nIjpmYWxzZX0=; _hjFirstSeen=1; _hjIncludedInSessionSample=1; _hjSession_1699068=eyJpZCI6ImVhYTA5MDEwLTUxMTQtNGQ1ZS04ZDBiLTI2ZWFmM2QxODJhYSIsImNyZWF0ZWQiOjE2NjkxOTkxNjc3MDAsImluU2FtcGxlIjp0cnVlfQ==; _hjIncludedInPageviewSample=1; _hjAbsoluteSessionInProgress=0',
        'if-modified-since': 'Mon, 31 Oct 2022 15:32:34 GMT',
        'if-none-match': 'W/"06a4a008a43a5a5fe708e5f038b5913d"',
        origin: 'https://k6.io',
        referer: 'https://k6.io/',
        'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36',
      },
    })

    response = http.get('https://k6.io/page-data/app-data.json', {
      headers: {
        accept: '*/*',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        cookie:
          '_ga=GA1.2.330172075.1669010718; _gid=GA1.2.1935454760.1669010718; fs_uid=#1AHVA#5032994029588480:5938461543124992:::#/1700632104; fs_cid=1.0; _gat=1; _lfa=LF1.1.494b591c9058a1bc.1669199167385; _gat_gtag_UA_158196577_1=1; _hjSessionUser_1699068=eyJpZCI6IjE1NDc5YThmLWQwNDItNWI4Yi1hMDI5LTM2ZjY4OTdlMjljYyIsImNyZWF0ZWQiOjE2NjkxOTkxNjc2ODEsImV4aXN0aW5nIjpmYWxzZX0=; _hjFirstSeen=1; _hjIncludedInSessionSample=1; _hjSession_1699068=eyJpZCI6ImVhYTA5MDEwLTUxMTQtNGQ1ZS04ZDBiLTI2ZWFmM2QxODJhYSIsImNyZWF0ZWQiOjE2NjkxOTkxNjc3MDAsImluU2FtcGxlIjp0cnVlfQ==; _hjIncludedInPageviewSample=1; _hjAbsoluteSessionInProgress=0',
        'if-modified-since': 'Wed, 23 Nov 2022 08:11:22 GMT',
        'if-none-match': '"2ef1410566796a8efa4a21c10f81a083"',
        origin: 'https://k6.io',
        referer: 'https://k6.io/',
        'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36',
      },
    })

    response = http.get('https://k6.io/static/amazon-a8a3f55484b0e7d30c3ab0ae416cc69d.svg')

    response = http.get('https://k6.io/static/noaa-7fbe83bf43a3e1b9681893cc82ebc43b.svg')

    response = http.get('https://k6.io/static/sephora-922efcf5b1b703d5a04fa7c3b4aa1d36.svg')

    response = http.get('https://k6.io/static/citrix-4b63b90f22c5e8bf12e9b568aeb52a51.svg')

    response = http.get('https://k6.io/static/microsoft-78dd4a41b7bc3af7ebec21b1093da07b.svg')

    response = http.get('https://k6.io/static/yum-e3693c4fc2cbcc677a0fbe9f5c55e689.svg')

    response = http.get('https://k6.io/static/gitlab-4efdbb1df4fbce23b88b616a4296d2d2.svg')

    response = http.get('https://k6.io/static/carvana-4678a6323dc843e68faa8baea7cb78ac.svg')

    response = http.get('https://www.googletagmanager.com/gtm.js?id=G-YQE19WEB36')

    response = http.get(
      'https://k6.io/static/tt-pro-medium-webfont-a6840e7b36e244e19cb32d1b3b519a9f.woff2'
    )

    response = http.get(
      'https://k6.io/static/tt-pro-bold-webfont-7842c22fb63b8a859ccff64910254df7.woff2'
    )

    response = http.get(
      'https://k6.io/static/tt-pro-regular-webfont-c026b25692b4d657d3410332d773a00d.woff2'
    )

    response = http.get('https://k6.io/static/home-page-main-30c6e72806506138b9bd44a2ab31a419.mp4')

    response = http.get(
      'https://fonts.gstatic.com/s/robotomono/v22/L0xTDF4xlVMF-BfR8bXMIhJHg45mwgGEFl0_3vvtSM1J-gEPT5Ese09hHSh0me8iUI0.woff2'
    )

    response = http.get('https://munchkin.marketo.net/munchkin.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
        Referer: 'https://k6.io/',
        'sec-ch-ua-mobile': '?0',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://static.hotjar.com/c/hotjar-1699068.js?sv=6')

    response = http.get('https://www.google-analytics.com/analytics.js')

    response = http.post(
      'https://o175050.ingest.sentry.io/api/5509583/envelope/?sentry_key=59c36eeefc1246ecbfa516c2edd773e6&sentry_version=7',
      '{"sent_at":"2022-11-23T10:26:18.815Z","sdk":{"name":"sentry.javascript.gatsby","version":"6.19.3"}}\n{"type":"session"}\n{"sid":"e32c9bf6e06d454ba4839bdd80954401","init":true,"started":"2022-11-23T10:26:18.814Z","timestamp":"2022-11-23T10:26:18.814Z","status":"ok","errors":0,"attrs":{"release":"afb939e73678941e34d6cff8c3ea81e306acb6f9","environment":"production","user_agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36"}}',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          'content-type': 'text/plain;charset=UTF-8',
          origin: 'https://k6.io',
          referer: 'https://k6.io/',
          'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'cross-site',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.get('https://sc.lfeeder.com/lftracker_v1_ywVkO4X2AnO8Z6Bj.js')

    response = http.get(
      'https://www.googletagmanager.com/gtag/js?id=UA-158196577-1&l=dataLayer&cx=c'
    )

    response = http.get(
      'https://pbs.twimg.com/profile_images/1162527421184335877/5XV7dmsd_400x400.jpg'
    )

    response = http.get(
      'https://pbs.twimg.com/profile_images/1520610190516645888/R2lgtWqC_400x400.jpg'
    )

    response = http.get(
      'https://pbs.twimg.com/profile_images/1543739876016656384/FUGen2m7_400x400.jpg'
    )

    response = http.get(
      'https://pbs.twimg.com/profile_images/1353037199302815744/f9L0ozTE_400x400.jpg'
    )

    response = http.get(
      'https://pbs.twimg.com/profile_images/1561761532458975232/knXD41n5_400x400.jpg'
    )

    response = http.get(
      'https://pbs.twimg.com/profile_images/1474337318584659974/UuyVnRuK_400x400.jpg'
    )

    response = http.get('https://script.hotjar.com/modules.55241fd65a1af5a1837b.js')

    response = http.get('https://status.k6.io/api/v2/status.json', {
      headers: {
        accept: '*/*',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        'if-none-match': 'W/"9a90231ec190f6a6eb87cc6a66b04bfe"',
        origin: 'https://k6.io',
        referer: 'https://k6.io/',
        'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36',
      },
    })

    response = http.get('https://k6.io/data/jobs-positions.json')

    response = http.get('https://k6.io/3711-4c2c8a867cf3aa0ca3b1.js')

    response = http.get('https://k6.io/images/animations/home/any-scale/dashboard/img_0.svg')

    response = http.get('https://k6.io/images/animations/home/any-scale/flags/17.svg')

    response = http.get('https://k6.io/images/animations/home/any-scale/flags/16.svg')

    response = http.get('https://k6.io/images/animations/home/any-scale/flags/15.svg')

    response = http.get('https://k6.io/images/animations/home/any-scale/flags/14.svg')

    response = http.get('https://k6.io/images/animations/home/any-scale/flags/13.svg')

    response = http.get('https://k6.io/images/animations/home/any-scale/flags/12.svg')

    response = http.get('https://k6.io/images/animations/home/any-scale/flags/11.svg')

    response = http.get('https://k6.io/images/animations/home/any-scale/flags/10.svg')

    response = http.get('https://k6.io/images/animations/home/any-scale/flags/9.svg')

    response = http.get('https://k6.io/images/animations/home/any-scale/flags/8.svg')

    response = http.get('https://k6.io/images/animations/home/any-scale/flags/7.svg')

    response = http.get('https://k6.io/images/animations/home/any-scale/flags/6.svg')

    response = http.get('https://k6.io/images/animations/home/any-scale/flags/5.svg')

    response = http.get('https://k6.io/images/animations/home/any-scale/flags/4.svg')

    response = http.get('https://k6.io/images/animations/home/any-scale/flags/3.svg')

    response = http.get('https://k6.io/images/animations/home/any-scale/flags/2.svg')

    response = http.get('https://k6.io/images/animations/home/any-scale/flags/1.svg')

    response = http.get(
      'https://tr-rc.lfeeder.com/?sid=ywVkO4X2AnO8Z6Bj&data=eyJnYVRyYWNraW5nSWRzIjpbIlVBLTE1ODE5NjU3Ny0xIl0sImdhTWVhc3VyZW1lbnRJZHMiOlsiRy1ZUUUxOVdFQjM2Il0sImdhQ2xpZW50SWRzIjpbIjMzMDE3MjA3NS4xNjY5MDEwNzE4Il0sImNvbnRleHQiOnsibGlicmFyeSI6eyJuYW1lIjoibGZ0cmFja2VyIiwidmVyc2lvbiI6IjIuNTguMCJ9LCJwYWdlVXJsIjoiaHR0cHM6Ly9rNi5pby8iLCJwYWdlVGl0bGUiOiJMb2FkIHRlc3RpbmcgZm9yIGVuZ2luZWVyaW5nIHRlYW1zIHwgR3JhZmFuYSBrNiIsInJlZmVycmVyIjoiaHR0cHM6Ly9sb2FkaW1wYWN0LmNvbS8ifSwiZXZlbnQiOiJ0cmFja2luZy1ldmVudCIsImNsaWVudEV2ZW50SWQiOiI4NmY1MjA3YjJhNTM0ZGY4Iiwic2NyaXB0SWQiOiJ5d1ZrTzRYMkFuTzhaNkJqIiwiY29va2llc0VuYWJsZWQiOnRydWUsImNvbnNlbnRMZXZlbCI6Im5vbmUiLCJhbm9ueW1pemVJcCI6ZmFsc2UsImxmQ2xpZW50SWQiOiJMRjEuMS40OTRiNTkxYzkwNThhMWJjLjE2NjkxOTkxNjczODUiLCJmb3JlaWduQ29va2llcyI6W10sInByb3BlcnRpZXMiOnt9LCJhdXRvVHJhY2tpbmdFbmFibGVkIjp0cnVlLCJhdXRvVHJhY2tpbmdNb2RlIjoib25fc2NyaXB0X2xvYWQifQ==',
      {
        headers: {
          accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          referer: 'https://k6.io/',
          'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'image',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'cross-site',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.get(
      'https://www.google-analytics.com/collect?v=1&_v=j98&a=1994761539&t=pageview&_s=1&dl=https%3A%2F%2Fk6.io%2F&dr=https%3A%2F%2Floadimpact.com%2F&ul=en-gb&de=UTF-8&dt=Load%20testing%20for%20engineering%20teams%20%7C%20Grafana%20k6&sd=30-bit&sr=1470x956&vp=1020x737&je=0&_u=SDCAAUABAAAAAAAAI~&jid=&gjid=&cid=330172075.1669010718&tid=UA-158196577-1&_gid=1935454760.1669010718&gtm=2oub90&z=10177496',
      {
        headers: {
          accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          referer: 'https://k6.io/',
          'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'image',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'cross-site',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.get('https://vars.hotjar.com/box-c6ca1c87e308a39aabb76b56ba54398b.html')

    response = http.post(
      'https://in.hotjar.com/api/v2/client/sites/1699068/visit-data?sv=6',
      '{"r_value":1,"is_vpv":false,"session_only":false,"rec_value":0.7666666666666666,"user_id":"15479a8f-d042-5b8b-a029-36f6897e29cc"}',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          'content-type': 'text/plain; charset=UTF-8',
          origin: 'https://k6.io',
          referer: 'https://k6.io/',
          'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'cross-site',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.get('https://k6.io/manifest.webmanifest')

    response = http.get('https://k6.io/icons/icon-144x144.png?v=b39a6f3e0dc925c8ec4f77e0a65490e9')

    response = http.get('https://k6.io/page-data/privacy-policy/page-data.json', {
      headers: {
        accept: 'application/signed-exchange;v=b3;q=0.7,*/*;q=0.8',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        cookie:
          '_ga=GA1.2.330172075.1669010718; _gid=GA1.2.1935454760.1669010718; fs_uid=#1AHVA#5032994029588480:5938461543124992:::#/1700632104; fs_cid=1.0; _gat=1; _lfa=LF1.1.494b591c9058a1bc.1669199167385; _gat_gtag_UA_158196577_1=1; _hjFirstSeen=1; _hjIncludedInSessionSample=1; _hjSession_1699068=eyJpZCI6ImVhYTA5MDEwLTUxMTQtNGQ1ZS04ZDBiLTI2ZWFmM2QxODJhYSIsImNyZWF0ZWQiOjE2NjkxOTkxNjc3MDAsImluU2FtcGxlIjp0cnVlfQ==; _hjIncludedInPageviewSample=1; _hjAbsoluteSessionInProgress=0; _hjSessionUser_1699068=eyJpZCI6IjE1NDc5YThmLWQwNDItNWI4Yi1hMDI5LTM2ZjY4OTdlMjljYyIsImNyZWF0ZWQiOjE2NjkxOTkxNjc2ODEsImV4aXN0aW5nIjp0cnVlfQ==',
        origin: 'https://k6.io',
        purpose: 'prefetch',
        referer: 'https://k6.io/',
        'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36',
      },
    })

    response = http.get('https://k6.io/page-data/cloud/page-data.json', {
      headers: {
        accept: 'application/signed-exchange;v=b3;q=0.7,*/*;q=0.8',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        cookie:
          '_ga=GA1.2.330172075.1669010718; _gid=GA1.2.1935454760.1669010718; fs_uid=#1AHVA#5032994029588480:5938461543124992:::#/1700632104; fs_cid=1.0; _gat=1; _lfa=LF1.1.494b591c9058a1bc.1669199167385; _gat_gtag_UA_158196577_1=1; _hjFirstSeen=1; _hjIncludedInSessionSample=1; _hjSession_1699068=eyJpZCI6ImVhYTA5MDEwLTUxMTQtNGQ1ZS04ZDBiLTI2ZWFmM2QxODJhYSIsImNyZWF0ZWQiOjE2NjkxOTkxNjc3MDAsImluU2FtcGxlIjp0cnVlfQ==; _hjIncludedInPageviewSample=1; _hjAbsoluteSessionInProgress=0; _hjSessionUser_1699068=eyJpZCI6IjE1NDc5YThmLWQwNDItNWI4Yi1hMDI5LTM2ZjY4OTdlMjljYyIsImNyZWF0ZWQiOjE2NjkxOTkxNjc2ODEsImV4aXN0aW5nIjp0cnVlfQ==',
        origin: 'https://k6.io',
        purpose: 'prefetch',
        referer: 'https://k6.io/',
        'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36',
      },
    })

    response = http.get('https://k6.io/page-data/open-source/page-data.json', {
      headers: {
        accept: 'application/signed-exchange;v=b3;q=0.7,*/*;q=0.8',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        cookie:
          '_ga=GA1.2.330172075.1669010718; _gid=GA1.2.1935454760.1669010718; fs_uid=#1AHVA#5032994029588480:5938461543124992:::#/1700632104; fs_cid=1.0; _gat=1; _lfa=LF1.1.494b591c9058a1bc.1669199167385; _gat_gtag_UA_158196577_1=1; _hjFirstSeen=1; _hjIncludedInSessionSample=1; _hjSession_1699068=eyJpZCI6ImVhYTA5MDEwLTUxMTQtNGQ1ZS04ZDBiLTI2ZWFmM2QxODJhYSIsImNyZWF0ZWQiOjE2NjkxOTkxNjc3MDAsImluU2FtcGxlIjp0cnVlfQ==; _hjIncludedInPageviewSample=1; _hjAbsoluteSessionInProgress=0; _hjSessionUser_1699068=eyJpZCI6IjE1NDc5YThmLWQwNDItNWI4Yi1hMDI5LTM2ZjY4OTdlMjljYyIsImNyZWF0ZWQiOjE2NjkxOTkxNjc2ODEsImV4aXN0aW5nIjp0cnVlfQ==',
        origin: 'https://k6.io',
        purpose: 'prefetch',
        referer: 'https://k6.io/',
        'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36',
      },
    })

    response = http.get('https://k6.io/page-data/privacy-policy/page-data.json')

    response = http.get('https://k6.io/page-data/cloud/page-data.json')

    response = http.get('https://k6.io/page-data/open-source/page-data.json')

    response = http.get(
      'https://k6.io/component---src-pages-privacy-policy-js-113474a76314515b9a90.js',
      {
        headers: {
          accept: 'application/signed-exchange;v=b3;q=0.7,*/*;q=0.8',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          cookie:
            '_ga=GA1.2.330172075.1669010718; _gid=GA1.2.1935454760.1669010718; fs_uid=#1AHVA#5032994029588480:5938461543124992:::#/1700632104; fs_cid=1.0; _gat=1; _lfa=LF1.1.494b591c9058a1bc.1669199167385; _gat_gtag_UA_158196577_1=1; _hjFirstSeen=1; _hjIncludedInSessionSample=1; _hjSession_1699068=eyJpZCI6ImVhYTA5MDEwLTUxMTQtNGQ1ZS04ZDBiLTI2ZWFmM2QxODJhYSIsImNyZWF0ZWQiOjE2NjkxOTkxNjc3MDAsImluU2FtcGxlIjp0cnVlfQ==; _hjIncludedInPageviewSample=1; _hjAbsoluteSessionInProgress=0; _hjSessionUser_1699068=eyJpZCI6IjE1NDc5YThmLWQwNDItNWI4Yi1hMDI5LTM2ZjY4OTdlMjljYyIsImNyZWF0ZWQiOjE2NjkxOTkxNjc2ODEsImV4aXN0aW5nIjp0cnVlfQ==',
          purpose: 'prefetch',
          referer: 'https://k6.io/',
          'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'same-origin',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.get('https://k6.io/component---src-pages-cloud-js-013923d992ce6a040925.js', {
      headers: {
        accept: 'application/signed-exchange;v=b3;q=0.7,*/*;q=0.8',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        cookie:
          '_ga=GA1.2.330172075.1669010718; _gid=GA1.2.1935454760.1669010718; fs_uid=#1AHVA#5032994029588480:5938461543124992:::#/1700632104; fs_cid=1.0; _gat=1; _lfa=LF1.1.494b591c9058a1bc.1669199167385; _gat_gtag_UA_158196577_1=1; _hjFirstSeen=1; _hjIncludedInSessionSample=1; _hjSession_1699068=eyJpZCI6ImVhYTA5MDEwLTUxMTQtNGQ1ZS04ZDBiLTI2ZWFmM2QxODJhYSIsImNyZWF0ZWQiOjE2NjkxOTkxNjc3MDAsImluU2FtcGxlIjp0cnVlfQ==; _hjIncludedInPageviewSample=1; _hjAbsoluteSessionInProgress=0; _hjSessionUser_1699068=eyJpZCI6IjE1NDc5YThmLWQwNDItNWI4Yi1hMDI5LTM2ZjY4OTdlMjljYyIsImNyZWF0ZWQiOjE2NjkxOTkxNjc2ODEsImV4aXN0aW5nIjp0cnVlfQ==',
        purpose: 'prefetch',
        referer: 'https://k6.io/',
        'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'no-cors',
        'sec-fetch-site': 'same-origin',
        'user-agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36',
      },
    })

    response = http.get(
      'https://k6.io/component---src-pages-open-source-js-fd428a186381af02f8f5.js',
      {
        headers: {
          accept: 'application/signed-exchange;v=b3;q=0.7,*/*;q=0.8',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          cookie:
            '_ga=GA1.2.330172075.1669010718; _gid=GA1.2.1935454760.1669010718; fs_uid=#1AHVA#5032994029588480:5938461543124992:::#/1700632104; fs_cid=1.0; _gat=1; _lfa=LF1.1.494b591c9058a1bc.1669199167385; _gat_gtag_UA_158196577_1=1; _hjFirstSeen=1; _hjIncludedInSessionSample=1; _hjSession_1699068=eyJpZCI6ImVhYTA5MDEwLTUxMTQtNGQ1ZS04ZDBiLTI2ZWFmM2QxODJhYSIsImNyZWF0ZWQiOjE2NjkxOTkxNjc3MDAsImluU2FtcGxlIjp0cnVlfQ==; _hjIncludedInPageviewSample=1; _hjAbsoluteSessionInProgress=0; _hjSessionUser_1699068=eyJpZCI6IjE1NDc5YThmLWQwNDItNWI4Yi1hMDI5LTM2ZjY4OTdlMjljYyIsImNyZWF0ZWQiOjE2NjkxOTkxNjc2ODEsImV4aXN0aW5nIjp0cnVlfQ==',
          purpose: 'prefetch',
          referer: 'https://k6.io/',
          'sec-ch-ua': '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'same-origin',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36',
        },
      }
    )
  })

  // Automatically added sleep
  sleep(1)
}

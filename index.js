const pupperteer = require("puppeteer")
const fs = require("fs")

const func = async () => {
  const browser = await pupperteer.launch()
  const page = await browser.newPage()

  ////////////////////////
  // for absolute execPath
  let link = "https://www.bizzworldcommunications.com"
  link = "D:/web development/html-to-pdf/index.html"

  await page.goto(link, { waitUntil: "networkidle0" })

  ////////////////////
  // for relateve path
  // const html = fs.readFileSync('index.html', 'utf-8');
  // console.log({html})
  // await page.setContent(html, { waitUntil: 'networkidle0' });

  await page.screenshot({ path: "result.png" })
  await page.emulateMediaType("screen")

  const pdf = await page.pdf({
    path: "result.pdf",
    format: "a4",
    printBackground: true,
  })
}

func()

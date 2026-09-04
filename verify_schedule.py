from playwright.sync_api import sync_playwright

CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
URL = "https://bobbywong2008-art.github.io/cn-fbmap/"

with sync_playwright() as p:
    b = p.chromium.launch(executable_path=CHROME, headless=True,
                          args=["--no-sandbox", "--disable-gpu", "--disable-dev-shm-usage"])
    pg = b.new_page(viewport={"width": 1440, "height": 1000})
    pg.goto(URL, wait_until="domcontentloaded", timeout=60000)
    pg.wait_for_timeout(3500)
    pg.click("#cyflBanner", timeout=15000)
    pg.wait_for_selector("#scheduleView.open", timeout=15000)
    pg.wait_for_timeout(1500)
    info = pg.evaluate("""() => {
      const matches = [...document.querySelectorAll('.sch-match')];
      const m = matches[0];
      const left = m ? m.querySelector('.tm-left') : null;
      const right = m ? m.querySelector('.tm-right') : null;
      const cs = m ? getComputedStyle(m) : null;
      const lcs = left ? getComputedStyle(left) : null;
      const rcs = right ? getComputedStyle(right) : null;
      return {
        matchCount: matches.length,
        gridDisplay: cs ? cs.display : 'NONE',
        gridCols: cs ? cs.gridTemplateColumns : 'NONE',
        leftAlign: lcs ? lcs.textAlign : 'NONE',
        rightAlign: rcs ? rcs.textAlign : 'NONE',
        firstRowText: m ? m.innerText.replace(/\\n/g,' | ') : 'NONE'
      };
    }""")
    print("VERIFY", info)
    b.close()

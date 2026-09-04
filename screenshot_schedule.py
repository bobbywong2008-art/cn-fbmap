import sys
from playwright.sync_api import sync_playwright

CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
URL = "https://bobbywong2008-art.github.io/cn-fbmap/"
OUT = "/Users/zaiwanqu/WorkBuddy/2026-07-13-14-08-11/schedule_shot.png"

with sync_playwright() as p:
    browser = p.chromium.launch(
        executable_path=CHROME,
        headless=True,
        args=["--no-sandbox", "--disable-gpu", "--disable-dev-shm-usage"],
    )
    page = browser.new_page(viewport={"width": 1440, "height": 1000}, device_scale_factor=2)
    page.goto(URL, wait_until="domcontentloaded", timeout=60000)
    page.wait_for_timeout(4000)  # let JS render banner
    # open schedule view
    page.click("#cyflBanner", timeout=15000)
    page.wait_for_selector("#scheduleView.open", timeout=15000)
    page.wait_for_timeout(1800)  # let cards/match rows render
    # scroll a bit to show several cards with match rows
    page.evaluate("document.querySelector('#scheduleView .sch-body')?.scrollTo(0, 120)")
    page.wait_for_timeout(600)
    page.screenshot(path=OUT, full_page=False)
    browser.close()
    print("SCREENSHOT_SAVED", OUT)

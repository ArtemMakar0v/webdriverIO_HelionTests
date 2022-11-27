
class GlobalPage{
    async openPage(PageURl:string, expectedPageURl:string){
        await browser.url(PageURl);
        await expect(browser).toHaveUrl(expectedPageURl);
    }
}

export default new GlobalPage();
import GlobalPage from "../../pages/GlobalPage";
import SearchBarPage from "../../pages/components/SearchBarPage";
import ResultPage from '../../pages/ResultPage';
import {helionHomePage} from "../../config/pagesURl";
import {searchPageUrl} from "../../config/pagesURl";
import {searchPhrase, searchResultTitle} from '../../config/data';


describe("E2E-SearchBar", async() => {

    it("Should open home page and visible search bar", async() => {
        await GlobalPage.openPage(helionHomePage, helionHomePage);
        await SearchBarPage.searchBarInVisible();
    })

    it("Should click on Search icon", async() => {
        await SearchBarPage.clickOnSearchIcon();
        await expect(browser).toHaveUrl(helionHomePage);
    })

    it("Should type search value and verify popup", async() =>{
        await SearchBarPage.typeSearchPhrase(searchPhrase);
        await SearchBarPage.suggestPopupIsVisible();
    })

    it("Should click on see all books btn", async () => {
        await SearchBarPage.clickAllSeeBtn();
        await expect(browser).toHaveUrl(searchPageUrl);
    })

    it("Should verify visible title and number of books", async () =>{
        const title:string = await ResultPage.getPageTitle();
        const numberOfBooks:number = await ResultPage.getNumberOfBooks();
        await expect(title).toContain(searchResultTitle);
        await expect(numberOfBooks).toEqual(20);
    })
})

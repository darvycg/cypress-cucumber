// @ts-check
export default class Home {

    public static getLinksByText(linkText: string) {
        return cy.contains(linkText);
    }
}
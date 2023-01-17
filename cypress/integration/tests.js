// 1. display the first 5 hotels from the "utils/hotelData.js" in the Home component.

describe("Redirect to login page when the user is not logged in", () => {
    it("Redirect to login page when the user is not logged in", () => {
        cy.visit("http://localhost:3000/");
        cy.get(".card");
        cy.get(".card").should("have.length", 5);
    });
});

// 2. Design the navbar component in such a way that it takes an array of arrays as a props in
// which the first element of each array element is the text to be displayed for the link
// , the second element is the address to which the link should point and the third link should be
// any on click functions if any that should be executed when the user clicks on the link

// After doing this use the Navbar component in the Home component to display the links "Login" which
// redirects to "/login" and  "Main" which redirects to "/main" only when the user is logged in otherwise
// it redirects the user to "/login".

// To check if the user if logged in or not we check if keys "username" and "password"
// are present in the local storage or not.

// For now for the "/login" route just create a "Login" component and display anything , we
// will be building it in the later questions.

describe("Redirect to login page when the user is not logged in", () => {
    it("Redirect to login page when the user is not logged in", () => {
        cy.visit("http://localhost:3000/");
        cy.get("#Login");
        cy.get("#Login").click();
        cy.location("pathname").should("eq", "/login");
    });
});

describe("Redirect to login page when the user is not logged in", () => {
    it("Redirect to login page when the user is not logged in", () => {
        cy.visit("http://localhost:3000/");
        cy.get("#Main");
        cy.get("#Main").click();
        cy.location("pathname").should("eq", "/login");
    });
});

// 3. In this question we will be building the "Login" component
// The "Login" component should be redered when we go to the route "/login"
// The login component has been partially written for you.
// Complete the setUsername ane setPassword function which update the states
// username and password .
// After this complete the handleClick function which is executed when the user clicks on the submit button.
// This function should check if this set of username and passwrod is present in the "utils/userData.js" file or
// not , if the entered username and password is correct redirect the user to "/" route and if the username or password
// is wrong clear the inputs and do not redirect anywhere

describe("Checking for login authentication when the username and password are correct", () => {
    it("Checking for login authentication when the username and password are correct", () => {
        cy.visit("http://localhost:3000/");
        cy.get("#Login");
        cy.get("#Login").click();
        cy.get("#username").type("a");
        cy.get("#password").type("1");
        cy.get("#submit").click();
        cy.location("pathname").should("eq", "/");
    });
});

describe("Checking for login authentication when the username and password are incorrect", () => {
    it("Checking for login authentication when the username and password are incorrect", () => {
        cy.visit("http://localhost:3000/");
        cy.get("#Login");
        cy.get("#Login").click();
        cy.get("#username").type("A");
        cy.get("#password").type("1");
        cy.get("#submit").click();

        cy.location("pathname").should("eq", "/login");
    });
});

// 4. When the user is logged in , using context API remove the login button from the "Home" component
// when the user is redirected to the "/" route after successful login

describe("Checking for login link to be removed from the Home component when the user is successfully logged in", () => {
    it("Checking for login link to be removed from the Home component when the user is successfully logged in", () => {
        cy.visit("http://localhost:3000/");
        cy.get("#Login");
        cy.get("#Login").click();
        cy.get("#username").type("a");
        cy.get("#password").type("1");
        cy.get("#submit").click();
        cy.location("pathname").should("eq", "/");
        cy.get("#Login").should("not.exist");
    });
});

// 5. When the user is logged in and he clicks on the Main option in the navbar
// he should be redirected to the "/main" route where we will render the "MainPage" Component
// In the "MainPage" Component display all the hotels present in the "utils/hotelData.js".
// For displaying the hotel we will create a "Hotel" component.
// The hotel component should contain the following features:
// It should contain a "Add to favourites" button which adds the hotel to the list of favourites
// and stores it in the local storage.
// The "Add to favourites" button should have an id of "button"

describe("checking for the MainPage and Hotel component", () => {
    it("checking for the MainPage and Hotel component", () => {
        cy.visit("http://localhost:3000/");
        cy.get("#Login");
        cy.get("#Login").click();
        cy.get("#username").type("a");
        cy.get("#password").type("1");
        cy.get("#submit").click();
        cy.location("pathname").should("eq", "/");
        cy.get("#Main").click();
        cy.location("pathname").should("eq", "/main");
        cy.get(".card").should("have.length", 15);
        cy.get(".button").each(($el, index, $list) => {
            cy.wrap($el).click();
        });
        cy.window().then((win) => {
            const favourites = JSON.parse(
                win.localStorage.getItem("favourites")
            );
            cy.wrap(favourites).should("have.length", 15);
        });
    });
});

// 6. The "MainPage" should also display the "Navbar" component
// The "Navbar" component should contain two links
// First link should contiain the text "Favourites" and should redirect to "/favourites"
// and the second link should contain the text "Logout" and should redirect to "/".
// The logout link will also have an onclick function which will pe passed in the array
// as the third element as we discussed in the earlier question where we created the "Navbar" component.
// This logout option should have an on click function which removes the username and password
// that we had saved in the local storage and also the list of favourites that we had saved
// in the local storage and should redirect the user to the "/" route.
// For the "/favourites" route we will render a "Favourites" component which we will create
// in the later questions . For now you can display anything in the "Favourites" component.
// Also since we used contextAPI to see whether the user is logged in or not
// so after logging out when the user is redirected to the "/" route he should be able to see the login
// option again.

describe("checking for the Navbar component links in MainPage component", () => {
    it("checking for the Navbar component links in MainPage component", () => {
        cy.visit("http://localhost:3000/");
        cy.get("#Login");
        cy.get("#Login").click();
        cy.get("#username").type("a");
        cy.get("#password").type("1");
        cy.get("#submit").click();
        cy.location("pathname").should("eq", "/");
        cy.get("#Main").click();
        cy.location("pathname").should("eq", "/main");
        cy.get("#Favourites");
        cy.get("#Favourites").click();
        cy.location("pathname").should("eq", "/favourites");
        cy.get("#Logout").click();
        cy.location("pathname").should("eq", "/");
        cy.window().then((win) => {
            cy.wrap(win.localStorage.getItem("favourites")).should("not.exist");
            cy.wrap(win.localStorage.getItem("username")).should("not.exist");
            cy.wrap(win.localStorage.getItem("password")).should("not.exist");
        });

        cy.get("#Login");
    });
});

// 7. In the "MainPage" component when the user clicks on the "Favourites" option
// he is redirected to the "/favourites" route which renders the "Favourites" component
// Now we will complete the "Favourites" component.
// The Favourites component should contain a navbar and the list of all the hotels that the user has
// selected which we saved in the local storage in the earlier questions.
// In this question you have to display all the hotels that have been added as
// favourites by the user
// All the hotels rendered in the "Favourites" component should have a delete button
// which removes them from the list of favourite elements both from the page and the local storage

describe("checking for  Favourites component", () => {
    it("checking for  Favourites component", () => {
        cy.visit("http://localhost:3000/");
        cy.get("#Login");
        cy.get("#Login").click();
        cy.get("#username").type("a");
        cy.get("#password").type("1");
        cy.get("#submit").click();
        cy.location("pathname").should("eq", "/");
        cy.get("#Main").click();
        cy.location("pathname").should("eq", "/main");
        cy.get(".card").should("have.length", 15);
        cy.get(".button").each(($el, index, $list) => {
            cy.wrap($el).click();
        });
        cy.window().then((win) => {
            const favourites = JSON.parse(
                win.localStorage.getItem("favourites")
            );
            cy.wrap(favourites).should("have.length", 15);
        });
        cy.get("#Favourites").click();
        cy.get(".card").should("have.length", 15);
        cy.get("button").each(($el, index, $list) => {
            cy.wrap($el).click();
        });
        cy.window().then((win) => {
            const favourites = JSON.parse(
                win.localStorage.getItem("favourites")
            );
            cy.wrap(favourites).should("have.length", 0);
        });
    });
});

// 8. Add the "Navbar" component to the "MainPage" component
// The "Navbar" should contain two links , the first link should have
// the text "Back" and should redirect to "/main" and the second link should contain the
// text "Logout" which should remove the username, password and favourites from the local storage
// and redirect the user to "/".
// As we had used contextAPI to check if the user if logged in or not so after logging out when
// the user is redirect to "/" route the login option should be visible to the user

describe("checking for Navbar in the Favourites component", () => {
    it("checking for Navbar in the Favourites component", () => {
        cy.visit("http://localhost:3000/");
        cy.get("#Login");
        cy.get("#Login").click();
        cy.get("#username").type("a");
        cy.get("#password").type("1");
        cy.get("#submit").click();
        cy.location("pathname").should("eq", "/");
        cy.get("#Main").click();
        cy.location("pathname").should("eq", "/main");
        cy.get(".card").should("have.length", 15);
        cy.get(".button").each(($el, index, $list) => {
            cy.wrap($el).click();
        });
        cy.window().then((win) => {
            const favourites = JSON.parse(
                win.localStorage.getItem("favourites")
            );
            cy.wrap(favourites).should("have.length", 15);
        });
        cy.get("#Favourites").click();
        cy.get(".card").should("have.length", 15);
        cy.get("button").each(($el, index, $list) => {
            cy.wrap($el).click();
        });
        cy.window().then((win) => {
            const favourites = JSON.parse(
                win.localStorage.getItem("favourites")
            );
            cy.wrap(favourites).should("have.length", 0);
        });
        cy.get("#Logout").click();
        cy.location("pathname").should("eq", "/");
        cy.window().then((win) => {
            cy.wrap(win.localStorage.getItem("favourites")).should("not.exist");
            cy.wrap(win.localStorage.getItem("username")).should("not.exist");
            cy.wrap(win.localStorage.getItem("password")).should("not.exist");
        });

        cy.get("#Login");
    });
});

// 9. When the user adds a hotel to "Favourites" then the "add to favourite" button for that
// hotel should be disabled and the button text should have "line-through" text and when the hotel is removed from
// the "Favourites" list then the "add to favourite" button should be enabled and the "line-through"
// effect on the button text should be removed

describe("Checking for the 'Add to Favourites' button for the hotels to be disabled when they are added to favourites and to be enabled again when they are removed from favourites", () => {
    it("Checking for the 'Add to Favourites' button for the hotels to be disabled when they are added to favourites and to be enabled again when they are removed from favourites", () => {
        cy.visit("http://localhost:3000/");
        cy.get("#Login");
        cy.get("#Login").click();
        cy.get("#username").type("a");
        cy.get("#password").type("1");
        cy.get("#submit").click();
        cy.location("pathname").should("eq", "/");
        cy.get("#Main").click();
        cy.location("pathname").should("eq", "/main");
        cy.get(".card").should("have.length", 15);

        cy.get(".button").each(($el, index, $list) => {
            cy.wrap($el).should("not.be.disabled");
        });
        cy.get(".button").each(($el, index, $list) => {
            cy.wrap($el).click();
        });
        cy.get(".button").each(($el, index, $list) => {
            cy.wrap($el).should("have.css", "pointer-events", "none");
        });
        cy.get("#Favourites").click();
        cy.get("button").each(($el, index, $list) => {
            cy.wrap($el).click();
        });
        cy.get("#Back").click();
        cy.get(".button").each(($el, index, $list) => {
            cy.wrap($el).should("not.be.disabled");
        });
    });
});

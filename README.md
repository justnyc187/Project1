 USER STORY
 GOAT is a sneaker reselling app where users can buy and sell sneakers as well
 For our project we focused on the inventory aspect of GOAT App, as well as its clean look


User will Sign up with email address and password, which will both be required 
If user does not have an account already they will be redirected to the register page, where they will have to register first before logging in


** As we progressed we decided to change a few things with the layout, but we wanted to leave the original user story to see how it evolved **

Home page will show --- /goat
    - a picture of the most recently dropped sneaker (actually a video)
    - a scroll bar of various "hot" sneakers (moved this to show page)
    - profile button (we decided against this, but in the future a profile page will be added)
    - home button
    - add Sneaker button

Profile Button --- /goat/profile
    - will Lead user to the profile page which will display user's sneaker inventory

Home Button --- /goat
    - home button will be static and allow user to click button and return back to home page whenever need be

Add Sneaker button  --- /goat/newSneaker
    -User will be able to add a new sneaker using a form (form will have values that have been defined in our newSneakerSchema)
        - form will include, Style, Size, Condition and Quantity
    - User will be able to edit new sneaker --- /goat/id/edit
    - User will be able to delete new sneaker --- /goat/id/edit

Show Page
    -information about the show selected
    -picture of show 
    -scroll bar of current "hot" items (future plan would be to add the images that are uploaded from user into scroll bar on the show page, or possibley the home page)

Edit/Add new
    -we added the same form design to both the 'Edit' and 'Add New' pages to keep it cohesive with the design of the rest of the app

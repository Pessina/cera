How to use

1 - In the root folder of the project run: "yarn start"
2 - Copy the url displayed on terminal to your browser

Approach

1 - The first step was to look the layout and think about what are the components on this screen.
2 - The second step was add the colors and sizes to css variables.
3 - The third step was create the components using mock data.
4 - The fort step was to integrate with the API and start using real data.
5 - The fifth was improve the code: changing classes names, creating more components, removing unnecessary code, etc.

The task it's simple but I tried to show how I will structure a big project.

1 - Create separated folders for the API, Components, Assets, Utils ...
2 - Each DB model have it's own file, so we can place all get, post, put, delete requests in a single file
3 - The components follow the Atomic Design Pattern, so they are very reusable and easy to do the maintenance
4 - All the API calls have error handling

Extra: I don't know how the mobile design should be. But I added the auto-fill, property to the grid, so the design will not break on the first resize of the screen.

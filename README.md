# Starter React App with Tailwind CSS

This starter template was set up by me, [John Pittenger](https://github.com/Gittenger/tailwind-react-starter). It uses the [Create React App](https://github.com/facebook/create-react-app) template as a base.

## Features

This template is designed for you to hit the ground running and begin rapidly developing components harnessing both the powers of React as well as Tailwind in order to maximize your productivity.

## `Tailwind CSS`

Featured is a basic set-up of Tailwind, with a couple tweaks to jump start you into customizing it to fit your needs.

#### _Dark Mode_

I've set the Tailwind "dark" mode to be set via a class designation. In this case if you wish to use dark mode, simply assign the class "dark" to the HTML tag in the top level `index.html` file in the 'public' directory.

#### _Fonts_

I've imported a custom font for demonstration purposes. Check the `index.css` file for details. Using the same technique, you can upload as many custom fonts as you wish, then easily refer to them using the class designation `class="font-myClassName"`. You can set this class name to be whatever you like by extending the `fontFamily` option in `tailwind.config.js`.

#### _Other extensions_

Similarly, you can extend any option in Tailwind and add your own custom class names. In this project I extended `"borderWidth"` for demonstration. See the [Tailwind docs](https://tailwindcss.com/docs/installation) for more information.

#### _Variants_

I've included a few sample variants in the configuration to give an idea of what's easily possible with Tailwind. For example, to be able to use the 'visited' state variant with text colors, I added the `visited` variant to the `textColor` option in the config.

#### _Plugins_

By default I've included the Tailwind 'forms' plugin, as it's very useful if you end up wanting to add customiztion to form inputs. Unfortunately, oftentimes I've found this to be very difficult using Tailwind, but this plugin solved most issues that I've encountered with it, which is why I'm including it here as a strong recommendation if you're using this Tailwind.

#### _Tailwind components_

If you wish to extract a Tailwind component using just Tailwind, follow the method in the `index.css` file where components have been extracted using the `@apply` directive. This can be useful for setting high level styles, although in this project it's primarily optimal to use React for extracting most components.

## `React`

#### _Images_

There is an image index started for you so you can easily import images, SVG's, and other icons into your React project and use them throughout your code with straightforward imports.

#### _Pages_

The pagination of this project is set up using React Context and a simple system whereby you can add pages using the `pages-index.js` and the `PageComponent.jsx` files. When you add a new `"Page Content"` file to the index, it will automatically be built as a page using the `Layout` component. Then, simply add it to the `Routes.jsx` file and you can easily route to that page based on your designation.

## **_IMPORTANT_**

### `.prettierrc`

The option `quoteProps` must be set to `preserve` if using Prettier. This is because the Tailwind configuration file requires quoted properties for option selection, and by default Prettier will remove these upon formatting.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

Check out the [Tailwind documentation here](https://tailwindcss.com/docs/installation).

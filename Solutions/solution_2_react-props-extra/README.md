# React - Child Components and .map()

Now let's make the app we just coded together work even more like a typical React app...

### Part 1

1. Create five new components in the `src/components` folder:

>- `CardImg` (when used, this will be a child of `BootstrapCard`)
>- `CardBody` (when used, this will be a child of `BootstrapCard`)
>- `CardTitle` (when used, this will be a child of `CardBody`)
>- `CardText` (when used, this will be a child of `CardBody`)
>- `CardButton` (when used, this will be a child of `CardBody`)

Each of these five components will be responsible for rendering **one** of the five JSX elements which make up the `BootstrapCard` component.

2. When you have created your new components, make sure to `import` them to the `BootstrapCard.js` file.

3. Now try to change the `BootstrapCard` component so it is using the new **child elements** to do everything it used to do. :-)

**Note:** You will need to keep an eye on your `props`, to make sure any data is being sent to **exactly** where it will be rendered!

---

### Bonus - for anyone who finishes Part 1 early!

4. Once everything is working as you expect, please navigate to `App.js`.

5. Inside your `App` component, you should try to use the array method **.map()** with the **`data`** array variable to **dynamically** create as many instances of `<BootstrapCard />` as you need when the page loads.

6. This means that if you have **3** "singer" objects inside the **data** array, **3x** `<BootstrapCard />` should be rendered in the browser, each containing the details of a different singer.

To test if this is working, add a **4th** "singer" object to your **data** array and save your changes. If you have succeeded, now **4x** `<BootstrapCard />` should be **automatically** rendered in the browser.

Good luck, and have fun. :-)
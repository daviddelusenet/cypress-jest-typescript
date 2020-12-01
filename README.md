# cypress-jest-typescript

- Clone this repo.
- Run `npm i` to install the dependencies.
- Run `npm run check` to do a types check. This will throw errors because of the type collisions between Cypress and Jest. Because of the dedicated Cypress `tsconfig.json` in the `cypress` folder this doesn't happen in VS Code. The TSC compiler on the other hand can't handle multiple `tsconfig.json` files so that's why it throws these errors.
- This can be fixed by uncommenting the `exclude` line in the root `tsconfig.json` file. However, if you now run `npm run check` the entire `cypress` folder won't be type checked.

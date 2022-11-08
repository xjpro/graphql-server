# Apollo Server Template

My attempt to create a scalable GraphQL server. Different types of data are broken up
into "features," each with its own folder. Each feature folder contains the
components required to make use of it. The full schema is stitched
together automatically in using `@graphql-tools` making use of file names.

Definitions used within feature folders:

- resolver - a graphql resolver, uses models to perform requested operations
- model - service for completing operations required by resolvers, this can
  take a variety of forms including making HTTP calls to 3rd parties, working with
  entities in the database, etc.
  be with entities in the database, HTTP calls to other
- entity - db specific table/collection

Note: models and entities can (and should!) be replaced by an ORM like
sequelize or mongoose if possible.

## Usage

```
yarn            install things
yarn build      build production dist folder
yarn start      run out of dist folder
yarn dev        run in development with folder watcher
yarn generate   codegen new TS types from gql files
```

## Adding A Feature

1. Add feature queries and mutations to `features/root.gql`
2. Make new [feature] folder
3. Create typedef in [feature]/[feature].gql
4. Create [feature].resolver.ts to resolve everything added to root.gql,
   making use of a model if necessary
5. Run `yarn generate` to regenerate TS types as necessary

## Restaurant-List-Application

### About:

A simple web application that allows users to view a list of restaurants.

### Requirements

#### Frontend

- [x] **React and TypeScript**: The frontend should be built using React and TypeScript<br />
- [x] **Restaurant List**: Display a list of restaurants identical to the provided Figma design. Each restaurant should have a name, description, rating, and an image. <br />
- [x] **Mark as Favorite**: Allow users to mark a restaurant as a favorite. Favorites should be indicated with a heart icon<br />

#### Backend

- [x] **TRPC**: The backend should be built using TRPC. If you are using nextjs, use edge functions to serve trpc endpoint.<br />
- [x] **Database**: Use PostgreSQL to store restaurant data.<br />
- [x] **Prisma ORM**: Use Prisma as the ORM for database interactions.<br />
- [x] **Mock Data**: Use the provided mock data for the restaurant list. This data should be stored in the PostgreSQL database.<br />
- [x] **API Endpoints**: Implement the following TRPC procedures:<br />
  - `getRestaurants`: Retrieve all restaurants<br />
  - `addFavorite`: Mark a restaurant as a favorite<br />

## Instructions

# Download node module:

`npm install`

### Commands to Run

1. Run the backend: `cd backend && npm run start:dev`
2. Run the frontend: `cd frontend && npm run start`
3. Run the whole application: `npm run start:app`

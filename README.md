# Abconvert-shop

Demo: https://shop-test-alpha.vercel.app/

This project did not focus heavily on UI design but primarily emphasized:

- Frontend framework configuration
- Fetch API encapsulation for streamlined data fetching
- Various rendering strategies (SSG, SSR, CSR, ISR) based on different frontend scenarios
- Implementation of two backend APIs for integration
- Component structure: Proper separation of pages and shared components
- Application of Tailwind CSS for styling
- Frontend performance optimization: Using throttle to reduce unnecessary re-renders
- Deployment: Utilizing Docker Compose for containerized deployment

## Structure Overview

```javascript
src/
│── app/                  # Main application routes and pages
│   ├── api/              # API routes for server-side (Backend)
│   ├── collections/      # Collections-related pages
│   ├── product/          # Product-related pages
│   ├── globals.css       # Global CSS styles
│   ├── layout.tsx        # Layout wrapper for the app
│   ├── page.tsx          # Home
│
│── components/           # UI components
│   ├── collections/      # Collections reusable components
│   ├── common/           # Common components
│   ├── footer/           # Footer components
│   ├── header/           # Header components
│   ├── home/             # Home page components
│
│── core/base-services/   # Core services
│   ├── fetch-instance.ts # API request instance setup (Encapsulation)
│   ├── index.ts
│   ├── model.ts
│
│── services/             # Fetch api services
│── types/                # Type common definitions
│── utils/                # Utility functions
│
│── .env                  # Environment variables
```

## base-services

This project provides a reusable fetchInstance function to standardize API requests using fetch. The BaseServices class simplifies API interactions by encapsulating common HTTP methods (GET, POST, PUT, DELETE). This allows developers to focus on request configurations rather than implementation details.

- HttpDefaultOptions
  - baseApiURL (string): The default domain for API requests.
  - headers (Record<string, string>): Default headers applied to all requests, such as authorization tokens or content types.
- HttpRequestOptions
  - baseURL (string, optional): Overrides baseApiURL to use a different API domain for a specific request.
  - headers (Record<string, string>, optional): Custom headers that merge with the default headers.
  - body (Record<string, unknown> | FormData, optional): The request payload for POST and PUT requests, supporting both JSON and FormData.
  - renderType ("SSR" | "SSG" | "ISR", optional): Defines caching behavior for the request.
    - "SSR": No caching (cache: "no-store").
    - "SSG": Static site generation (cache: "force-cache").
    - "ISR": Incremental static regeneration (next: { revalidate: 5 }).

* Example

  ```javascript
  import BaseServices from "@/core/base-services";

  const baseServices = new BaseServices();

  export const getAllCollectionsApi = (): Promise<Response> => {
    const apiConfig: ApiConfig = {
      url: "path",
      baseURL: "https://custom.api.com", // Overrides default baseApiURL
      headers: {
        "X-Custom-Header": "CustomValue",
      },
      renderType:  ("SSR" | "SSG" | "ISR", optional):,
    };

    return baseServices.get(apiConfig);
  };

  ```

## API (Backend)

- Get Product Collections
  - Method: GET
  - Path: /api/collections
  - Query:
    - limit (number, optional) - Limits the number of collections returned.
- Product by Name
  - Method: GET
  - Path: /api/product
  - Query:
    - name (string, required) - The name of the product to retrieve.

## Build & Run

### .env

```
NEXT_PUBLIC_API_URL=https://shop-test-alpha.vercel.app/api
```

### Install

```
npm install
```

### Start

```
npm run dev
```

## Docker

```
docker-compose up
```

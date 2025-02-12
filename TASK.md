# Currency Converter Implementation

## Overview
I implemented a currency conversion feature that includes both API endpoints and a functional front-end component. The solution integrates with a third-party service (currencyapi.com) to provide real-time exchange rates and currency conversions.

## Demo
Watch a demo of the functionality here:
[Currency Converter Demo](https://www.loom.com/share/529911ae989d42f29f15fd70d2eb898d)

## Implementation Details

### Backend Development
1. Created new API endpoints under the `/exchange-rate` route:
   - GET `/latest` - Fetches latest exchange rates between two currencies
   - GET `/currencies` - Retrieves list of supported currencies

2. Followed existing project structure while implementing:
   - Added new route definitions
   - Created dedicated controller and service layers
   - Implemented error handling using existing utility classes

3. Technical Improvements:
   - Integrated environment variables for API key management using dotenv
   - Implemented API calls using Axios
   - Added documentation for service layer

### Frontend Development
Although not required, I added a user interface to demonstrate the functionality:

1. Created a currency converter component with features:
   - Amount input field
   - Currency selection dropdowns (source and target)
   - Real-time conversion display
   - Dynamic currency list populated from API

2. Integrated the component into the existing staking page for better user context

## Technical Environment
- Node.js version: 20.x
- Package manager: Yarn
- API Integration: currencyapi.com (Free tier - 300 requests)

## Future Improvements
1. Security Enhancements:
   - Add authentication middleware for API endpoints. We already have the middlewares in the backend but we don't have authentication on frontend so I made the APIs public for now since I wanted to show the functionality from the UI as well.
   - Implement rate limiting so our API can't be abused by users. Though currencyapi.com comes with a rate limit, it's better to have our own.
   - In the existing codebase, I saw some hardcoded values which should be moved to environment variables.

2. Code Quality:
   - Enhance error handling
   - Add comprehensive testing

3. Performance Optimizations:
   - Implement caching for currency lists
   - Add request validation
   - Optimize API calls

## Testing
- Verified API functionality using Postman
- Tested UI component across different currency pairs
- Validated error handling and edge cases

## Setup Instructions
1. Clone the repository
2. Install dependencies in both frontend and backend folders:
   ```bash
   cd frontend && yarn install
   cd backend && yarn install
   ```
3. Configure environment variables
   Create a `.env` file in the backend directory with the following:
     ```
     EXCHANGE_RATE_API_KEY="your-api-key"
     ```
1. Run development servers:
   ```bash
   # In frontend directory
   yarn dev

   # In backend directory
   yarn dev
   ```

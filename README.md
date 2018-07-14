## Simple algorithm to check properly nested string

#### A. Setup

1. Install [node v9+](https://nodejs.org/en/download/)

2. Install node dependencies

```
yarn install
```

#### B. Code
1. createDummyFile.js:
   - receive array number (file size) as input, generate dummy file to test
2. solutionInputString.js:
   - receive string as input
   - return true if input string is properly nested, otherwise return false
3. solutionInputFile.js:
   - receive fileName as input, use stream to read string from fileName, efficient for very big string
   - return true if input string is properly nested, otherwise return false

#### C. Run test

```
yarn test
```

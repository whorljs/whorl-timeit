module.exports = {
    "moduleFileExtensions": [
        "ts",
        "tsx",
        "js"
    ],
    "transform": {
        "^.+\\.(ts|tsx)$": "ts-jest"
    },
    "globals": {
        "ts-jest": {
            "tsConfig": "./config/tsconfig.test.json"
        }
    },
    "testMatch": [
        "**/__tests__/*.+(ts|tsx|js)"
    ],
    "testEnvironment": "node"
}
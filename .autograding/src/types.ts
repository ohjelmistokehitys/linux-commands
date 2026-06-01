export type AssertionResult = {
    title: string;
    status: string;
    meta?: {
        maxPoints?: number;
    };
};

export type VitestResults = {
    testResults?: Array<{
        assertionResults?: AssertionResult[];
    }>;
};

export type ScoreTest = {
    'test-name': string;
    'passed': boolean;
    'score': number;
    'max-score': number;
};

export type ScoreOutput = {
    'score': number;
    'max-score': number;
    'tests': ScoreTest[];
};

export type Classroom50Environment = {
    schema: string,
    classroom: string,
    assignment: string,
    usernames: string[],
    submission: string,
    commit: string,
    release: string,
    review: string,
    datetime: string
};

// See https://github.com/foundation50/classroom50/wiki/Autograders#the-resultjson-contract
export type Classroom50Report = ScoreOutput & Classroom50Environment;

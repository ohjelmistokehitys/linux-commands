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

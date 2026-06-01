import { readFile, writeFile } from 'node:fs/promises';
import { type ScoreOutput, type ScoreTest, type VitestResults } from './types';


function toNumber(value: unknown): number {
    return typeof value === 'number' && Number.isFinite(value) ? value : 0;
}

function buildScoreJson(vitest: VitestResults): ScoreOutput {
    const assertions = (vitest.testResults ?? []).flatMap(
        (suite) => suite.assertionResults ?? []
    );

    const tests: ScoreTest[] = assertions.map((assertion) => {
        const maxScore = toNumber(assertion.meta?.maxPoints);
        const passed = assertion.status === 'passed';

        return {
            'test-name': assertion.title,
            'passed': passed,
            'score': passed ? maxScore : 0,
            'max-score': maxScore,
        };
    });

    const totalScore = tests.reduce((sum, test) => sum + test['score'], 0);
    const totalMaxScore = tests.reduce((sum, test) => sum + test['max-score'], 0);

    return {
        'score': totalScore,
        'max-score': totalMaxScore,
        'tests': tests,
    };
}

async function main(): Promise<void> {
    const inputPath = process.argv[2];
    const outputPath = process.argv[3];

    if (!inputPath || !outputPath) {
        console.error('Usage: convert-test-report.ts <input-path> <output-path>');
        process.exit(1);
    }

    const raw = await readFile(inputPath, 'utf-8');
    const parsed = JSON.parse(raw) as VitestResults;
    const transformed = buildScoreJson(parsed);

    await writeFile(outputPath, `${JSON.stringify(transformed, null, 4)}\n`, 'utf-8');
}

main().catch((error: unknown) => {
    const message = error instanceof Error ? error.message : String(error);
    console.error(`Failed to build score JSON: ${message}`);
    process.exit(1);
});

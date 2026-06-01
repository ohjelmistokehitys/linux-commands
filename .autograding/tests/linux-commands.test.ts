import { describe, expect, test } from 'vitest';
import { $ } from 'zx';

declare module 'vitest' {
    interface TaskMeta {
        maxPoints: number
    }
}

// change the working directory to the repository root
$.cwd = (await $`cd .. && pwd`).stdout.trim();


describe('Hello world', () => {
    test('Prints Hello world!', async ({ task }) => {
        task.meta.maxPoints = 5;

        const { stdout } = await $`./01_hello_world.sh`;
        expect(stdout).toMatch(/Hello world/i);
    });
});

describe('Folders', () => {

    test('Prints the working directory', async ({ task }) => {
        task.meta.maxPoints = 5;

        const { stdout } = await $`./02_print_working_directory.sh`;
        expect(stdout).toContain($.cwd);
    });

    test('Lists the contents of the current directory', async ({ task }) => {
        task.meta.maxPoints = 5;

        await $`touch .gitignore readme.md`;

        const { stdout } = await $`./03_list_directory.sh`;
        expect(stdout).toContain('.gitignore');
        expect(stdout).toContain('readme.md');
    });

    test('Lists the contents of the log directory', async ({ task }) => {
        task.meta.maxPoints = 5;

        await $`touch logs/access.log`;

        const { stdout } = await $`./04_list_log_directory.sh`;
        expect(stdout).toContain('access.log');
    });

    test('Lists the contents of the parent directory', async ({ task }) => {
        task.meta.maxPoints = 5;

        const currentDirName = (await $`basename $(pwd)`).stdout.trim();

        const { stdout } = await $`./05_list_parent_directory.sh`;
        expect(stdout).toContain(currentDirName);
    });

    test('Lists the contents of the home directory', async ({ task }) => {
        task.meta.maxPoints = 5;

        const { stdout } = await $`cat ./06_list_home_directory.sh`;
        expect(stdout).toMatch(/.*~|HOME.*/);
    });
});


describe('Files and variables', () => {
    test('Listing authentication log', async ({ task }) => {
        task.meta.maxPoints = 5;

        const { stdout } = await $`./07_cat_auth_log.sh`;
        expect(stdout).toContain("Server listening on 0.0.0.0 port 22");
    });

    test('Cat two files', async ({ task }) => {
        task.meta.maxPoints = 5;

        const { stdout } = await $`./08_cat_two_files.sh`;
        expect(stdout).toContain("favicon.ico");

    });

    test('Path variable', async ({ task }) => {
        task.meta.maxPoints = 5;

        const { stdout } = await $`./09_echo_path.sh`;
        expect(stdout).toContain("/usr/local/bin:/usr/sbin");

    });
});

describe('Creating files and folders', () => {

    test('Creates a directory', async ({ task }) => {
        task.meta.maxPoints = 5;

        await $`rm -rf public`;
        await $`./10_create_directory.sh;`;

        const { stdout } = await $`ls -la | grep public`;
        expect(stdout).toContain("public");
    });

    test('Creates a .gitkeep file', async ({ task }) => {
        task.meta.maxPoints = 5;

        await $`./11_create_gitkeep.sh`;

        const { stdout } = await $`ls -la public/`;
        expect(stdout).toContain(".gitkeep");
    });
});

describe('Writing files', () => {

    test('Ignore node_modules directory', async ({ task }) => {
        task.meta.maxPoints = 5;

        await $`./12_ignore_node_modules.sh`;
        const { stdout } = await $`cat .gitignore`;

        expect(stdout).toContain("node_modules");
    });

    test('Remove file', async ({ task }) => {
        task.meta.maxPoints = 5;

        const { stdout } = await $`cat ./13_remove_file.sh`;
        expect(stdout).toContain("error.log");
    });
});

describe('Redirection and piping', () => {
    test('Redirect output to a file', async ({ task }) => {
        task.meta.maxPoints = 5;

        await $`rm -rf logs/all.txt`;
        await $`./14_cat_to_file.sh`;

        const { stdout } = await $`cat logs/all.txt`;
        expect(stdout).toContain("favicon.ico");
    });

    test('Head command', async ({ task }) => {
        task.meta.maxPoints = 5;

        const { stdout } = await $`./15_head.sh`;
        expect(stdout).toContain("DESCRIPTION");
    });
});

describe('CURL and base64', () => {
    test('Installing curl', async ({ task }) => {
        task.meta.maxPoints = 5;
        const { stdout } = await $`cat 16_install.sh`;
        expect(stdout).toContain("curl");
    });

    test('Fetching data with curl', async ({ task }) => {
        task.meta.maxPoints = 5;
        const { stdout } = await $`cat 17_curl.sh`;
        expect(stdout).toContain("curl")
    });

    test('Base64 decoding', async ({ task }) => {
        task.meta.maxPoints = 5;
        const { stdout } = await $`./18_base64.sh`;
        expect(stdout).toContain("Once upon a time");
    });
});

describe('Processes', () => {

    test('Listing processes', async ({ task }) => {
        task.meta.maxPoints = 5;

        const { stdout } = await $`cat 19_processes.sh`;
        expect(stdout).toContain("sshd");

    })

    test('Ending a process', async ({ task }) => {
        task.meta.maxPoints = 5;

        const { stdout } = await $`cat 20_end_process.sh`;
        expect(stdout).toContain("kill");

    });
});


# Linux commands

(For Finnish version, see [readme_fi.md](./readme_fi.md).)

This repository contains exercises for learning Linux commands. The commands are compatible with most Linux/Unix versions, so compatibility issues should not occur. Windows also works well together with [WSL2](https://learn.microsoft.com/en-us/windows/wsl/install), but *PowerShell* and *cmd* are not suitable for this exercise. Alternatively, you can use a [GitHub Codespaces](https://github.com/features/codespaces), a [development container](https://code.visualstudio.com/docs/remote/containers) or a Docker container, which is described in more detail below.

> [!WARNING]
> Be careful when using the command line. Incorrect or improperly used commands can cause irreversible damage to files or the system. Do not copy and run commands you find in other sources unless you are sure what they do.
>
> If you are unsure, ask for advice in the course discussion channels. A Codespaces environment, a separate virtual machine, a development container, or a Docker container can help isolate the exercises from your own operating system and other files.


## Review and automated grading of exercises

Exercises are reviewed and graded by automated tests. The tests run your commands and check the results. Behind the scenes, the [GitHub Actions](https://github.com/features/actions) continuous integration service is used. You can try the exercises multiple times if necessary. In that case, create a new commit and push the changes to GitHub again.


## Cloning the exercises

Once you have accepted the exercise and received a personal copy of the repository, clone it to your own machine with the `git clone` command. Then, in the terminal, change into the cloned directory (for example, `cd repository-name`).

When cloning the repository, make sure your own GitHub username is at the end of the Git address. If your username is missing from the address, that is not your personal copy of the exercise. In that case, check the course instructions for how to accept the exercise.


## Submitting your solutions

Once you have solved part or all of the exercises and committed your solutions, submit them for evaluation with the `git push` command. Git push will automatically trigger a workflow that tests all of your commands and gives them either an accepted or rejected result.

After GitHub Actions has run your code, you can see the result in the Actions tab of your GitHub repository. The evaluation usually takes a couple of minutes to complete.

By clicking the most recent workflow run behind the link above, you can get more detailed information about the exercise evaluation. Your score is shown at the bottom of the page. By clicking the grading heading, you can view the steps that were performed during evaluation and their results.


## Docker, Development Containers, and Codespaces (recommended)

Running the exercise in your own isolated environment is recommended both to protect your operating system and to mimic the evaluation environment. A good option for this is the [Visual Studio Code Dev Containers](https://code.visualstudio.com/docs/devcontainers/containers) extension, which uses Docker containers. You can also open the development container in GitHub Codespaces by following [this guide](https://docs.github.com/en/codespaces/developing-in-a-codespace/creating-a-codespace-for-a-repository#creating-a-codespace).

Alternatively, you can install Docker and start a new container using the [compose.yaml](./compose.yaml) file. Running the command `docker compose run ubuntu` in this directory starts a new Ubuntu container where you can complete the exercises. The container is isolated from your own operating system, making it a safer environment for practicing command-line usage.


## Exercises

In each exercise, the goal is to run a specific command or command sequence. The executed command should be added to the corresponding `.sh` file. We recommend first trying the commands directly in the terminal and, once the command works, saving it in a file. Track your changes to the scripts with `git add` and `git commit`.

The necessary commands are not provided as ready-made learning material by the course; you need to figure out what commands are required in each case. Use search engines and tutorials as helpful resources. You can also ask for help in the course discussion channels if some part of the exercise is unclear or you run into problems.

When the exercises are evaluated, the commands are executed directly from the files, so you should also make sure your solutions work when run from the files. For example, running `./01_hello_world.sh` should produce the expected output. Note that the scripts are executed from the root of this repository during evaluation, that is, from the directory where this `readme.md` file is located. Therefore, make sure your scripts do not assume a different working directory.


### Hello world

This is a warm-up exercise where it is enough to run a provided command and make one change to the [01_hello_world.sh](./01_hello_world.sh) file. Make sure you get it to run successfully before moving on.

1. **Echo**

    You can print text in the terminal with the `echo` command. Try writing `echo 'Hello world!'` in the terminal.

    Then open the attached [01_hello_world.sh](./01_hello_world.sh) file in a text editor and follow the instructions there. When you are ready, save the file and try running it from the terminal with `./01_hello_world.sh`. Once the script prints the text `Hello world!` to the screen, you can move on to the next exercise.


### Directories

The next sections introduce basic Linux commands related to directories and files.

2. **Current path**

    Write a command that prints the path of the current directory, for example `/home/me/linux-commands-me` or `/app`.

    Add the command you used to [02_print_working_directory.sh](./02_print_working_directory.sh). Make sure the command still works when executed from the file in the terminal: `./02_print_working_directory.sh`.

    *💡 The output must be dynamic, so it should print the path of the current directory regardless of where the script is executed.*

3. **Listing the current directory**

    Write a command that lists all files and subdirectories in the current directory in the so-called "long format". The listing should therefore include hidden files and file modification times, for example in the following format:

    ```
    drwxr-xr-x+ 5 me me 4096 Jan  9 13:45 .
    drwxr-xr-x+ 5 me me 4096 Jan  9 13:45 ..
    -rwxr-xr-x  1 me me   19 Jan 10 08:14 01_hello_world.sh
    -rwxr-xr-x  1 me me    4 Jan 10 08:14 02_print_working_directory.sh
    ...
    ```

    Add the command you used to [03_list_directory.sh](./03_list_directory.sh) and verify that it works by running it.

4. **Listing the log directory**

    This repository contains a directory named ["log"](./log/). Write a command that lists all files and directories in that subdirectory in long format. The format should be the same as in the previous item.

    Add the command you used to [04_list_log_directory.sh](./04_list_log_directory.sh).

5. **Listing the parent directory**

    Write a command that lists all files and subdirectories in the parent directory of the current directory in long format. The listing should therefore include hidden files and file modification times, as in the previous items.

    Add the command you used to [05_list_parent_directory.sh](./05_list_parent_directory.sh).

6. **Listing the home directory**

    Write a command that lists all files and subdirectories in the user’s home directory in long format. The listing should therefore include hidden files and file modification times, as in the previous items.

    Add the command you used to [06_list_home_directory.sh](./06_list_home_directory.sh).

### Printing files and variables

The following points introduce printing files and environment variables in the terminal.

7. **File contents**

    Write a command that prints the contents of [log/auth.log](log/auth.log) to the screen.

    Add the command you used to [07_cat_auth_log.sh](./07_cat_auth_log.sh).

8. **Contents of multiple files**

    Write a command that prints the contents of both [log/auth.log](log/auth.log) and [log/access.log](log/access.log) to the screen at the same time.

    Add the command you used to [08_cat_two_files.sh](./08_cat_two_files.sh).

9. **Environment variable**

    Write a command that prints the value of the [`PATH` environment variable](https://en.wikipedia.org/wiki/PATH_(variable)). This variable typically contains a long string of directories separated by colons, such as `/bin:/usr/bin:/usr/local/bin`.

    Add the command you used to [09_echo_path.sh](./09_echo_path.sh).


### Creating files and directories

New files and directories can be created from the command line using several different commands. The following sections introduce these basic commands.

10. **Create a directory**

    Write a command that creates a new directory named `sandbox`. The created directory should appear in the list of the current directory.

    Add the command you used to [10_create_directory.sh](./10_create_directory.sh). Try running the command and verify that it creates the directory. Creating the directory will fail if a directory with the same name already exists, so you may need to remove an earlier empty directory if necessary.

    *💡 Git does not track empty directories by default. A created directory may appear in `ls`, but it will not appear in `git status`. If you want the directory to be tracked by version control, you should create an empty file inside it (the next exercise).*

11. **Create a file**

    Git does not track empty directories by default. To add the `sandbox` directory to version control, you need to create a file inside it.

    Write a command that adds an empty file named `.gitkeep` to the `sandbox` directory you just created. If needed, read more in the discussion ["What are the differences between .gitignore and .gitkeep?"](https://stackoverflow.com/a/7229996).

    Add the command you used to create the file to [11_create_gitkeep.sh](./11_create_gitkeep.sh). In this exercise, do not create the directory again. Instead, you can assume that the previous step has already been completed and the directory exists.

    *💡 Now that `sandbox` is no longer empty, add it to version control as well.*


### Writing to a file

You can write to files from the command line using several different commands and techniques. The following sections introduce these basic commands.

12. **Appending to a file**

    Git uses a special [.gitignore file](https://git-scm.com/docs/gitignore) where you can add a list of files and directories that should not be included in version control. Typical examples include compiled program files and dependency directories such as `node_modules`, or files containing environment-specific settings such as `.env`.

    Write a command that adds the line `node_modules` to the end of the current `.gitignore` file. Note that your command must not replace the file’s current contents; it should add a new line after the existing ones. If you accidentally change the original contents of the file, you can restore them with `git restore .gitignore`.

    Add the command you used to [12_ignore_node_modules.sh](./12_ignore_node_modules.sh).

    *💡 Also commit the modified `.gitignore` file.*

13. **Deleting a file**

    Write a command that deletes the file `log/error.log`. If you want to test deleting the file multiple times, you can restore it from Git history with `git restore log/error.log`.

    Add the command you used to [13_remove_file.sh](./13_remove_file.sh).

    *💡 Deleting a file locally does not automatically remove it from version control. If you want, you can also remove it from version control with [`git rm`](https://git-scm.com/docs/git-rm).*


### Redirection and piping

Output produced by different commands is often redirected to files or used as input for other commands. The following sections introduce these basic concepts.

14. **Redirecting to a file**

    Write a command that prints the contents of all `.log` files in the `log` subdirectory at once and redirects them to a new file named `log/all.txt`.

    Add the command you used to [14_cat_to_file.sh](./14_cat_to_file.sh).

    *💡 `all.txt` is mentioned in the .gitignore file, so it will not appear in `git status` and will not be added to version control.*

15. **Piping**

    Piping allows you to pass the output of one program to another program as standard input. For example, the command `ls -la | grep ".sh"` lists the contents of a directory and pipes the result to the `grep` command, which filters the output to include only the lines that contain the text `.sh`.

    Write a command combination that shows the first **5 lines** of the `head` command help. You can view the help with `head --help`. By reading the help, you can find out how to display only the first 5 lines from the beginning of the input. Pipe the output of the help command to `head` so that only the first 5 lines are printed.

    Add the command you used to [15_head.sh](./15_head.sh).


### CURL and base64

Installing packages, making HTTP requests, and decoding base64 are useful skills when working in the command line. The following sections introduce these basic concepts.

16. **Installing a package**

    Install the [`curl` tool](https://en.wikipedia.org/wiki/CURL) for yourself, which allows you to make HTTP requests conveniently from the command line. We recommend using your operating system’s package manager, such as [`apt` (Advanced Packaging Tool)](https://ubuntu.com/server/docs/package-management).

    Add the installation command you used to [16_install.sh](./16_install.sh). If `curl` is already installed on your system, write a command in the file that checks its version, for example `curl --version`.

    *💡 If you encounter the error "E: Unable to locate package curl", you can find an explanation of the problem and instructions for fixing it in [this Stack Overflow discussion](https://stackoverflow.com/a/27273543).*

17. **Curl**

    Use the `curl` command you just installed to make an HTTP request that fetches a JSON-formatted list of example posts from https://jsonplaceholder.typicode.com/posts. ["JSONPlaceholder is a simple fake REST API for testing and prototyping."](https://github.com/typicode/jsonplaceholder)

    Add the command you used to [17_curl.sh](./17_curl.sh). Running `./17_curl.sh` should print the JSON structure to the screen rather than saving it to a file.

18. **Base 64**

    The file [secret.txt](./secret.txt) contains a secret story stored in [base64 format](https://en.wikipedia.org/wiki/Base64). Learn about the [`base64` command](https://www.google.com/search?q=base64+decode+file+in+linux) and decode the file into readable text.

    Add the command you used to [18_base64.sh](./18_base64.sh). Running `./18_base64.sh` should print the plain text to the screen rather than saving it to a file.


### Processes

The following sections introduce process management in Linux. A process is a running program, and Linux has several tools for viewing and managing processes. The following points are based on the ["Viewing and Monitoring Processes in Linux" (Ubuntu.com)](https://discourse.ubuntu.com/t/viewing-and-monitoring-processes-in-linux/26024) tutorial, which you need to read to complete the exercise.

Since the processes running on your own machine differ from those in the tutorial and the evaluation environment, it is enough to study the tutorial examples and save the commands in scripts. You can try the commands in your own environment, but they do not need to produce the same results as in the tutorial.

19. **Listing processes**

    Read the [Ubuntu tutorial](https://discourse.ubuntu.com/t/viewing-and-monitoring-processes-in-linux/26024) for information about listing process data. Follow the examples in the tutorial and, if possible, try applying them in your own environment.

    Add the command shown in the tutorial for viewing information about the `sshd` process to [19_processes.sh](./19_processes.sh). You likely do not have a corresponding process running on your machine, so it is enough to study the command based on the tutorial.

20. **Stopping a process**

    Continue studying the [same tutorial](https://discourse.ubuntu.com/t/viewing-and-monitoring-processes-in-linux/26024) for information about stopping processes. Follow the instructions and, at your discretion, try applying them in your own environment.

    Add the command shown in the tutorial for stopping process `3003` to [20_end_process.sh](./20_end_process.sh). Note that you do not need to actually stop the process on your own machine; it is enough to save the command in the file. If you want, you can save the line as a comment (`#`) to avoid accidentally stopping a process.


## Submitting the exercise

Once you have completed the exercise fully or partially, make sure you have added all the necessary changes to version control with the `git status` and `git add` commands. Then create a commit and push. Check the Actions tab in your GitHub repository to confirm that the exercises you solved have been evaluated successfully. If something did not work, you can fix it and submit the correction again. Remember to ask for help and tips in the course discussion channels if anything is unclear or if you encounter problems.


## Licenses and copyrights

The file `log/auth.log` is adapted from Digital Ocean’s article ["How To Monitor System Authentication Logs on Ubuntu"](https://www.digitalocean.com/community/tutorials/how-to-monitor-system-authentication-logs-on-ubuntu) and is licensed under the [CC BY-NC-SA](https://creativecommons.org/licenses/by-nc-sa/4.0/) license. The other log files, the Docker Compose file, and [the secret message](./secret.txt) were created with the help of [ChatGPT](https://chatgpt.com/).

This exercise was created by Teemu Havulinna and is licensed under the [CC BY-NC-SA](https://creativecommons.org/licenses/by-nc-sa/4.0/) license.

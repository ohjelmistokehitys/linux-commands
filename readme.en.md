# Linux Commands

This repository contains exercises for learning Linux commands. The commands are compatible with most Linux/Unix variants, so compatibility issues **should not** occur. Windows with [WSL2](https://learn.microsoft.com/en-us/windows/wsl/install) also works well, but PowerShell and cmd alone are not enough for this assignment. Alternatively, you can use [GitHub Codespaces](https://github.com/features/codespaces) or a [Docker](https://www.docker.com/) container, described further below.

> [!WARNING]
> Be careful when using the command line. Incorrect or improperly used commands can cause irreversible damage to files or the system. Do not copy and run commands from various sources unless you are sure what they do. If you are unsure, ask for help in the course discussion channels. A Codespaces environment, a separate virtual machine, or a Docker container can help isolate the exercises from your own operating system and files.


## GitHub Classroom and automatic grading

Exercises are graded using [GitHub Classroom](https://classroom.github.com/), which runs your commands and automatically checks and scores the results. Under the hood, GitHub Classroom uses continuous integration via [GitHub Actions](https://github.com/features/actions). You can retry exercises multiple times if needed. In that case, make a new commit and push your changes to GitHub again.


## Cloning the exercises

After accepting the assignment in GitHub Classroom and getting your personal copy of the repository, clone it with `git clone`. Then move into the cloned directory in the command line (e.g., `cd repository-name`).

When cloning, make sure your own GitHub username appears at the end of the Git URL. If your username is missing from the URL, this is not your personal copy of the assignment. In that case, check the course instructions for accepting the assignment correctly.


## Docker (recommended 🪄)

If you have Docker installed, you can start a new Ubuntu container for this assignment and solve the exercises inside the container. Run the following command in the root directory of this assignment (the same directory where this file is located):

```sh
docker compose run ubuntu
```

The [Docker Compose tool](https://docs.docker.com/compose/) reads the [docker-compose.yml configuration file](./docker-compose.yml) and starts a new Ubuntu container accordingly. This assignment directory is mounted inside the container at `/app`, so you can edit the same files either on your host OS or inside the container, and changes will be visible in both. You can exit the container with the `exit` command. Changes made in the mounted `/app` assignment directory persist even if the container is removed.

If you use the `run` command above, you can find a more detailed explanation of how it works in [docker-compose.yml](./docker-compose.yml). This command creates a new container each time it is run. If you want to return to a previously created container, use `docker ps --all` to find the container ID, then restart it with `docker start --attach --interactive <container_id>`. Alternatively, you can remove the container automatically when closing it by adding the `--rm` flag to `docker compose run`:

```sh
# list all containers, including stopped ones
docker ps --all

# restart a previously created container and attach it to the terminal
docker start --attach --interactive CONTAINER_ID

# start a new container and remove it after closing
docker compose run --rm ubuntu
```

## Submitting answers

After solving some or all exercises and committing your answers, submit the solutions for grading with `git push`. Git push automatically triggers a workflow that tests all your commands and gives each one a pass/fail result.

Once GitHub Actions has run your code, you can see the result in your repository’s [Actions tab](../../actions/workflows/classroom.yml). Grading typically takes a couple of minutes.

By opening the latest "GitHub Classroom Workflow" run from the link above, you can view more detailed grading information. The points you received are shown near the bottom of the page. Click the "Autograding" section to inspect the grading steps and their results in detail.


## Exercises

In each exercise, the goal is to run a specific command or command sequence. Add the executed command to the corresponding `.sh` file. We recommend first trying commands directly in the terminal, and once a command works, copying it into the matching file. Add your script changes to version control with `git add` and `git commit`.

The required commands are not provided as ready-made course material. You are expected to find out which commands are needed in each case yourself. Use search engines and tutorials, and ask for help in course discussion channels if something is unclear or you run into problems.

When grading, commands are executed directly from files, so you should verify your solutions by running them from files as well, for example `./01_hello_world.sh`. Note that scripts are executed from the root of this repository, i.e., the directory where this `readme.md` file is located. Make sure your scripts do not assume a different working directory.


### Hello world

This is a warm-up task where you only need to run the pre-given command and make one change in `01_hello_world.sh`. Make sure it runs successfully before moving on.

1. **Echo**

    You can print text in the command line with the `echo` command. Try typing `echo 'Hello world!'` in the terminal.
    
    Then open the [`01_hello_world.sh` file](./01_hello_world.sh) in a text editor and follow the instructions there. When finished, save the file and try running it with `./01_hello_world.sh`. Once running the file prints `Hello world!`, you can continue to the next task.


### Directories

The following sections introduce basic Linux commands related to directories and files.

2. **Current path**

    Write a command that prints the path of the current directory, e.g. `/home/me/linux-commands-me` or `/app`.

    Add the command you used to `02_print_working_directory.sh`. Make sure the command still works when the file is executed from the terminal: `./02_print_working_directory.sh`.

3. **List current directory**

    Write a command that lists **all** files and subdirectories in the current directory in so-called "long format". The listing should therefore include hidden files and modification times, for example in the following format:

    ```
    drwxr-xr-x+ 5 me me 4096 Jan  9 13:45 .
    drwxr-xr-x+ 5 me me 4096 Jan  9 13:45 ..
    -rwxr-xr-x  1 me me   19 Jan 10 08:14 01_hello_world.sh
    -rwxr-xr-x  1 me me    4 Jan 10 08:14 02_print_working_directory.sh
    ...
    ```

    Add the command you used to `03_list_directory.sh` and verify it works by running it.

4. **List the log directory**

    Inside this repository there is a directory called [**"log"**](./log/). Write a command that lists all files and directories in that subdirectory in long format. The formatting should be the same as in the previous task.

    Add the command you used to `04_list_log_directory.sh`.

5. **List parent directory**

    Write a command that lists **all** files and subdirectories in the parent directory of the current directory in long format. The listing should include hidden files and modification times as in previous tasks.

    Add the command you used to `05_list_parent_directory.sh`.

6. **List home directory**

    Write a command that lists **all** files and subdirectories in the user’s home directory in long format. The listing should include hidden files and modification times as in previous tasks.

    Add the command you used to `06_list_home_directory.sh`.

### Printing files and variables

The following tasks introduce printing files and environment variables in the command line.

7. **File contents**

    Write a command that prints the contents of [log/auth.log](log/auth.log) to the screen.

    Add the command you used to `07_cat_auth_log.sh`.


8. **Contents of multiple files**

    Write a command that prints the contents of both [log/auth.log](log/auth.log) and [log/access.log](log/access.log) to the screen at the same time.

    Add the command you used to `08_cat_two_files.sh`.


9. **Environment variable**

    Write a command that prints the value of the [`PATH` environment variable](https://en.wikipedia.org/wiki/PATH_(variable)). The variable typically contains a long string of colon-separated directories, such as `/bin:/usr/bin:/usr/local/bin`.

    Add the command you used to `09_echo_path.sh`.


### Creating files and directories

New files and directories can be created from the command line using several different commands. The following tasks introduce these basics.

10. **Create a directory**

    Write a command that creates a new directory named `documents`. The created directory should appear in the current directory listing.

    Add the command you used to `10_create_directory.sh`. Try running the command and verify that it creates the directory. Creating the directory fails if one with the same name already exists, so you may remove a previously created empty directory if needed.

    💡 By default, Git does not track empty directories. The created directory appears with commands like `ls`, but it will not appear in `git status`. If you want the directory in version control, create an empty file in it (next task).


11. **Create a file**

    By default, Git does not track empty directories. To add the `documents` directory to version control, you need to create a file in it.

    Write a command that adds an empty file named `.gitkeep` to the `documents` directory you just created. If needed, read more in ["What are the differences between .gitignore and .gitkeep?"](https://stackoverflow.com/a/7229996)

    Add the command you used to create the file to `11_create_gitkeep.sh`. Do not recreate the directory in this task; use the directory already created by the previous script.

    💡 Now that `documents` is no longer empty, add it to version control too.


### Writing to a file

Writing to a file can be done from the command line with several different commands. The following tasks introduce these basics.

12. **Append to a file**

    Git uses a special [.gitignore file](https://git-scm.com/docs/gitignore), where you can list files and directories that should not be included in version control. Typical examples are compiled program files and dependency directories like `node_modules`, or environment-specific config files such as `.env`.

    Write a command that appends the line `node_modules` to the end of the current `.gitignore` file. Note that **your command must not overwrite the current file contents**; it must add a new line after the existing content. If you accidentally change the original file content, you can restore it with `git restore`: `git restore .gitignore`.

    Add the command you used to `12_ignore_node_modules.sh`.

    💡 Also commit the modified `.gitignore` file.

13. **Delete a file**

    Write a command that removes the file `log/error.log`. If you want to test removing the file multiple times, you can restore it from Git history with `git restore`: `git restore log/error.log`.

    Add the command you used to `13_remove_file.sh`.

    💡 Deleting a file locally does not automatically remove it from version control. If you want, you can remove it from version control as well with [`git rm`](https://git-scm.com/docs/git-rm).


### Redirection and piping

Outputs from commands are often redirected into files or piped as input to other commands. The following tasks introduce these basics.

14. **Redirect to a file**

    Write a command that prints the contents of all `.log` files in the `log` subdirectory at once, and redirects them into a new file `log/all.txt`.

    Add the command you used to `14_cat_to_file.sh`.

    💡 `all.txt` is listed in `.gitignore`, so it does not appear in `git status` and is not added to version control.

15. **Piping**

    With piping, you can pass the output of one program as input to another. Write a combination of commands that shows the **first 20 lines** of the `head` command manual. You can display the full manual with `man head`, and by reading it you can find out how to show only part of the beginning of a file.
    
    First run a command that outputs the manual. Pipe that output into the `head` command so that only the first 20 lines are shown.

    Add the command you used to `15_head.sh`.

    💡 If you encounter the error "This system has been minimized...", first install the `man` tool with: `unminimize` and `apt install man-db`.


### CURL and base64

Installing packages, making HTTP requests, and decoding base64 are useful command-line skills. The following tasks introduce these basics.

16. **Install a package**

    Install [`curl`](https://en.wikipedia.org/wiki/CURL), which can be used to make HTTP requests conveniently from the command line. We recommend using your operating system’s package manager, such as [`apt` (Advanced Packaging Tool)](https://ubuntu.com/server/docs/package-management).

    Add the installation command you used to `16_install.sh`. If curl is already installed on your system, write a command in the file that checks its version, e.g. `curl --version`.

    💡 If you see the problem "E: Unable to locate package curl", you can find an explanation and fix in [this StackOverflow discussion](https://stackoverflow.com/a/27273543).

17. **Curl**

    Use the `curl` command you just installed to make an HTTP request that fetches a JSON list of sample posts from https://jsonplaceholder.typicode.com/posts. ["JSONPlaceholder is a simple fake REST API for testing and prototyping."](https://github.com/typicode/jsonplaceholder)

    Add the command you used to `17_curl.sh`. Running `./17_curl.sh` should print the JSON structure to the screen, not save it to a file.

18. **Base64**

    File [secret.txt](./secret.txt) contains a secret story stored in [base64 format](https://en.wikipedia.org/wiki/Base64). Learn the [`base64` command](https://www.google.com/search?q=base64+decode+file+in+linux) and decode the file contents into readable text.

    Add the command you used to `18_base64.sh`. Running `./18_base64.sh` should print plain text to the screen, not save it to a file.


### Processes

The following tasks introduce process management in Linux. A process is a running program, and Linux has multiple tools for viewing and managing processes. These tasks are based on the tutorial ["Viewing and Monitoring Processes in Linux" (Ubuntu.com)](https://discourse.ubuntu.com/t/viewing-and-monitoring-processes-in-linux/26024), which you need to study to complete the tasks.

Because your own machine has different running processes than the tutorial and grading machine, it is enough to study the tutorial examples and save the commands into scripts. You can try the commands in your environment, but they do not need to produce the same output as in the tutorial.

19. **List processes**

    Study the [Ubuntu tutorial](https://discourse.ubuntu.com/t/viewing-and-monitoring-processes-in-linux/26024) section about listing process information. Follow the examples and apply them in your own environment when possible.

    Add the tutorial command for viewing information about the `sshd` process to `19_processes.sh`. On your own machine, that process is probably not running, so it is enough to understand the command from the tutorial.

20. **End a process**

    Continue studying [the same tutorial](https://discourse.ubuntu.com/t/viewing-and-monitoring-processes-in-linux/26024), specifically the section about terminating processes. Follow the instructions and apply them in your environment at your discretion.

    Add the tutorial command for terminating process `3003` to `20_end_process.sh`. Note that you do not need to actually terminate a process on your own machine; saving the command in the file is enough. If you want, you can save the line as a comment (`#`) so you do not accidentally terminate a process.


## Submitting the assignment

After completing all or part of the assignment, make sure you have added all required changes to version control using `git status` and `git add`. Then commit and push. Check your GitHub repository’s Actions tab to ensure the solved exercises were graded successfully. If something did not pass, you can fix it and resubmit. Also remember to ask for help and tips in the course discussion channels if anything is unclear or you encounter problems.


## Licenses and copyrights

The file `log/auth.log` is borrowed from Digital Ocean’s article ["How To Monitor System Authentication Logs on Ubuntu"](https://www.digitalocean.com/community/tutorials/how-to-monitor-system-authentication-logs-on-ubuntu) and is licensed under [CC BY-NC-SA](https://creativecommons.org/licenses/by-nc-sa/4.0/). Other log files, the Docker Compose file, and the [secret message](./secret.txt) were created with assistance from [ChatGPT](https://chatgpt.com/).

This assignment was created by Teemu Havulinna and is licensed under [CC BY-NC-SA](https://creativecommons.org/licenses/by-nc-sa/4.0/).

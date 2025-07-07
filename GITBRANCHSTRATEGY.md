# Recommended Git Branch Strategy

## main or master (Production-ready code)

- Always contains stable and deployable code.

- You do not directly push here.

- Only updated via pull requests from dev or release branches.

## dev (Ongoing development)

- This is the default working branch for all development.

- All feature branches are merged into this.

- CI pipelines (builds/tests) usually run here frequently.

##  feature/<feature-name>
   One branch per feature or task.

- Branch off from dev.

- Example: feature/login-page, feature/payment-integration.

## bugfix/<bug-name> (Optional)
- For fixing bugs in the dev branch before release.

- Merged back into dev.

## hotfix/<issue-name> (Urgent production fixes)
- Used when a bug needs to be fixed immediately in production (main).

- Branch off from main, then merged into both main and dev.

## release/<version> (Optional, if doing versioned releases)
- Used to prepare code for release.

- Allows last-minute testing, versioning, tagging.

main
│
├── dev
│ ├── feature/user-auth
│ ├── feature/dashboard-ui
│ └── bugfix/navbar-overlap
│
├── release/v1.0.0
│
└── hotfix/payment-crash

# LearningNodeJS

Overall project, with simple sub projects to learn about NodeJS.

## Structure

- `docs/plans/` contains planning notes for the repo.
- `projects/01_task_tracker_cli/` contains a starter CLI project.
- `projects/02_simple_web_server/` contains a starter HTTP server project.
- `projects/03_weather_app/` contains a starter API client project.

Each project is intentionally independent and keeps its own `package.json`, source files, and tests.

## Getting started

Run commands from the specific project you want to work on.

Examples:

- `npm --prefix projects/01_task_tracker_cli start`
- `npm --prefix projects/02_simple_web_server start`
- `npm --prefix projects/03_weather_app start -- Seoul`

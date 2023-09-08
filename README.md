# Backend Stage One API Endpoint
This project is a response to the "Backend Stage One Task" for interns. It consists of a simple API endpoint that returns user information, current day of the week, UTC time, and relevant GitHub URLs based on specific query parameters.

## Features
- API Endpoint: A publicly accessible endpoint that returns data in JSON format.
- Dynamic Response: Returns data based on the provided slack_name and track query parameters.
- Validation: Ensures current UTC time is accurate to within +/- 2 minutes.

## Endpoints
GET /api: Retrieves the specified data structure based on the provided query parameters.

### Example:
`http://yourdeployedurl.com/api?slack_name=example_name&track=backend`

### Response Format
Here's a sample JSON response:
```
{
  "slack_name": "example_name",
  "current_day": "Monday",
  "utc_time": "2023-08-21T15:04:05Z",
  "track": "backend",
  "github_file_url": "https://github.com/username/repo/blob/main/yourfilename.ext",
  "github_repo_url": "https://github.com/username/repo",
  "status_code": 200
}
```
import express from 'express';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
	return res.status(200).json({ message: "This is a test route"})
})

app.get("/api", (req, res) => {
	const { slack_name, track } = req.query;

	if (!slack_name || !track) {
		return res.status(400).json({ message: "slack_name and track are required query parameters" })
	}

	const currentDate = new Date();
	const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
	const currentDay = dayNames[currentDate.getDay()];
	const utcTime = currentDate.toISOString();

	return res.status(200).json({
		slack_name,
		current_day: currentDay,
		utc_time: utcTime,
		track,
		github_file_url: "https://github.com/Abiodun-Shittu/Backend-Track/blob/main/stage-one/server.js",
		github_repo_url: "https://github.com/Abiodun-Shittu/Backend-Track",
		status_code: 200
	})
})

app.listen(port, () => {
	console.log(`server listening on http://localhost:${port}`);
});